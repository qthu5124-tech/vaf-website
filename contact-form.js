(function () {
    function getLang() {
        return typeof currentLang !== 'undefined' ? currentLang : 'vi';
    }

    function bindContactForm() {
        const form = document.getElementById('vaf-contact-form');
        const result = document.getElementById('form-result');
        if (!form || !result || form.dataset.bound === 'true') return;

        form.dataset.bound = 'true';
        const interest = new URLSearchParams(location.search).get('interest');
        const productSelect = form.querySelector('[name="Sản Phẩm Quan Tâm"]');
        if (interest && productSelect) productSelect.value = interest;

        form.addEventListener('focusin', function () {
            if (form.dataset.started === 'true') return;
            form.dataset.started = 'true';
            window.trackVafEvent?.('form_start', { form_name: 'vaf_quote_request' });
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            let sentSuccessfully = false;

            const lang = getLang();
            const txtSending = lang === 'vi' ? 'Đang gửi yêu cầu...' : 'Sending request...';
            const txtSuccess = lang === 'vi'
                ? 'Gửi yêu cầu thành công! Chuyên gia VAF sẽ liên hệ lại sớm nhất.'
                : 'Request sent successfully! Our experts will contact you soon.';
            const txtError = lang === 'vi'
                ? 'Có lỗi xảy ra, vui lòng kiểm tra lại!'
                : 'Something went wrong, please try again!';

            result.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> ${txtSending}`;
            result.classList.remove('hidden', 'text-green-500', 'text-red-500');
            result.classList.add('text-primary');
            if (submitButton) submitButton.disabled = true;

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...Object.fromEntries(new FormData(form)),
                    'Trang Gửi Yêu Cầu': location.href
                })
            })
                .then(async response => {
                    const json = await response.json();
                    if (response.status === 200) {
                        sentSuccessfully = true;
                        result.innerHTML = `<i class="fas fa-check-circle mr-2"></i> ${txtSuccess}`;
                        result.classList.replace('text-primary', 'text-green-500');
                        window.trackVafEvent?.('generate_lead', {
                            form_name: 'vaf_quote_request',
                            lead_source: 'website_form',
                            product_interest: form.elements['Sản Phẩm Quan Tâm']?.value || 'not_set'
                        });
                    } else {
                        result.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i> ${json.message || txtError}`;
                        result.classList.replace('text-primary', 'text-red-500');
                    }
                })
                .catch(() => {
                    result.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i> ${txtError}`;
                    result.classList.replace('text-primary', 'text-red-500');
                })
                .then(() => {
                    if (sentSuccessfully) form.reset();
                    if (submitButton) submitButton.disabled = false;
                    setTimeout(() => result.classList.add('hidden'), 7000);
                });
        });
    }

    window.bindContactForm = bindContactForm;
    bindContactForm();
})();
