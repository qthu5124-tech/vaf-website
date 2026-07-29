/* LOGIC MODULE TUYỂN DỤNG VAF
   Hồ sơ và CV được gửi tới sales6@vietfil.com qua FormSubmit. */
(function () {
    'use strict';
    const baseJobs = window.careersData || [];
    const getJobs = () => baseJobs.map(job => currentLang === 'en' ? { ...job, ...(window.careersTranslationsEn?.[job.id] || {}) } : job);
    const ui = {
        deadline: ['Hạn', 'Deadline'], details: ['Xem chi tiết', 'View details'],
        fullName: ['Họ và tên', 'Full name'], phone: ['Điện thoại', 'Phone'],
        message: ['Lời nhắn', 'Message'], submit: ['Gửi hồ sơ', 'Submit application'],
        consent: ['Tôi đồng ý để VAF sử dụng thông tin cho mục đích tuyển dụng.', 'I consent to VAF using my information for recruitment purposes.'],
        noMatch: ['Chưa có vị trí phù hợp với bộ lọc.', 'No positions match your filters.'],
        matches: ['vị trí phù hợp', 'matching positions'], jobDescription: ['Mô tả công việc', 'Job description'],
        requirements: ['Yêu cầu ứng viên', 'Candidate requirements'], benefits: ['Quyền lợi', 'Benefits'],
        workplace: ['Địa điểm làm việc', 'Work location'], applicationDeadline: ['Hạn nộp hồ sơ', 'Application deadline'],
        openings: ['vị trí', 'openings']
    };
    const t = key => ui[key][currentLang === 'en' ? 1 : 0];
    const originalStaticText = new WeakMap();
    function applyCareerStaticLanguage(scope) {
        if (!scope) return;
        const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (!node.nodeValue.trim()) continue;
            if (!originalStaticText.has(node)) originalStaticText.set(node, node.nodeValue);
            const original = originalStaticText.get(node);
            const trimmed = original.trim();
            node.nodeValue = currentLang === 'en' && window.careersUiEn?.[trimmed]
                ? original.replace(trimmed, window.careersUiEn[trimmed])
                : original;
        }
        scope.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(element => {
            ['placeholder', 'aria-label', 'alt'].forEach(attribute => {
                if (!element.hasAttribute(attribute)) return;
                const key = `careerOriginal${attribute.replace('-', '')}`;
                if (!element.dataset[key]) element.dataset[key] = element.getAttribute(attribute);
                const original = element.dataset[key];
                element.setAttribute(attribute, currentLang === 'en' && window.careersUiEn?.[original] ? window.careersUiEn[original] : original);
            });
        });
    }
    const faqItemsVi = [
        ['Tôi có thể ứng tuyển nhiều vị trí không?', 'Có. Bạn nên chọn các vị trí phù hợp nhất với kinh nghiệm và định hướng nghề nghiệp.'],
        ['Sau bao lâu tôi nhận được phản hồi?', 'VAF dự kiến phản hồi hồ sơ phù hợp trong 5–7 ngày làm việc.'],
        ['Sinh viên mới tốt nghiệp có thể ứng tuyển không?', 'Có. Hãy xem yêu cầu từng vị trí; VAF luôn chào đón ứng viên có nền tảng phù hợp và tinh thần học hỏi.'],
        ['CV của tôi được gửi đến đâu?', 'CV và thông tin ứng tuyển được gửi trực tiếp đến bộ phận tuyển dụng VAF qua địa chỉ sales6@vietfil.com.']
    ];
    const faqItemsEn = [
        ['Can I apply for multiple positions?', 'Yes. Choose the positions that best match your experience and career goals.'],
        ['How soon will I receive a response?', 'VAF expects to respond to suitable applications within 5–7 business days.'],
        ['Can recent graduates apply?', 'Yes. Check each position’s requirements; VAF welcomes candidates with a suitable foundation and a willingness to learn.'],
        ['Where is my CV sent?', 'Your CV and application details are sent directly to the VAF recruitment team at sales6@vietfil.com.']
    ];

    // Chuyển ký tự đặc biệt thành text an toàn trước khi chèn vào HTML.
    function escapeHtml(value) {
        return String(value || '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
    }
    function formatDate(value) {
        return new Intl.DateTimeFormat(currentLang === 'en' ? 'en-GB' : 'vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(`${value}T00:00:00`));
    }
    function optionHtml(values) {
        return [...new Set(values)].map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('');
    }
    function cardHtml(job) {
        return `<article class="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-primary hover:shadow-xl transition">
            <div class="flex justify-between gap-4"><span class="text-xs font-bold uppercase tracking-wider text-primary">${escapeHtml(job.department)}</span><span class="text-xs text-slate-500">${escapeHtml(job.type)}</span></div>
            <h3 class="font-heading text-xl md:text-2xl font-black text-secondary mt-3 group-hover:text-primary transition">${escapeHtml(job.title)}</h3>
            <p class="text-slate-600 mt-3 leading-6">${escapeHtml(job.summary)}</p>
            <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 mt-5"><span><i class="fas fa-location-dot text-primary mr-2"></i>${escapeHtml(job.location)}</span><span><i class="far fa-clock text-primary mr-2"></i>${t('deadline')} ${formatDate(job.deadline)}</span></div>
            <a href="${localizedPath('/tuyen-dung/' + encodeURIComponent(job.id))}" onclick="navigate('tuyen-dung/${escapeHtml(job.id)}');return false" class="inline-flex items-center mt-6 font-bold text-primary">${t('details')} <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition"></i></a>
        </article>`;
    }

    function renderFaq() {
        const host = document.getElementById('career-faq');
        if (!host) return;
        const faqItems = currentLang === 'en' ? faqItemsEn : faqItemsVi;
        host.innerHTML = faqItems.map((item, index) => `<article class="bg-white border border-slate-200 rounded-xl overflow-hidden"><button type="button" data-faq-index="${index}" aria-expanded="false" class="w-full p-5 flex justify-between gap-4 text-left font-bold text-secondary"><span>${item[0]}</span><i class="fas fa-plus text-primary mt-1"></i></button><div class="hidden px-5 pb-5 text-slate-600 leading-7">${item[1]}</div></article>`).join('');
        host.querySelectorAll('[data-faq-index]').forEach(button => button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isOpen));
            answer.classList.toggle('hidden', isOpen);
            button.querySelector('i').className = `fas ${isOpen ? 'fa-plus' : 'fa-minus'} text-primary mt-1`;
        }));
    }

    function applicationFormHtml(jobId) {
        const suffix = String(jobId || 'general').replace(/[^a-z0-9-]/gi, '-');
        return `<form class="career-application-form space-y-4" data-job-id="${escapeHtml(jobId || 'general')}" action="https://formsubmit.co/sales6@vietfil.com" method="POST" enctype="multipart/form-data" novalidate>
            <input type="text" name="_honey" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">
            <div><label for="career-name-${suffix}" class="block text-sm font-bold text-secondary mb-1">${t('fullName')} *</label><input id="career-name-${suffix}" name="name" autocomplete="name" required minlength="2" class="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary"></div>
            <div class="grid sm:grid-cols-2 gap-4"><div><label for="career-email-${suffix}" class="block text-sm font-bold text-secondary mb-1">Email *</label><input id="career-email-${suffix}" name="email" type="email" autocomplete="email" required class="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary"></div><div><label for="career-phone-${suffix}" class="block text-sm font-bold text-secondary mb-1">${t('phone')} *</label><input id="career-phone-${suffix}" name="phone" type="tel" inputmode="tel" autocomplete="tel" required pattern="[0-9+ .-]{9,15}" class="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary"></div></div>
            <div><label for="career-cv-${suffix}" class="block text-sm font-bold text-secondary mb-1">CV (PDF, DOC, DOCX – max. 5 MB) *</label><input id="career-cv-${suffix}" name="attachment" type="file" required accept=".pdf,.doc,.docx" class="w-full text-sm file:mr-3 file:border-0 file:rounded-lg file:px-3 file:py-2 file:bg-slate-100 file:font-bold"></div>
            <div><label for="career-message-${suffix}" class="block text-sm font-bold text-secondary mb-1">${t('message')}</label><textarea id="career-message-${suffix}" name="message" rows="3" class="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-primary resize-none"></textarea></div>
            <label class="flex gap-3 text-xs text-slate-500"><input name="consent" type="checkbox" required class="mt-0.5 accent-red-600">${t('consent')}</label>
            <button type="submit" class="w-full bg-primary hover:bg-primaryDark disabled:bg-slate-400 disabled:cursor-wait text-white font-bold py-3 rounded-xl transition"><span class="submit-label">${t('submit')}</span></button><p class="form-message hidden text-sm font-bold text-center" role="status" aria-live="polite"></p>
        </form>`;
    }

    function bindForms(scope) {
        scope.querySelectorAll('[data-application-form]').forEach(host => {
            if (host.dataset.bound) return;
            host.innerHTML = applicationFormHtml(host.dataset.jobId);
            host.dataset.bound = 'true';
            const form = host.querySelector('form');
            const returnedFromSubmission = new URLSearchParams(location.search).get('application') === 'success';
            if (returnedFromSubmission) {
                const successMessage = form.querySelector('.form-message');
                successMessage.classList.remove('hidden', 'text-red-600');
                successMessage.classList.add('text-green-600');
                successMessage.textContent = currentLang === 'en'
                    ? 'Application sent successfully! VAF will contact you if your profile is suitable.'
                    : 'Gửi hồ sơ thành công! VAF sẽ liên hệ khi hồ sơ của bạn phù hợp.';
                const cleanUrl = new URL(location.href);
                cleanUrl.searchParams.delete('application');
                history.replaceState(history.state, '', cleanUrl);
            }
            form.addEventListener('submit', event => {
                event.preventDefault();
                const message = form.querySelector('.form-message');
                const button = form.querySelector('button[type="submit"]');
                const buttonLabel = button.querySelector('.submit-label');
                const file = form.elements.attachment.files[0];
                let error = '';
                if (!form.checkValidity()) error = currentLang === 'en' ? 'Please complete all required fields correctly.' : 'Vui lòng điền đúng và đủ các trường bắt buộc.';
                else if (file && file.size > 5 * 1024 * 1024) error = currentLang === 'en' ? 'The CV exceeds the 5 MB size limit.' : 'CV vượt quá dung lượng tối đa 5 MB.';
                else if (file && !/\.(pdf|doc|docx)$/i.test(file.name)) error = currentLang === 'en' ? 'Only PDF, DOC or DOCX files are accepted.' : 'CV chỉ chấp nhận định dạng PDF, DOC hoặc DOCX.';
                if (error) {
                    message.classList.remove('hidden', 'text-green-600');
                    message.classList.add('text-red-600');
                    message.textContent = error;
                    form.reportValidity();
                    return;
                }

                const job = getJobs().find(item => item.id === form.dataset.jobId);
                const position = job?.title || (currentLang === 'en' ? 'General application' : 'Ứng tuyển tự do');
                const setHiddenField = (name, value) => {
                    let field = form.querySelector(`input[type="hidden"][name="${name}"]`);
                    if (!field) {
                        field = document.createElement('input');
                        field.type = 'hidden';
                        field.name = name;
                        form.appendChild(field);
                    }
                    field.value = value;
                };
                const returnUrl = new URL(location.href);
                returnUrl.searchParams.set('application', 'success');
                setHiddenField('Vị trí ứng tuyển', position);
                setHiddenField('Trang ứng tuyển', location.href);
                setHiddenField('_subject', `[VAF Careers] ${position} - ${form.elements.name.value.trim()}`);
                setHiddenField('_template', 'table');
                setHiddenField('_captcha', 'false');
                setHiddenField('_next', returnUrl.href);

                button.disabled = true;
                button.setAttribute('aria-busy', 'true');
                buttonLabel.textContent = currentLang === 'en' ? 'Sending application…' : 'Đang gửi hồ sơ…';
                message.classList.add('hidden');
                form.submit();
            });
        });
    }

    function renderList() {
        const jobs = getJobs();
        const host = document.getElementById('career-list');
        if (!host) return;
        applyCareerStaticLanguage(document.getElementById('career-route-hero'));
        applyCareerStaticLanguage(document.getElementById('view-careers'));
        const department = document.getElementById('career-department');
        const location = document.getElementById('career-location');
        const search = document.getElementById('career-search');
        if (!department.dataset.ready) {
            department.insertAdjacentHTML('beforeend', optionHtml(jobs.map(job => job.department)));
            location.insertAdjacentHTML('beforeend', optionHtml(jobs.map(job => job.location)));
            department.dataset.ready = 'true';
            [department, location, search].forEach(input => input.addEventListener(input === search ? 'input' : 'change', filter));
            document.querySelector('[data-scroll-jobs]')?.addEventListener('click', () => document.getElementById('vi-tri-tuyen-dung')?.scrollIntoView({ behavior: 'smooth' }));
            document.querySelector('[data-open-general-application]')?.addEventListener('click', () => { const modal = document.getElementById('career-general-form'); modal.classList.remove('hidden'); modal.classList.add('flex'); });
            document.querySelector('[data-close-general]')?.addEventListener('click', closeGeneral);
            document.getElementById('career-general-form')?.addEventListener('click', event => { if (event.target.id === 'career-general-form') closeGeneral(); });
        }
        function closeGeneral() { const modal = document.getElementById('career-general-form'); modal.classList.add('hidden'); modal.classList.remove('flex'); }
        function filter() {
            const term = search.value.trim().toLocaleLowerCase('vi');
            const filtered = jobs.filter(job => (!term || `${job.title} ${job.summary}`.toLocaleLowerCase('vi').includes(term)) && (!department.value || job.department === department.value) && (!location.value || job.location === location.value));
            host.innerHTML = filtered.length ? filtered.map(cardHtml).join('') : `<div class="lg:col-span-2 text-center bg-white rounded-2xl p-12 border"><i class="far fa-folder-open text-4xl text-slate-300"></i><p class="mt-4 text-slate-500">${t('noMatch')}</p></div>`;
            document.getElementById('career-result-count').textContent = `${filtered.length} ${t('matches')}`;
        }
        filter(); renderFaq(); bindForms(document.getElementById('view-careers'));
        setPageSeo({
            title: currentLang === 'en' ? 'VAF Careers | Air Filtration & HVAC Opportunities' : 'Tuyển dụng VAF | Cơ hội nghề nghiệp ngành lọc khí & HVAC',
            description: currentLang === 'en' ? 'Explore careers at VAF in air filtration, HVAC, manufacturing and cleanroom technology.' : 'Khám phá cơ hội việc làm tại VAF trong lĩnh vực lọc khí, HVAC, sản xuất và phòng sạch. Ứng tuyển để cùng kiến tạo tương lai không khí sạch.',
            path: '/tuyen-dung'
        });
    }

    function listSection(title, items) { return `<section class="mb-9"><h2 class="font-heading text-2xl font-black text-secondary mb-4">${title}</h2><ul class="space-y-3">${items.map(item => `<li class="flex gap-3 text-slate-600 leading-7"><i class="fas fa-check-circle text-primary mt-1.5"></i><span>${escapeHtml(item)}</span></li>`).join('')}</ul></section>`; }
    function openDetail(id) {
        const jobs = getJobs();
        const job = jobs.find(item => item.id === id);
        const header = document.getElementById('career-detail-header');
        const content = document.getElementById('career-detail-content');
        applyCareerStaticLanguage(document.getElementById('view-career-detail'));
        if (!job) {
            setPageSeo({ title: 'Không tìm thấy vị trí | VAF', description: 'Vị trí tuyển dụng không tồn tại hoặc đã được đóng.', path: `/tuyen-dung/${encodeURIComponent(id)}` });
            header.innerHTML = '<h1 class="font-heading text-4xl font-black">Không tìm thấy vị trí</h1><p class="text-slate-300 mt-4">Vị trí này không tồn tại hoặc đã được đóng.</p>';
            content.innerHTML = '<a href="/tuyen-dung" onclick="navigate(\'tuyen-dung\');return false" class="font-bold text-primary">Xem các vị trí đang tuyển</a>';
            document.getElementById('career-detail-form').innerHTML = '';
            return;
        }
        header.innerHTML = `<span class="text-red-300 font-bold uppercase tracking-wider">${escapeHtml(job.department)}</span><h1 class="font-heading text-4xl md:text-6xl font-black mt-3 mb-7">${escapeHtml(job.title)}</h1><div class="flex flex-wrap gap-3 text-sm"><span class="bg-white/10 px-4 py-2 rounded-full"><i class="fas fa-location-dot mr-2 text-red-300"></i>${escapeHtml(job.location)}</span><span class="bg-white/10 px-4 py-2 rounded-full"><i class="far fa-clock mr-2 text-red-300"></i>${escapeHtml(job.type)}</span><span class="bg-white/10 px-4 py-2 rounded-full"><i class="fas fa-user-group mr-2 text-red-300"></i>${job.openings} ${t('openings')}</span></div>`;
        content.innerHTML = `<p class="text-lg text-slate-600 leading-8 mb-9">${escapeHtml(job.summary)}</p>${listSection(t('jobDescription'), job.description)}${listSection(t('requirements'), job.requirements)}${listSection(t('benefits'), job.benefits)}<section class="grid sm:grid-cols-2 gap-4 pt-7 border-t"><div><span class="text-xs font-bold uppercase text-slate-400">${t('workplace')}</span><p class="font-bold text-secondary mt-1">${escapeHtml(job.location)}</p></div><div><span class="text-xs font-bold uppercase text-slate-400">${t('applicationDeadline')}</span><p class="font-bold text-primary mt-1">${formatDate(job.deadline)}</p></div></section>`;
        const formHost = document.getElementById('career-detail-form'); formHost.dataset.jobId = job.id; delete formHost.dataset.bound; bindForms(document.getElementById('view-career-detail'));
        const path = `/tuyen-dung/${job.id}`;
        setPageSeo({ title: `${job.title} | ${currentLang === 'en' ? 'VAF Careers' : 'Tuyển dụng VAF'}`, description: currentLang === 'en' ? `${job.summary} Work location: ${job.location}. Deadline: ${formatDate(job.deadline)}.` : `${job.summary} Làm việc tại ${job.location}. Hạn nộp ${formatDate(job.deadline)}.`, path, type: 'website', structuredData: { '@context': 'https://schema.org', '@type': 'JobPosting', title: job.title, description: `${job.summary}\n${job.description.join('\n')}`, datePosted: '2026-07-16', validThrough: `${job.deadline}T23:59:59+07:00`, employmentType: /intern|thực tập/i.test(job.type) ? 'INTERN' : 'FULL_TIME', hiringOrganization: { '@type': 'Organization', name: 'VAF - Viet Air Filter', sameAs: SITE_URL, logo: `${SITE_URL}/images/VAF-LOGO.webp` }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: job.location, addressCountry: 'VN' } }, applicantLocationRequirements: { '@type': 'Country', name: currentLang === 'en' ? 'Vietnam' : 'Việt Nam' }, directApply: true } });
    }
    window.VAFCareers = { renderList, openDetail };
})();
