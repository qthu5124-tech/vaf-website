/* ================================================================
   KHO DỮ LIỆU TIN TỨC VAF
================================================================
   HƯỚNG DẪN THÊM BÀI VIẾT MỚI:
   1. Copy đoạn code "FORM MẪU" bên dưới.
   2. Dán vào ĐẦU danh sách (ngay sau dấu ngoặc vuông [ ).
   3. Thay đổi nội dung trong ngoặc kép "".
   4. Lưu file lại.
================================================================ 
*/

/* --- FORM MẪU (COPY TỪ DÒNG DƯỚI) ---
    {
        id: "bai-viet-moi-nhat",  // ID không được trùng (viết liền, không dấu)
        title: "Tiêu đề bài viết nhập ở đây",
        date: "20/05/2024",
        cat: "Hoạt động",         // Danh mục: Hoạt động, Dự án, Công nghệ...
        img: "LINK_ANH_DAI_DIEN", // Link ảnh
        desc: "Mô tả ngắn gọn khoảng 2 dòng để hiện bên ngoài.",
        content: `
            <p>Đoạn mở đầu bài viết...</p>
            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">Tiêu đề phụ</h3>
            <p>Nội dung chi tiết...</p>
            <img src="LINK_ANH_CHI_TIET" class="w-full rounded-lg my-6 shadow-lg">
            <p>Đoạn kết bài.</p>
        `
    },
--- (HẾT FORM MẪU) --- */

const newsData = [

    // --- BÀI 11: HƯỚNG DẪN TEST RÒ RỈ HEPA --- 
    {
        id: 'huong-dan-quy-trinh-test-ro-ri-hepa-pao-dop',
        title: "Hướng dẫn quy trình test rò rỉ (DOP Test / PAO Test) màng lọc HEPA chuẩn xác nhất",
        date: "06/05/2026",
        cat: "Hướng dẫn",
        img: "images/anh-tulieu/dop-test.jpg",
        desc: "Khám phá chi tiết 4 bước quy trình test rò rỉ màng lọc HEPA bằng phương pháp PAO/DOP chuẩn quốc tế dành cho phòng sạch dược phẩm và điện tử.",
        content: `
            <p class="mb-4">Trong các hệ thống phòng sạch đạt chuẩn GMP (Dược phẩm, Điện tử, Thực phẩm, Y tế), màng lọc HEPA đóng vai trò như "lá phổi" quyết định trực tiếp đến cấp độ sạch của môi trường. Tuy nhiên, một màng lọc HEPA dù chất lượng đến đâu cũng có thể bị rò rỉ do quá trình vận chuyển, lắp đặt hoặc suy giảm tuổi thọ. Việc xuất hiện dù chỉ một lỗ thủng nhỏ cỡ sợi tóc cũng đủ để phá vỡ toàn bộ tiêu chuẩn phòng sạch, gây thiệt hại nặng nề cho sản phẩm.</p>
            
            <p class="mb-4">Đó là lý do quy trình <strong>kiểm tra rò rỉ (Leakage Test)</strong> bằng phương pháp DOP Test hay PAO Test là bắt buộc. Bài viết dưới đây của các kỹ sư Viet Air Filter (VAF) sẽ hướng dẫn chi tiết quy trình này.</p>
            
            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">1. DOP Test và PAO Test màng lọc HEPA là gì?</h3>
            <p class="mb-4">Bản chất của phương pháp này là sử dụng một hệ thống tạo ra khói nhân tạo (Aerosol) ở phía trước màng lọc (Upstream), sau đó dùng máy đo quang kế (Photometer) rà soát phía sau màng lọc (Downstream) để xem có hạt khói nào xuyên qua được hay không.</p>
            
            <ul class="list-disc pl-6 space-y-3 mb-6 text-slate-700">
                <li><strong>DOP Test:</strong> Sử dụng dung môi <em>Dioctyl Phthalate</em>. Đây là phương pháp đời đầu, tạo ra kích thước hạt sương rất chuẩn (khoảng 0.3 micron). Tuy nhiên, hóa chất DOP bị Cục Bảo vệ Môi trường (EPA) đánh giá là có khả năng gây ung thư và độc hại cho kỹ sư vận hành.</li>
                <li><strong>PAO Test:</strong> Sử dụng dung môi <em>Poly-Alpha-Olefin</em>. Đây là phương pháp thay thế hoàn hảo cho DOP hiện nay. PAO là một loại dầu tổng hợp an toàn, không độc hại, không gây ung thư, được FDA và các tiêu chuẩn phòng sạch hiện đại khuyên dùng. <em>(Ngày nay, khi nhắc đến DOP Test, các kỹ sư ngầm hiểu là đang sử dụng hóa chất PAO).</em></li>
            </ul>

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">2. Khi nào nhà máy cần tiến hành test rò rỉ PAO/DOP?</h3>
            <p class="mb-4">Theo tiêu chuẩn ISO 14644-3 và các hướng dẫn GMP, việc test rò rỉ màng lọc HEPA (kiểm tra tính toàn vẹn) cần được thực hiện trong các trường hợp sau:</p>
            <ul class="list-disc pl-6 space-y-3 mb-6 text-slate-700">
                <li><strong>Lắp đặt mới:</strong> Ngay sau khi lắp đặt màng lọc HEPA vào hệ thống AHU, máy FFU, Hepa Box hoặc Passbox.</li>
                <li><strong>Kiểm tra định kỳ:</strong> Thường là 6 tháng/lần đối với phòng sạch cấp độ cao (Class 100, Class 1000) và 12 tháng/lần với các cấp độ thấp hơn.</li>
                <li><strong>Bảo trì, sự cố:</strong> Sau khi hệ thống bị ngưng hoạt động kéo dài, có sự cố về rung lắc mạnh, hoặc khi kết quả đo lường tiểu phân trong phòng sạch có dấu hiệu vượt mức cho phép.</li>
            </ul>

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">3. Các thiết bị cần thiết để đo kiểm PAO</h3>
            <p class="mb-4">Để thực hiện quy trình này, đội ngũ kỹ thuật QA/QC cần trang bị 2 thiết bị cốt lõi:</p>
            <ul class="list-disc pl-6 space-y-3 mb-6 text-slate-700">
                <li><strong>Máy tạo khói (Aerosol Generator):</strong> Chức năng gia nhiệt và phun sương dung dịch PAO thành các hạt tiểu phân có kích thước từ 0.3 µm với mật độ cao vào dòng khí thổi tới màng lọc.</li>
                <li><strong>Máy quang kế (Aerosol Photometer):</strong> Thiết bị có gắn đầu dò (Probe) để hút mẫu khí và phân tích quang học, từ đó đo lường nồng độ hạt khói lọt qua màng lọc với độ nhạy cực cao.</li>
            </ul>
            
            <img src="images/anh-tulieu/test-loc-2.jpg" class="w-full rounded-xl shadow-lg my-8" alt="Kỹ sư VAF sử dụng máy Photometer test rò rỉ màng lọc HEPA">

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">4. Chi tiết 4 bước quy trình test rò rỉ màng lọc HEPA chuẩn quốc tế</h3>
            
            <h4 class="text-xl font-bold text-primary mt-6 mb-3">Bước 1: Đo nồng độ hạt đầu nguồn (Upstream)</h4>
            <p class="mb-4">Kỹ sư sẽ bơm khói PAO vào phía trước màng lọc (từ ống gió AHU hoặc ngay trên lưng máy FFU). Nồng độ hạt khói đầu nguồn tiêu chuẩn cần đạt từ <strong>10 mg/m³ đến 20 mg/m³</strong> (hoặc 10 µg/L – 100 µg/L). Thiết lập nồng độ này làm mốc chuẩn 100% trên máy Photometer.</p>
            
            <h4 class="text-xl font-bold text-primary mt-6 mb-3">Bước 2: Quét bề mặt màng lọc (Downstream)</h4>
            <p class="mb-4">Kỹ sư sử dụng đầu dò của Photometer quét đều trên toàn bộ bề mặt lưới bảo vệ của màng lọc HEPA. Yêu cầu kỹ thuật cực kỳ nghiêm ngặt:</p>
            <ul class="list-disc pl-6 space-y-3 mb-6 text-slate-700">
                <li>Khoảng cách từ đầu dò đến bề mặt lọc: <strong>Khoảng 2.5 cm - 3.0 cm.</strong></li>
                <li>Tốc độ quét: Chậm và đều, <strong>không vượt quá 5 cm/giây.</strong></li>
                <li>Đường quét phải gối lên nhau một chút để đảm bảo không bỏ sót bất kỳ diện tích nào.</li>
            </ul>
            
            <h4 class="text-xl font-bold text-primary mt-6 mb-3">Bước 3: Quét khu vực gioăng (Gasket) và khung</h4>
            <p class="mb-4">Rất nhiều sự cố rò rỉ không đến từ giấy lọc màng HEPA mà đến từ điểm tiếp xúc giữa khung lọc và vỏ thiết bị (Housing), hoặc do gioăng cao su (Gasket/Gel seal) bị lão hóa, méo mó khi siết ốc. Kỹ sư phải quét kỹ các mép khung này.</p>
            
            <h4 class="text-xl font-bold text-primary mt-6 mb-3">Bước 4: Đánh giá kết quả và lập báo cáo</h4>
            <p class="mb-4">Theo tiêu chuẩn quốc tế, một màng lọc HEPA H13/H14 được đánh giá là <strong>ĐẠT (PASS)</strong> khi tỷ lệ rò rỉ đo được tại bất kỳ điểm nào trên bề mặt <strong>không vượt quá 0.01%</strong> (so với nồng độ 100% đầu nguồn).</p>

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">5. Lọc HEPA VAF - 100% Kiểm định PAO trước khi xuất xưởng</h3>
            <p class="mb-4">Thấu hiểu sự khắt khe của hệ thống phòng sạch, <strong>Viet Air Filter (VAF)</strong> tự hào là nhà máy sản xuất thiết bị lọc khí hàng đầu tại Việt Nam áp dụng quy trình kiểm soát chất lượng chuẩn quốc tế.</p>
            <p class="mb-4">Không giống như các sản phẩm trôi nổi không rõ nguồn gốc, 100% màng lọc HEPA (H13, H14) và ULPA do VAF sản xuất tại nhà máy Bình Dương đều được đưa vào buồng test độc lập, thực hiện <strong>quét PAO Test/ DOP Test từng tấm một</strong> trước khi đóng gói.</p>
            <p class="mb-4">Sản phẩm khi giao đến tay khách hàng và các nhà thầu thi công luôn đi kèm đầy đủ <strong>Chứng nhận xuất xưởng (CO, CQ)</strong> và <strong>Giấy Test Report</strong> ghi rõ các thông số chênh áp, lưu lượng gió và kết quả kiểm tra tính toàn vẹn (Leak test).</p>
            
            <div class="bg-slate-50 p-8 rounded-2xl border-l-4 border-primary mt-10 shadow-sm">
                <h4 class="font-bold text-xl text-secondary mb-3">Câu hỏi thường gặp (FAQ)</h4>
                
                <p class="font-bold text-slate-800 mt-4 mb-2">Màng lọc HEPA bị thủng có vá được không hay phải thay mới?</p>
                <p class="text-slate-600 mb-4">Theo tiêu chuẩn IEST-RP-CC034, nếu màng lọc HEPA bị thủng, bạn có thể dùng keo Silicone chuyên dụng cho phòng sạch để vá. Tuy nhiên, tổng diện tích các vết vá <strong>không được vượt quá 5%</strong> tổng diện tích bề mặt màng lọc, và không có vết vá nào rộng quá 3.8 cm. Nếu vượt quá giới hạn này, bắt buộc phải thay màng lọc mới để đảm bảo lưu lượng và độ sạch.</p>
                
                <p class="font-bold text-slate-800 mt-4 mb-2">Bao lâu thì nên thay màng lọc HEPA một lần?</p>
                <p class="text-slate-600">Tuổi thọ trung bình của lọc HEPA từ 1 - 3 năm tùy vào môi trường. Thay vì đếm thời gian, các kỹ sư bảo trì sẽ nhìn vào đồng hồ chênh áp (Magnehelic). Khi độ chênh áp qua màng lọc HEPA <strong>đạt gấp đôi (hoặc mức giới hạn) so với chênh áp ban đầu lúc mới lắp</strong>, đó là lúc lõi lọc đã nghẹt bụi và cần được thay thế ngay lập tức.</p>
            </div>
        `
    },



    // --- BÀI MỚI: BÀI VIẾT PR CHUẨN SEO GIỚI THIỆU VAF ---
    {
        id: 'vaf-hanh-trinh-18-nam-dinh-hinh-chuan-muc',
        title: "VAF – Nhà Sản Xuất Lọc Khí Tiên Phong Tại Việt Nam: Hành Trình 18 Năm Định Hình Chuẩn Mực Quốc Tế",
        date: "24/02/2026",
        cat: "Hoạt động",
        img: "images/anh-tulieu/Nhamayfront.jpg",
        desc: "Khám phá hành trình 18 năm của VAF, nhà sản xuất thiết bị phòng sạch tiên phong tại Việt Nam. Tìm hiểu công nghệ tự động hóa, kiểm định EN 1822 và đối tác toàn cầu.",
        content: `
            <p class="mb-4">Trong bối cảnh Việt Nam đang trở thành công xưởng sản xuất mới của thế giới, yêu cầu về độ sạch trong các nhà máy điện tử bán dẫn, dược phẩm và thực phẩm ngày càng trở nên khắt khe. Giữa sự cạnh tranh khốc liệt của các thương hiệu ngoại nhập, <strong>Công ty Cổ phần Sản xuất Lọc Khí Việt (VAF - Viet Air Filter)</strong> nổi lên như một niềm tự hào của ngành công nghiệp phụ trợ nội địa. Với 18 năm kinh nghiệm, VAF không chỉ là người tiên phong mà còn là đơn vị định hình các chuẩn mực quốc tế về khí sạch tại Việt Nam.</p>
            
            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">1. Từ Xưởng Sản Xuất Nhỏ Đến "Cánh Chim Đầu Đàn" Ngành Lọc Khí</h3>
            <p class="mb-4">Được thành lập vào tháng 1 năm 2008, VAF khởi đầu với một sứ mệnh táo bạo vào thời điểm đó: Xây dựng nền móng cho ngành sản xuất <strong>lọc khí công nghiệp</strong> tại Việt Nam, lĩnh vực vốn hoàn toàn phụ thuộc vào nhập khẩu.</p>
            <p class="mb-4">Trải qua gần hai thập kỷ không ngừng nỗ lực và đổi mới, từ một xưởng sản xuất khiêm tốn với 11 nhân sự nòng cốt, VAF đã vươn mình mạnh mẽ. Ngày nay, chúng tôi sở hữu nhà máy quy mô 5.000m² tại Bình Dương, được trang bị dây chuyền tự động hóa hiện đại bậc nhất khu vực.</p>
            
            <img src="images/anh-tulieu/cap1.jpg" class="w-full rounded-xl shadow-lg my-8" alt="Đội ngũ VAF">
            
            <p class="mb-4">Sự kiên định với mục tiêu chất lượng đã giúp VAF chuyển mình từ một nhà sản xuất thủ công sang mô hình nhà máy thông minh, quy tụ hơn 200 chuyên gia và kỹ sư tay nghề cao, sẵn sàng đáp ứng những đơn hàng phức tạp nhất.</p>

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">2. Giải Mã Sức Mạnh Công Nghệ: Điều Gì Làm Nên Sự Khác Biệt Của VAF?</h3>
            <p class="mb-4">Trong ngành công nghiệp phòng sạch, "sai một ly, đi một dặm". Một hạt bụi siêu nhỏ cũng có thể làm hỏng cả một dây chuyền sản xuất chip bán dẫn triệu đô. Hiểu rõ điều này, VAF đã đầu tư mạnh mẽ vào công nghệ lõi để đảm bảo chất lượng tuyệt đối.</p>
            
            <h4 class="text-xl font-bold text-primary mt-6 mb-3">2.1. Tự Chủ Công Nghệ Lõi Mini-pleat Tự Động Hóa</h4>
            <p class="mb-4">VAF tự hào là đơn vị nội địa duy nhất làm chủ hoàn toàn công nghệ sản xuất màng lọc HEPA/ULPA bằng dây chuyền <strong>Mini-pleat</strong> tự động (sử dụng công nghệ châm keo nóng Hot-melt).</p>
            <p class="mb-4">Khác với công nghệ cũ sử dụng vách chia nhôm, công nghệ Mini-pleat giúp tạo ra các nếp gấp giấy lọc đều tăm tắp, tối ưu hóa diện tích lọc khí. Kết quả là các sản phẩm lọc VAF có độ chênh áp thấp hơn, giúp khách hàng tiết kiệm đáng kể chi phí điện năng vận hành hệ thống HVAC (Tối ưu chi phí vòng đời - LCC).</p>
            
            <img src="images/anh-tin-tin/daychuyenmnp.jpg" class="w-full rounded-xl shadow-lg my-8" alt="Dây chuyền Mini-pleat tại VAF">

            <h4 class="text-xl font-bold text-primary mt-6 mb-3">2.2. Quy Trình "Sản Xuất Sạch Để Lọc Sạch"</h4>
            <p class="mb-4">Để tạo ra một sản phẩm dùng cho phòng sạch, bản thân quá trình sản xuất phải đảm bảo vô trùng. Tại VAF, toàn bộ quá trình lắp ráp và đóng gói các bộ lọc tinh (Fine Filter) và HEPA được thực hiện khép kín bên trong <strong>Phòng sạch Class 100.000 (ISO Class 8)</strong>. Điều này ngăn chặn triệt để nguy cơ nhiễm chéo bụi bẩn từ môi trường bên ngoài vào sản phẩm trước khi đến tay khách hàng.</p>

            <h4 class="text-xl font-bold text-primary mt-6 mb-3">2.3. Vật Liệu Nhập Khẩu 100% Từ Mỹ</h4>
            <p class="mb-4">Chất lượng của một bộ lọc nằm ở chính vật liệu lọc. VAF kiên quyết không sử dụng các loại vật liệu giá rẻ, không rõ nguồn gốc. Chúng tôi là đối tác chiến lược dài hạn, sử dụng 100% giấy lọc sợi thủy tinh cao cấp từ tập đoàn <strong>Hollingsworth & Vose (H&V - Hoa Kỳ)</strong> – nhà sản xuất vật liệu lọc hàng đầu thế giới. Điều này đảm bảo hiệu suất bắt bụi và tuổi thọ sản phẩm luôn vượt trội.</p>

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">3. Cam Kết Chất Lượng: Kiểm Định 100% Theo Chuẩn EN 1822</h3>
            <p class="mb-4">Đây là yếu tố then chốt tạo nên uy tín của VAF. Chúng tôi không kiểm tra xác suất. <strong>100% sản phẩm lọc HEPA và ULPA</strong> trước khi xuất xưởng đều phải trải qua quy trình Scan Test (kiểm tra rò rỉ) bằng máy tạo hạt Sol khí (Aerosol) tự động.</p>
            
            <img src="images/anh-tin-tin/st.jpg" class="w-full rounded-xl shadow-lg my-8" alt="Máy Scan Test rò rỉ tự động VAF">
            
            <p class="mb-4">Quy trình này tuân thủ nghiêm ngặt tiêu chuẩn quốc tế <strong>EN 1822</strong> và <strong>ISO 29463</strong>, đảm bảo rằng tấm lọc không có bất kỳ lỗ thủng nào dù là nhỏ nhất, cam kết hiệu suất lọc đúng như công bố. Ngoài ra, VAF còn đạt các chứng nhận quan trọng khác như <strong>ISO 9001:2015</strong> (Hệ thống quản lý chất lượng) và <strong>ISO 13485:2016</strong> (Tiêu chuẩn cho thiết bị y tế), khẳng định năng lực cung cấp cho lĩnh vực bệnh viện và dược phẩm.</p>

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">4. Đối Tác Tin Cậy Của Các "Ông Lớn" Toàn Cầu</h3>
            <p class="mb-4">Với nền tảng kỹ thuật vững chắc, các giải pháp khí sạch của VAF đã vượt qua những hàng rào kỹ thuật khắt khe nhất để trở thành đối tác tin cậy của các tập đoàn đa quốc gia và các công trình trọng điểm quốc gia:</p>
            <ul class="list-disc pl-6 space-y-3 mb-6 text-slate-700">
                <li><strong>Công nghiệp Điện tử & Bán dẫn:</strong> Samsung, Intel, Jabil, LG Display...</li>
                <li><strong>Thực phẩm & Đồ uống:</strong> Coca-Cola, Suntory PepsiCo, Vinamilk...</li>
                <li><strong>Y tế & Dược phẩm:</strong> Hệ thống các bệnh viện tuyến đầu, các nhà máy dược đạt chuẩn GMP.</li>
            </ul>
            <p class="mb-4">Không chỉ thống lĩnh thị trường nội địa, từ năm 2020, thương hiệu VAF đã chính thức được bảo hộ bản quyền tại <strong>Hoa Kỳ</strong>, xuất khẩu thành công sang các thị trường khó tính như Mỹ, Nhật Bản và Thái Lan.</p>

            <h3 class="text-2xl font-bold text-secondary mt-8 mb-4">5. Tầm Nhìn 2026: Hướng Tới Sản Xuất Xanh và Bền Vững</h3>
            <p class="mb-4">Không chỉ dừng lại ở việc cung cấp sản phẩm tốt, VAF còn ý thức sâu sắc về trách nhiệm với môi trường (ESG). Tầm nhìn đến năm 2026 của chúng tôi là chuyển đổi hoàn toàn sang mô hình <strong>Nhà Máy Thông Minh & Sản Xuất Xanh</strong>. Chúng tôi đang tiên phong phát triển dòng sản phẩm sử dụng khung nhựa ABS chuyên dụng có khả năng đốt hủy hoàn toàn sau khi sử dụng, giúp giảm thiểu rác thải công nghiệp và đồng hành cùng các đối tác đạt chứng chỉ công trình xanh (LEED/LOTUS).</p>

            <div class="bg-slate-50 p-8 rounded-2xl border-l-4 border-primary mt-10 shadow-sm">
                <h4 class="font-bold text-xl text-secondary mb-3">Bạn đang tìm kiếm giải pháp tối ưu cho hệ thống phòng sạch của mình?</h4>
                <p class="text-slate-600 mb-4">Hãy liên hệ ngay với đội ngũ kỹ sư của VAF để được khảo sát và tư vấn kỹ thuật chuyên sâu.</p>
                <ul class="text-slate-800 space-y-2">
                    <li><i class="fas fa-phone-alt text-primary mr-2"></i> <strong>Hotline tư vấn:</strong> 1900 8949</li>
                    <li><i class="fas fa-envelope text-primary mr-2"></i> <strong>Email:</strong> info@vietfil.com</li>
                </ul>
            </div>
        `
    },
    
    // --- BÀI 1: CÔNG NGHỆ MINI-PLEAT ---
    {
        id: 'seo-1',
        title: "Công Nghệ Mini-Pleat Là Gì? Tại Sao VAF Chuyển Đổi Hoàn Toàn Sang Dây Chuyền Tự Động?",
        date: "20/06/2024",
        cat: "Công nghệ",
        img: "images/anh-tin-tin/mnpl.jpg",
        desc: "Khám phá công nghệ nếp gấp siêu nhỏ giúp tăng diện tích lọc lên gấp 3 lần và lý do VAF tiên phong áp dụng tại Việt Nam.",
        content: `
            <p class="mb-4">Trong ngành công nghiệp lọc khí hiện đại, công nghệ <strong>Mini-pleat (nếp gấp nhỏ)</strong> đang dần thay thế hoàn toàn công nghệ giấy nhăn (Separator) truyền thống. Tại nhà máy VAF Bình Dương, chúng tôi đã đầu tư dây chuyền nhập khẩu hoàn toàn tự động để sản xuất dòng lọc này.</p>
            
            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Công nghệ Mini-pleat là gì?</h3>
            <p class="mb-4">Khác với lọc truyền thống dùng vách nhôm để chia nếp giấy, công nghệ Mini-pleat sử dụng các đường keo nóng (Hot melt) để định hình khoảng cách giữa các nếp giấy. Điều này giúp:</p>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Tăng diện tích lọc:</strong> Cùng một kích thước khung, lọc Mini-pleat có diện tích vật liệu lọc lớn gấp 2-3 lần.</li>
                <li><strong>Giảm chênh áp (Low Pressure Drop):</strong> Luồng khí đi qua dễ dàng hơn, giúp quạt không phải hoạt động quá tải.</li>
                <li><strong>Tiết kiệm năng lượng:</strong> Giảm điện năng tiêu thụ cho hệ thống HVAC từ 15-20%.</li>
            </ul>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Ứng dụng tại VAF</h3>
            <p class="mb-4">Hiện nay, các dòng sản phẩm chủ lực của VAF như <strong>Ultracel II</strong> (HEPA) và <strong>V-Dura</strong> (V-Bank) đều được sản xuất bằng công nghệ này. Đường keo đồng nhất, không bị đứt gãy giúp đảm bảo hiệu suất lọc ổn định suốt vòng đời sản phẩm.</p>
            <img src="images/anh-tin-tin/daychuyenmnp.jpg" class="w-full rounded-xl shadow-lg my-6" alt="Dây chuyền Mini-pleat tại VAF">
        `
    },

    // --- BÀI 2: SO SÁNH HEPA H13 VS H14 ---
    {
        id: 'seo-2',
        title: "So Sánh Lọc HEPA H13 và H14: Khi Nào Nên Dùng Loại Nào?",
        date: "18/06/2024",
        cat: "Kiến thức",
        img: "images/anh-tin-tin/ssh13h14.jpg",
        desc: "Phân biệt sự khác nhau giữa hiệu suất 99.95% và 99.995%. Hướng dẫn chọn lọc phù hợp cho Bệnh viện và Nhà máy điện tử.",
        content: `
            <p class="mb-4">Rất nhiều khách hàng của VAF băn khoăn khi lựa chọn giữa hai cấp độ lọc phổ biến nhất: <strong>HEPA H13</strong> và <strong>HEPA H14</strong>. Bài viết này sẽ giúp bạn hiểu rõ sự khác biệt.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Tiêu chuẩn EN 1822</h3>
            <p class="mb-4">Theo tiêu chuẩn Châu Âu EN 1822, sự khác biệt nằm ở hiệu suất lọc hạt kích thước khó bắt nhất (MPPS):</p>
            <table class="w-full border-collapse border border-gray-300 mb-6 text-sm">
                <tr class="bg-gray-100"><th class="border p-2">Cấp độ</th><th class="border p-2">Hiệu suất tổng (Overall)</th><th class="border p-2">Độ lọt (Penetration)</th></tr>
                <tr><td class="border p-2 font-bold">H13</td><td class="border p-2">≥ 99.95%</td><td class="border p-2">≤ 0.05%</td></tr>
                <tr><td class="border p-2 font-bold">H14</td><td class="border p-2">≥ 99.995%</td><td class="border p-2">≤ 0.005%</td></tr>
            </table>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Ứng dụng thực tế</h3>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Dùng H13 khi:</strong> Phòng sạch công nghiệp thông thường, phòng mổ tiểu phẫu, khu vực hành lang sạch, văn phòng cao cấp.</li>
                <li><strong>Dùng H14 khi:</strong> Phòng mổ ghép tạng (yêu cầu vô trùng tuyệt đối), nhà máy sản xuất chip bán dẫn (Class 1 - Class 100), phòng pha chế dược phẩm, phòng an toàn sinh học cấp 3.</li>
            </ul>
            <p>VAF khuyến nghị khách hàng nên đo nồng độ bụi thực tế và yêu cầu chuyên gia tư vấn để tránh lãng phí chi phí đầu tư ban đầu.</p>
        `
    },

    // --- BÀI 3: AIR SHOWER LÀ GÌ ---
    {
        id: 'seo-3',
        title: "Air Shower (Buồng Tắm Khí): Lá Chắn Đầu Tiên Của Phòng Sạch",
        date: "15/06/2024",
        cat: "Thiết bị",
        img: "images/anh-tin-tin/airshower.jpg",
        desc: "Tại sao nhân viên bắt buộc phải đi qua Air Shower trước khi vào phòng sạch? Nguyên lý hoạt động và quy trình chuẩn.",
        content: `
            <p class="mb-4">Con người là nguồn phát sinh bụi lớn nhất trong phòng sạch. Để loại bỏ bụi bám trên quần áo bảo hộ, <strong>Air Shower (Buồng tắm khí)</strong> là thiết bị không thể thiếu tại cửa ra vào.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Nguyên lý hoạt động</h3>
            <p class="mb-4">Khi nhân viên bước vào buồng, hệ thống cảm biến sẽ kích hoạt các vòi phun khí (Nozzle) với vận tốc cực cao (thường > 22m/s). Các luồng khí sạch được lọc qua HEPA sẽ thổi bay bụi bẩn bám trên quần áo. Bụi này sau đó được hút ngược lại qua các khe hồi gió và giữ lại ở lọc thô.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Ưu điểm của Air Shower VAF</h3>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Vật liệu:</strong> Inox 304 hoặc Thép sơn tĩnh điện cao cấp, chống rỉ sét.</li>
                <li><strong>Thông minh:</strong> Hệ thống khóa liên động (Interlock) ngăn không cho hai cửa mở cùng lúc, đảm bảo áp suất phòng sạch không bị thất thoát.</li>
                <li><strong>Tùy biến:</strong> VAF sản xuất theo kích thước yêu cầu: buồng đơn, buồng đôi, hoặc buồng đường hầm (Tunnel) cho số lượng nhân viên lớn.</li>
            </ul>
        `
    },

    // --- BÀI 4: QUY TRÌNH BẢO TRÌ ---
    {
        id: 'seo-4',
        title: "Khi Nào Cần Thay Lọc Khí? Dấu Hiệu Nhận Biết & Quy Trình Bảo Trì",
        date: "10/06/2024",
        cat: "Hướng dẫn",
        img: "images/anh-tin-tin/thayloc.jpg",
        desc: "Đừng để lọc quá hạn làm hỏng hệ thống HVAC của bạn. Hướng dẫn theo dõi chênh áp để thay thế đúng thời điểm.",
        content: `
            <p class="mb-4">Một câu hỏi VAF thường xuyên nhận được: "Bao lâu thì tôi phải thay lọc?". Câu trả lời không nằm ở thời gian (3 tháng hay 6 tháng), mà nằm ở <strong>độ chênh áp</strong>.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Quy tắc chênh áp (Pressure Drop)</h3>
            <p class="mb-4">Mỗi tấm lọc đều có thông số "Chênh áp khuyến nghị thay thế" (Recommended Final Resistance). Thông thường:</p>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Lọc thô (G4):</strong> Thay khi chênh áp đạt 250 Pa.</li>
                <li><strong>Lọc túi (F7-F9):</strong> Thay khi chênh áp đạt 450 Pa.</li>
                <li><strong>Lọc HEPA (H13-H14):</strong> Thay khi chênh áp đạt 600 Pa (hoặc gấp đôi chênh áp ban đầu).</li>
            </ul>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Rủi ro khi không thay lọc đúng hạn</h3>
            <p class="mb-4">Nếu cố sử dụng lọc đã bị nghẹt bụi, bạn sẽ đối mặt với:</p>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Tiêu tốn điện năng:</strong> Quạt phải chạy hết công suất để đẩy gió qua màng lọc bị tắc.</li>
                <li><strong>Bục màng lọc:</strong> Áp lực gió quá lớn có thể làm rách giấy lọc, khiến bụi ồ ạt tràn vào phòng sạch (Hậu quả rất nghiêm trọng).</li>
                <li><strong>Giảm lưu lượng gió:</strong> Phòng không đủ số lần trao đổi khí, nồng độ bụi tăng cao.</li>
            </ul>
        `
    },

    // --- BÀI 5: FFU GIẢI PHÁP LINH HOẠT ---
    {
        id: 'seo-5',
        title: "Fan Filter Unit (FFU): Giải Pháp Phòng Sạch Linh Hoạt & Tiết Kiệm",
        date: "05/06/2024",
        cat: "Công nghệ",
        img: "images/anh-tin-tin/ffu.jpg",
        desc: "Tại sao FFU lại được ưa chuộng trong các nhà máy điện tử quy mô lớn? Tìm hiểu cấu tạo và lợi ích của FFU VAF.",
        content: `
            <p class="mb-4">Fan Filter Unit (FFU) là thiết bị tích hợp quạt và màng lọc HEPA trong một module duy nhất, được lắp trực tiếp lên trần phòng sạch.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Cấu tạo của FFU VAF</h3>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Vỏ hộp:</strong> Làm bằng tôn mạ kẽm sơn tĩnh điện hoặc Inox 304, bền bỉ với môi trường.</li>
                <li><strong>Quạt:</strong> Sử dụng động cơ AC hoặc EC (tiết kiệm điện), độ ồn thấp, tuổi thọ cao > 50.000 giờ.</li>
                <li><strong>Màng lọc:</strong> Tích hợp HEPA H13/H14 hoặc ULPA U15 tùy yêu cầu độ sạch.</li>
                <li><strong>Bộ điều khiển:</strong> Có thể điều chỉnh 3 cấp độ gió hoặc điều khiển trung tâm qua máy tính.</li>
            </ul>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Tại sao chọn FFU thay vì AHU trung tâm?</h3>
            <p class="mb-4">FFU đặc biệt phù hợp cho các nhà máy điện tử lớn (như Samsung, Intel) vì tính <strong>linh hoạt</strong>. Khi cần nâng cấp độ sạch từ Class 10.000 lên Class 1.000, bạn chỉ cần lắp thêm số lượng FFU lên trần lưới (Ceiling Grid) mà không cần thay đổi toàn bộ hệ thống ống gió phức tạp.</p>
        `
    },

    // --- BÀI 6: ISO 14644 LÀ GÌ ---
    {
        id: 'seo-6',
        title: "Tiêu Chuẩn Phòng Sạch ISO 14644-1: Những Điều Cần Biết",
        date: "01/06/2024",
        cat: "Kiến thức",
        img: "images/anh-tin-tin/ps.jpg",
        desc: "Tổng hợp về các cấp độ sạch ISO Class 1 đến Class 9. Làm sao để thiết kế phòng sạch đạt chuẩn?",
        content: `
            <p class="mb-4">ISO 14644-1 là tiêu chuẩn quốc tế được sử dụng rộng rãi nhất để phân loại độ sạch của không khí. Tại Việt Nam, các nhà máy Dược và Điện tử đều tuân thủ tiêu chuẩn này.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Các cấp độ sạch phổ biến</h3>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>ISO Class 5 (tương đương Class 100 cũ):</strong> Cực sạch. Ứng dụng: Phòng mổ ghép tạng, sản xuất wafer bán dẫn. Yêu cầu màng lọc ULPA hoặc HEPA phủ kín trần.</li>
                <li><strong>ISO Class 7 (tương đương Class 10.000 cũ):</strong> Phổ biến. Ứng dụng: Phòng mổ thông thường, sản xuất thiết bị y tế, thực phẩm chức năng.</li>
                <li><strong>ISO Class 8 (tương đương Class 100.000 cũ):</strong> Ứng dụng: Khu vực đóng gói, hành lang sạch, sản xuất bao bì dược.</li>
            </ul>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. VAF hỗ trợ gì cho bạn?</h3>
            <p class="mb-4">Để đạt được các cấp độ này, việc chọn lọc khí là yếu tố then chốt. VAF cung cấp trọn bộ giải pháp từ Lọc sơ cấp (G4) -> Lọc túi (F8) -> Lọc HEPA (H13) và thiết bị FFU để đảm bảo số lần trao đổi khí (Air Changes Per Hour - ACH) đạt yêu cầu của từng cấp độ ISO.</p>
        `
    },

    // --- BÀI 7: LEAK TEST (KIỂM TRA RÒ RỈ) ---
    {
        id: 'seo-7',
        title: "Quy Trình Leak Test (Kiểm Tra Rò Rỉ) HEPA Tại Nhà Máy VAF",
        date: "28/05/2024",
        cat: "Chất lượng",
        img: "images/anh-tin-tin/st.jpg",
        desc: "Mỗi tấm lọc HEPA của VAF đều được kiểm tra 100% trước khi xuất xưởng. Tìm hiểu về máy scan test tự động.",
        content: `
            <p class="mb-4">Một tấm lọc HEPA dù tốt đến đâu, nếu bị rò rỉ dù chỉ một lỗ nhỏ bằng đầu kim, cũng coi như vứt đi. Đó là lý do tại VAF, quy trình <strong>Leak Test (Kiểm tra rò rỉ)</strong> là bắt buộc 100%.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Phương pháp Scan Test tự động</h3>
            <p class="mb-4">VAF sử dụng máy Scan Test tự động theo tiêu chuẩn EN 1822. Máy sẽ phun các hạt bụi sol khí (Aerosol) vào mặt trước của lọc, và đầu dò (Probe) sẽ di chuyển liên tục ở mặt sau để đo nồng độ hạt xuyên qua.</p>
            
            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Tiêu chí đạt chuẩn</h3>
            <p class="mb-4">Nếu tại bất kỳ điểm nào trên bề mặt lọc, nồng độ hạt vượt quá mức cho phép (ví dụ > 0.01% đối với H14), máy sẽ báo lỗi và đánh dấu vị trí đó. Tấm lọc đó sẽ bị loại bỏ hoặc xử lý lại. Chỉ những tấm lọc vượt qua bài test này mới được dán tem chất lượng và đóng gói xuất xưởng.</p>
            
            <div class="bg-red-50 p-4 rounded border-l-4 border-primary text-slate-700 italic">
                "Khách hàng có thể yêu cầu xem trực tiếp quy trình test tại phòng Lab của nhà máy VAF Bình Dương."
            </div>
        `
    },

    // --- BÀI 8: PHÒNG SẠCH BỆNH VIỆN ---
    {
        id: 'seo-8',
        title: "Vai Trò Của Áp Lực Dương & Áp Lực Âm Trong Phòng Sạch Bệnh Viện",
        date: "20/05/2024",
        cat: "Y tế",
        img: "images/anh-tin-tin/pal.jpg",
        desc: "Khi nào dùng phòng áp lực dương? Khi nào dùng áp lực âm? Kiến thức quan trọng cho kỹ sư thiết kế bệnh viện.",
        content: `
            <p class="mb-4">Trong thiết kế hệ thống khí sạch bệnh viện, việc kiểm soát chênh lệch áp suất là yếu tố sống còn để ngăn ngừa nhiễm khuẩn.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Phòng Áp Lực Dương (Positive Pressure)</h3>
            <p class="mb-4"><strong>Nguyên lý:</strong> Áp suất trong phòng CAO HƠN bên ngoài. Không khí chỉ đi từ trong ra ngoài.</p>
            <p class="mb-4"><strong>Ứng dụng:</strong> Phòng mổ (Operating Theatre). Mục đích là để bảo vệ bệnh nhân đang phẫu thuật. Khi cửa mở, gió sạch từ trong phòng sẽ thổi ra, ngăn vi khuẩn từ hành lang xâm nhập vào vết mổ.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Phòng Áp Lực Âm (Negative Pressure)</h3>
            <p class="mb-4"><strong>Nguyên lý:</strong> Áp suất trong phòng THẤP HƠN bên ngoài. Không khí chỉ đi từ ngoài vào trong.</p>
            <p class="mb-4"><strong>Ứng dụng:</strong> Phòng cách ly bệnh truyền nhiễm (như Covid-19, Lao). Mục đích là để bảo vệ cộng đồng. Không khí chứa mầm bệnh trong phòng sẽ không thể thoát ra ngoài hành lang, mà được hút qua hệ thống lọc HEPA + tia UV để xử lý trước khi thải ra môi trường.</p>
            
            <p>VAF cung cấp các giải pháp <strong>BIBO (Bag In Bag Out)</strong> chuyên dụng để thay thế lọc an toàn cho các phòng áp lực âm này.</p>
        `
    },

    // --- BÀI 9: LỌC CHỊU NHIỆT ---
    {
        id: 'seo-9',
        title: "Giải Pháp Lọc Khí Chịu Nhiệt Cho Lò Sấy Sơn Ô Tô & Thực Phẩm",
        date: "15/05/2024",
        cat: "Công nghiệp",
        img: "images/anh-tin-tin/u1ht.jpg",
        desc: "Lọc khí thông thường sẽ bị chảy ở nhiệt độ cao. VAF cung cấp dòng lọc chịu nhiệt lên tới 350 độ C.",
        content: `
            <p class="mb-4">Trong các dây chuyền sơn tĩnh điện ô tô hoặc sấy khô thực phẩm, nhiệt độ lò sấy có thể lên tới 250°C - 350°C. Lọc khí thông thường sử dụng keo và khung nhựa sẽ bị tan chảy ngay lập tức.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Đặc tính kỹ thuật của lọc chịu nhiệt VAF</h3>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li><strong>Vật liệu lọc:</strong> Sợi thủy tinh (Glass fiber) đặc biệt, chịu nhiệt và không cháy.</li>
                <li><strong>Khung:</strong> Inox 304 hoặc Thép mạ kẽm (GI) chịu lực, không biến dạng khi giãn nở nhiệt.</li>
                <li><strong>Keo (Sealant):</strong> Sử dụng keo Ceramic hoặc Silicone đỏ chịu nhiệt độ cao.</li>
                <li><strong>Ron (Gasket):</strong> Sợi thủy tinh bện (Fiberglass rope) đảm bảo độ kín khít.</li>
            </ul>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Các dòng sản phẩm</h3>
            <p class="mb-4">VAF hiện cung cấp đầy đủ các dòng lọc chịu nhiệt: Lọc thô chịu nhiệt (V-HT), Lọc tinh chịu nhiệt (VMI-HT) và HEPA chịu nhiệt (Ultracel I-HT) đáp ứng mọi yêu cầu khắt khe của dây chuyền sơn VinFast, Toyota, Honda...</p>
        `
    },

    // --- BÀI 10: XU HƯỚNG XANH ---
    {
        id: 'seo-10',
        title: "Xu Hướng 'Phòng Sạch Xanh' (Green Cleanroom) & Giải Pháp Từ VAF",
        date: "10/05/2024",
        cat: "Xu hướng",
        img: "images/anh-tin-tin/sxvdura.jpg",
        desc: "Làm thế nào để vận hành phòng sạch tiết kiệm năng lượng và giảm thiểu rác thải carbon?",
        content: `
            <p class="mb-4">Phòng sạch là nơi tiêu thụ năng lượng khổng lồ (gấp 10-50 lần văn phòng thông thường). Xu hướng "Phòng Sạch Xanh" đang trở thành yêu cầu bắt buộc đối với các nhà máy muốn đạt chứng chỉ LEED hoặc LOTUS.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">1. Giảm chênh áp = Giảm tiền điện</h3>
            <p class="mb-4">VAF tập trung nghiên cứu các dòng lọc có thiết kế khí động học (V-shape) và công nghệ Mini-pleat để giảm sức cản gió xuống mức thấp nhất. Chỉ cần giảm chênh áp 50 Pa, doanh nghiệp có thể tiết kiệm hàng trăm triệu đồng tiền điện mỗi năm cho hệ thống quạt.</p>

            <h3 class="text-2xl font-bold text-secondary mt-6 mb-3">2. Vật liệu thân thiện môi trường</h3>
            <p class="mb-4">Dòng sản phẩm <strong>V-Dura (Khung nhựa ABS)</strong> của VAF là bước đột phá thay thế cho khung tôn kẽm truyền thống:</p>
            <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                <li>Nhẹ hơn 50%, giảm chi phí vận chuyển và khí thải CO2.</li>
                <li>Có thể đốt bỏ hoàn toàn sau khi sử dụng (Incinerable), không để lại rác thải kim loại nặng.</li>
                <li>Bền bỉ, không bị ăn mòn trong môi trường độ ẩm cao.</li>
            </ul>
        `
    }
    ]



