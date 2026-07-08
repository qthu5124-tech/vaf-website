// 1. KHAI BÁO BIẾN NGÔN NGỮ TOÀN CỤC
let currentLang = localStorage.getItem('vaf_lang') || 'vi'; // Mặc định lấy từ bộ nhớ hoặc là tiếng Việt

// 2. TỪ ĐIỂN UI (Giao diện)
const translations = {
    'vi': {
        // Menu
        'nav_home': 'Trang chủ',
        'nav_about': 'Về VAF',
        'nav_products': 'Sản phẩm',
        'nav_projects': 'Dự án',
        'nav_news': 'Tin tức',
        'nav_contact': 'Liên hệ',
        'btn_profile': 'Hồ sơ năng lực',
        
        // Trang chủ
        'hero_badge': 'Tiêu chuẩn Quốc Tế ISO 16890 & EN 1822',
        'hero_title': '<span class="text-[#9badba]">Giải Pháp Lọc Khí &</span> <br><span class="text-transparent bg-clip-text bg-[#9badba]">Phòng Sạch Toàn Diện </span>',
        'hero_desc': 'VAF - Viet Air Filter là nhà sản xuất tiên phong tại Việt Nam, cung cấp giải pháp không khí sạch cho các nhà máy điện tử, dược phẩm, bệnh viện và tòa nhà thương mại.',
        'btn_view_prod': 'Xem Sản Phẩm',
        'btn_view_proj': 'Dự Án Tiêu Biểu',
        
        // Về VAF (Trang chủ)
        'sect_about': 'Câu Chuyện Của VAF',
        'about_title': 'Tiên Phong Kiến Tạo Khí Sạch <br><span class="relative inline-block mt-2"><span class="relative z-10 text-primary">Tại Việt Nam</span><span class="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-0"></span></span>',
        'about_desc_1': 'Được thành lập vào <strong>Tháng 1/2008</strong>, Công ty Cổ phần Sản xuất Lọc Khí Việt (VAF) tự hào là đơn vị tiên phong đặt nền móng cho ngành sản xuất lọc khí công nghiệp tại Việt Nam. Từ khởi đầu khiêm tốn, chúng tôi đã vươn mình trở thành "cánh chim đầu đàn" với hơn <strong>200 nhân sự và kỹ thuật có kinh nghiệm</strong>, vận hành nhà máy quy mô lớn với dây chuyền hiện đại bậc nhất tại Bình Dương.',
        'about_desc_2': 'VAF là đơn vị duy nhất tại Việt Nam làm chủ hoàn toàn quy trình sản xuất thiết bị phòng sạch đạt chuẩn <strong>ISO 14644-1</strong>. Sứ mệnh của chúng tôi là cung cấp giải pháp không khí sạch đẳng cấp thế giới, bảo vệ sức khỏe con người và tối ưu hóa quy trình sản xuất cho các đối tác toàn cầu như Samsung, Intel, và các bệnh viện tuyến đầu.',
        
        // Lịch sử (Trang chủ)
        'milestone_2008_desc': 'Thành lập nhà máy đầu tiên tại Bình Dương với 11 nhân sự nòng cốt. Đánh dấu cột mốc đầu tiên của ngành sản xuất lọc khí công nghiệp Việt Nam.',
        'milestone_2010_desc': 'Đầu tư chiến lược vào dây chuyền sản xuất Mini-pleat tự động. Chính thức đạt chứng nhận <strong>ISO 9001:2008</strong>. Trở thành nhà sản xuất trong nước đầu tiên cung cấp trọn gói thiết bị phòng sạch.',
        'milestone_2020_desc': 'Xuất khẩu thành công lọc HEPA sang thị trường khó tính như Hoa Kỳ và Thái Lan. Thương hiệu VAF chính thức được bảo hộ tại <strong>Mỹ</strong>, khẳng định chất lượng Việt Nam trên bản đồ thế giới.',
        'milestone_2023_desc': 'Đạt chứng nhận quản lý chất lượng cho thiết bị y tế. Mở rộng thêm phạm vi cung cấp để phục vụ các đối tác lớn phía Bắc như Samsung.',
        
        // Nút bấm & Nhãn
        'lbl_view_all': 'Xem tất cả',
        'btn_quote': 'Yêu Cầu Báo Giá',
        'btn_submit': 'Gửi Yêu Cầu',
        'contact_hq': 'Trụ sở chính',
        'contact_hotline': 'Hotline Tư Vấn',
        
        // Chi tiết sản phẩm
        'prod_specs': 'Thông số kỹ thuật',
        'prod_apps': 'Ứng dụng',
        'tab_dat': 'Bảng Dữ Liệu Kỹ Thuật (Data Sheet)',
        'tab_dwg': 'Bản Vẽ Kỹ Thuật (Drawing)',
        'contact_consult': 'Tư vấn kỹ thuật',

        'filter_title': 'Danh mục',
        'cat_all': 'Tất cả sản phẩm',
        'cat_pre_filter': 'Lọc Thô',
        'cat_fine_filter': 'Lọc Tinh',
        'cat_hepa': 'Lọc HEPA / ULPA',
        'cat_equip': 'Thiết bị phòng sạch',
        'prod_need_consult': 'Cần tư vấn chọn lọc?',
        'prod_call_now': 'Gọi 1900 8949',
        'btn_back': 'Quay lại',
        'btn_view_detail': 'Xem chi tiết',
        'prod_click_zoom': '* Nhấn vào ảnh để xem kích thước đầy đủ',
        'prod_custom_title': 'Sản xuất kích thước theo yêu cầu',
        'prod_custom_desc': 'Ngoài quy cách chuẩn, VAF nhận sản xuất theo thực tế.',

        // =====================================
        // TRANG GIỚI THIỆU (ABOUT US)
        // =====================================
        
        // 1. Header (Hero)
        'abt_hero_sub': 'Thương Hiệu Tiên Phong',
        'abt_hero_title': 'Định Chuẩn <span class="text-primary">Khí Sạch</span><br>Tại Việt Nam',
        'abt_hero_desc': 'Nhà sản xuất thiết bị phòng sạch và lọc khí công nghiệp tiên phong tại Việt Nam, sở hữu nhà máy tự động hóa và phòng sản xuất chuẩn Class 100.000.',
        'abt_hero_btn': 'Khám Phá Các Giải Pháp',

        // 2. Câu Chuyện & Vật Liệu
        'abt_story_title': 'Hành Trình Phát Triển',
        'abt_story_1': 'Thành lập từ tháng 1/2008, <strong>Viet Air Filter (VAF)</strong> khởi đầu với sứ mệnh tiên phong đặt nền móng cho ngành sản xuất thiết bị lọc khí công nghiệp tại Việt Nam. Trải qua hơn 18 năm phát triển, từ một xưởng sản xuất nhỏ, VAF đã vươn mình thành nhà máy tự động hóa quy mô 5.000m².',
        'abt_story_2': 'Chúng tôi tự hào là đơn vị nội địa duy nhất làm chủ công nghệ lõi sản xuất màng lọc HEPA/ULPA bằng dây chuyền Mini-pleat. Toàn bộ quá trình lắp ráp và kiểm định được thực hiện khép kín trong <strong>Phòng sạch Class 100.000 (ISO 8)</strong>, đảm bảo tiêu chuẩn vô trùng.',
        'abt_story_3': 'Không chỉ phục vụ thị trường nội địa với các đối tác chiến lược như Samsung, Intel hay hệ thống bệnh viện tuyến đầu, sản phẩm của VAF hiện đã chinh phục thành công các thị trường khó tính như Hoa Kỳ và Nhật Bản.',
        'abt_material': 'Vật Liệu Nhập Khẩu',
        'abt_mat_desc': '100% giấy lọc sợi thủy tinh cao cấp từ tập đoàn Hollingsworth & Vose (Mỹ), đảm bảo hiệu suất và tuổi thọ vượt trội.',
        'abt_hv_1': 'Hiệu suất bắt bụi tĩnh cực cao',
        'abt_hv_2': 'Chênh áp thấp, tiết kiệm điện năng',
        'abt_hv_3': 'Độ bền kéo vượt trội, chống rách nát',

        // 3. Những con số (Numbers)
        'abt_num_1': 'Năm Kinh Nghiệm',
        'abt_num_2': 'Mét Vuông Sản Xuất',
        'abt_num_3': 'Kỹ Sư & Chuyên Gia',
        'abt_num_4': 'Leak Test HEPA',

        // 4. Công Nghệ Cốt Lõi
        'abt_cap_sub': 'Công Nghệ Cốt Lõi',
        'abt_cap_title': 'Năng Lực Sản Xuất Tự Động',
        'cap_1_title': 'Dây Chuyền Mini-pleat',
        'cap_1_desc': 'Hệ thống châm keo tự động hoàn toàn (Hot-melt), đảm bảo nếp gấp đều, giảm chênh áp gió và tiết kiệm năng lượng LCC cho hệ thống HVAC.',
        'cap_2_title': 'Phòng Lab Chuẩn EN 1822',
        'cap_2_desc': 'Trang bị máy Scan Test rò rỉ tự động bằng hạt Sol khí (Aerosol). Đảm bảo mỗi màng lọc HEPA/ULPA không có bất kỳ lỗ thủng nào trước khi giao hàng.',
        'cap_3_title': 'Sản Xuất Trong Phòng Sạch',
        'cap_3_desc': 'Khu vực lắp ráp và đóng gói được đặt hoàn toàn trong phòng sạch Class 100.000 (ISO 8) để ngăn chặn nhiễm chéo bụi bẩn vào sản phẩm.',

        // 5. Lịch Sử Lột Xác (Split-Screen)
        'hist_sub': 'Hành Trình Lột Xác',
        'hist_title': '18 Năm Kiến Tạo <br><span class="text-primary">Chuẩn Mực Sạch</span>',
        'hist_quote': '"Sự kiên định của hàng trăm con người với một mục tiêu duy nhất: Không bao giờ thỏa hiệp với không khí bẩn."',
        'hist_author': 'Ban Lãnh Đạo VAF',
        'hist_2008_title': 'Những Bước Đi Đầu Tiên',
        'h_08_lbl1': 'Nhân sự nòng cốt',
        'h_08_lbl2': 'Dây chuyền sản xuất',
        'h_08_val2': 'Thủ Công',
        'h_08_lbl3': 'Sản phẩm bộ lọc',
        'h_08_val3': 'Cơ Bản',
        'h_08_lbl4': 'Phạm vi thị trường',
        'h_08_val4': 'Nội Địa',
        'hist_2026_title': 'Vị Thế Dẫn Đầu Ngành',
        'h_26_lbl1': 'Kỹ sư & Chuyên gia',
        'h_26_lbl2': 'Hệ thống sản xuất',
        'h_26_val2': 'Tự Động Hóa',
        'h_26_lbl3': 'Làm chủ công nghệ lõi',
        'h_26_lbl4': 'Thị trường phân phối',
        'h_26_val4': 'Quốc Tế',

        // 6. Global Footprint (Bản Đồ Xuất Khẩu)
        'gl_sub': 'Global Footprint',
        'gl_title': 'Từ Việt Nam <br><span class="text-primary">Vươn Ra Thế Giới</span>',
        'gl_desc': 'Khẳng định chất lượng toàn cầu. Sản phẩm VAF đã vượt qua các bài kiểm định nghiêm ngặt nhất để có mặt tại các thị trường công nghiệp hàng đầu thế giới.',
        'gl_hub1_title': 'Việt Nam (Trụ Sở)',
        'gl_hub1_sub': 'Sản Xuất & Phân Phối',
        'gl_hub1_desc': 'Nhà máy tự động hóa 5.000m² tại Bình Dương. Phục vụ Samsung, Intel, và hệ thống bệnh viện toàn quốc.',
        'gl_hub2_title': 'Hoa Kỳ (USA)',
        'gl_hub2_sub': 'Thị Trường Xuất Khẩu',
        'gl_hub2_desc': 'Xuất khẩu thành công các dòng lọc tinh và HEPA. Thương hiệu VAF chính thức được bảo hộ bản quyền tại Mỹ.',
        'gl_hub3_title': 'Nhật Bản',
        'gl_hub3_sub': 'Thị Trường Xuất Khẩu',
        'gl_hub3_desc': 'Đáp ứng tiêu chuẩn kỹ thuật khắt khe của các đối tác Nhật Bản trong lĩnh vực điện tử bán dẫn và y tế.',

        // 7. ESG (Nhà Máy Xanh)
        'esg_sub': 'Cam Kết Bền Vững (ESG)',
        'esg_title': 'Kiến Tạo Hệ Sinh Thái <br>Nhà Máy Xanh',
        'esg_desc': 'Là một phần trong chuỗi cung ứng toàn cầu, VAF đặt trách nhiệm môi trường lên hàng đầu. Chúng tôi không ngừng nghiên cứu để tạo ra các thế hệ màng lọc tiết kiệm điện năng, sử dụng vật liệu có thể tái chế, đồng hành cùng chứng chỉ xanh LEED/LOTUS của đối tác.',
        'esg_btn': 'Xem Dải Sản Phẩm V-Dura',
        'esg_1_title': 'Tối Ưu Năng Lượng LCC',
        'esg_1_desc': 'Thiết kế khí động học giúp giảm độ chênh áp tĩnh, tiết kiệm tới 20% điện năng tiêu thụ cho hệ thống quạt HVAC.',
        'esg_2_title': 'Vật Liệu Đốt Hủy Hoàn Toàn',
        'esg_2_desc': 'Sử dụng khung nhựa ABS chuyên dụng (Dòng V-Dura) thay thế cho tôn kẽm, không phát thải kim loại nặng khi xử lý rác.',
        'esg_3_title': 'Tuổi Thọ Vượt Trội',
        'esg_3_desc': 'Kéo dài chu kỳ thay thế lọc từ 6 tháng lên 12 tháng, giảm thiểu 50% khối lượng rác thải công nghiệp ra môi trường.',

        // 8. Call To Action (Tư vấn)
        'abt_cta_title': 'Sẵn Sàng Nâng Tầm <br><span class="text-primary">Chất Lượng Phòng Sạch?</span>',
        'abt_cta_desc': 'Đội ngũ kỹ sư của VAF luôn sẵn sàng khảo sát, tư vấn kỹ thuật và đưa ra giải pháp tối ưu TCO cho nhà máy của bạn. Kính mời Quý đối tác đến tham quan trực tiếp dây chuyền sản xuất tại Bình Dương.',
        'abt_cta_btn1': 'Nhận Tư Vấn Ngay',

        // 9. Chứng nhận Quốc tế
        'abt_cert': 'Tiêu Chuẩn & Chứng Nhận Quốc Tế',
        
        // --- BỔ SUNG CHO TIMELINE (LỊCH SỬ) ---
        'milestone_start': 'Khởi Đầu',
        'milestone_tech': 'Bước Nhảy Công Nghệ',
        'milestone_global': 'Vươn Tầm Quốc Tế',
        'milestone_med': 'Tiêu Chuẩn Y Tế',
        'milestone_future': 'Tầm Nhìn Tương Lai',
        'milestone_2026_title': 'Nhà Máy Thông Minh & Sản Xuất Xanh',
        'milestone_2026_desc': 'Hướng tới mục tiêu XANH, ứng dụng AI vào kiểm soát chất lượng.',
        'btn_capacity': 'Tìm hiểu thêm về năng lực sản xuất',

        // --- BỔ SUNG CHO CÁC TIÊU ĐỀ SECTION ---
        'featured_products_title': 'Sản phẩm chủ lực',
        'featured_products_desc': 'Giải pháp tối ưu cho mọi nhu cầu lọc khí.',
        'filter_fine': 'Lọc Tinh',
        'prod_vpak_name': 'V-PAK (Túi lọc)',
        'prod_vpak_desc': 'Hiệu suất F5-F9, dung lượng bụi lớn.',
        'filter_vbank': 'V-Bank',
        'prod_vdura_name': 'V-DURA',
        'prod_vdura_desc': 'Diện tích lọc lớn, khung nhựa ABS.',
        'filter_hepa': 'HEPA',
        'prod_ultracel_name': 'ULTRACEL',
        'prod_ultracel_desc': 'Lọc HEPA/ULPA H13-U15 chuẩn EN1822.',
        'filter_equip': 'Thiết bị',
        'prod_airshower_name': 'Air Shower',
        'prod_airshower_desc': 'Buồng thổi khí sạch inox 304.',
        'view_all_products': 'Xem tất cả',
        'news_subtitle': 'Cập nhật mới nhất',
        'news_title': 'Tin Tức & Sự Kiện',
        'member_title': 'Thành Viên Hiệp Hội',
        'member_nafa': 'NAFA (USA)',
        'member_saca': 'SACA (VN)',
        'cert_title': 'Chứng Chỉ Chất Lượng',
        'partner_title': 'Đối tác khách hàng',
        'contact_title': 'Liên Hệ VAF',
        'contact_desc': 'Hãy để lại thông tin, đội ngũ kỹ thuật của chúng tôi sẽ liên hệ tư vấn giải pháp tối ưu nhất cho bạn.',
        'form_title': 'Gửi Yêu Cầu Báo Giá',
        'form_submit': 'Gửi Yêu Cầu Ngay',
        'footer_company': '© 2026 CÔNG TY CỔ PHẦN SẢN XUẤT LỌC KHÍ VIỆT (VAF)',
        
        // Trang Sản phẩm
        'page_products_title': 'Danh Mục Sản Phẩm',
        'page_products_desc': 'Giải pháp lọc khí toàn diện cho mọi cấp độ sạch',
        
        // Trang Dự án
        'page_projects_title': 'Dự Án Tiêu Biểu',
        'page_projects_desc': 'Các công trình VAF đã thực hiện',
        'back_list': 'Quay lại danh sách',
        'proj_desc_title': 'Mô tả',
        'proj_scope_title': 'Phạm vi công việc',
        'proj_client': 'Khách hàng',
        'proj_loc': 'Địa điểm',
        'proj_scale': 'Quy mô',

        // =====================================
        // TRANG GIỚI THIỆU (ABOUT US)
        // =====================================
        
        // 1. Header (Hero)
        'abt_hero_sub': 'Thương Hiệu Tiên Phong',
        'abt_hero_title': 'Định Chuẩn <span class="text-primary">Khí Sạch</span><br>Tại Việt Nam',
        'abt_hero_desc': 'Nhà sản xuất thiết bị phòng sạch và lọc khí công nghiệp tiên phong tại Việt Nam, sở hữu nhà máy tự động hóa và phòng sản xuất chuẩn Class 100.000.',
        'abt_hero_btn': 'Khám Phá Các Giải Pháp',

        // 2. Câu Chuyện & Vật Liệu
        'abt_story_title': 'Hành Trình Phát Triển',
        'abt_story_1': 'Thành lập từ tháng 1/2008, <strong>Viet Air Filter (VAF)</strong> khởi đầu với sứ mệnh tiên phong đặt nền móng cho ngành sản xuất thiết bị lọc khí công nghiệp tại Việt Nam. Trải qua hơn 18 năm phát triển, từ một xưởng sản xuất nhỏ, VAF đã vươn mình thành nhà máy tự động hóa quy mô 5.000m².',
        'abt_story_2': 'Chúng tôi tự hào là đơn vị nội địa duy nhất làm chủ công nghệ lõi sản xuất màng lọc HEPA/ULPA bằng dây chuyền Mini-pleat. Toàn bộ quá trình lắp ráp và kiểm định được thực hiện khép kín trong <strong>Phòng sạch Class 100.000 (ISO 8)</strong>, đảm bảo tiêu chuẩn vô trùng.',
        'abt_story_3': 'Không chỉ phục vụ thị trường nội địa với các đối tác chiến lược như Samsung, Intel hay hệ thống bệnh viện tuyến đầu, sản phẩm của VAF hiện đã chinh phục thành công các thị trường khó tính như Hoa Kỳ và Nhật Bản.',
        'abt_material': 'Vật Liệu Nhập Khẩu',
        'abt_mat_desc': '100% giấy lọc sợi thủy tinh cao cấp từ tập đoàn Hollingsworth & Vose (Mỹ), đảm bảo hiệu suất và tuổi thọ vượt trội.',
        'abt_hv_1': 'Hiệu suất bắt bụi tĩnh cực cao',
        'abt_hv_2': 'Chênh áp thấp, tiết kiệm điện năng',
        'abt_hv_3': 'Độ bền kéo vượt trội, chống rách nát',

        // 3. Những con số (Numbers)
        'abt_num_1': 'Năm Kinh Nghiệm',
        'abt_num_2': 'Mét Vuông Sản Xuất',
        'abt_num_3': 'Kỹ Sư & Chuyên Gia',
        'abt_num_4': 'Leak Test HEPA',

        // 4. Công Nghệ Cốt Lõi
        'abt_cap_sub': 'Công Nghệ Cốt Lõi',
        'abt_cap_title': 'Năng Lực Sản Xuất Tự Động',
        'cap_1_title': 'Dây Chuyền Mini-pleat',
        'cap_1_desc': 'Hệ thống châm keo tự động hoàn toàn (Hot-melt), đảm bảo nếp gấp đều, giảm chênh áp gió và tiết kiệm năng lượng LCC cho hệ thống HVAC.',
        'cap_2_title': 'Phòng Lab Chuẩn EN 1822',
        'cap_2_desc': 'Trang bị máy Scan Test rò rỉ tự động bằng hạt Sol khí (Aerosol). Đảm bảo mỗi màng lọc HEPA/ULPA không có bất kỳ lỗ thủng nào trước khi giao hàng.',
        'cap_3_title': 'Sản Xuất Trong Phòng Sạch',
        'cap_3_desc': 'Khu vực lắp ráp và đóng gói được đặt hoàn toàn trong phòng sạch Class 100.000 (ISO 8) để ngăn chặn nhiễm chéo bụi bẩn vào sản phẩm.',

        // 5. Lịch Sử Lột Xác (Split-Screen)
        'hist_sub': 'Hành Trình Lột Xác',
        'hist_title': '18 Năm Kiến Tạo <br><span class="text-primary">Chuẩn Mực Sạch</span>',
        'hist_quote': '"Sự kiên định của hàng trăm con người với một mục tiêu duy nhất: Không bao giờ thỏa hiệp với không khí bẩn."',
        'hist_author': 'Ban Lãnh Đạo VAF',
        'hist_2008_title': 'Những Bước Đi Đầu Tiên',
        'h_08_lbl1': 'Nhân sự nòng cốt',
        'h_08_lbl2': 'Dây chuyền sản xuất',
        'h_08_val2': 'Thủ Công',
        'h_08_lbl3': 'Sản phẩm bộ lọc',
        'h_08_val3': 'Cơ Bản',
        'h_08_lbl4': 'Phạm vi thị trường',
        'h_08_val4': 'Nội Địa',
        'hist_2026_title': 'Vị Thế Dẫn Đầu Ngành',
        'h_26_lbl1': 'Kỹ sư & Chuyên gia',
        'h_26_lbl2': 'Hệ thống sản xuất',
        'h_26_val2': 'Tự Động Hóa',
        'h_26_lbl3': 'Làm chủ công nghệ lõi',
        'h_26_lbl4': 'Thị trường phân phối',
        'h_26_val4': 'Quốc Tế',

        // 6. Global Footprint (Bản Đồ Xuất Khẩu)
        'gl_sub': 'Global Footprint',
        'gl_title': 'Từ Việt Nam <br><span class="text-primary">Vươn Ra Thế Giới</span>',
        'gl_desc': 'Khẳng định chất lượng toàn cầu. Sản phẩm VAF đã vượt qua các bài kiểm định nghiêm ngặt nhất để có mặt tại các thị trường công nghiệp hàng đầu thế giới.',
        'gl_hub1_title': 'Việt Nam (Trụ Sở)',
        'gl_hub1_sub': 'Sản Xuất & Phân Phối',
        'gl_hub1_desc': 'Nhà máy tự động hóa 5.000m² tại Bình Dương. Phục vụ Samsung, Intel, và hệ thống bệnh viện toàn quốc.',
        'gl_hub2_title': 'Hoa Kỳ (USA)',
        'gl_hub2_sub': 'Thị Trường Xuất Khẩu',
        'gl_hub2_desc': 'Xuất khẩu thành công các dòng lọc tinh và HEPA. Thương hiệu VAF chính thức được bảo hộ bản quyền tại Mỹ.',
        'gl_hub3_title': 'Nhật Bản',
        'gl_hub3_sub': 'Thị Trường Xuất Khẩu',
        'gl_hub3_desc': 'Đáp ứng tiêu chuẩn kỹ thuật khắt khe của các đối tác Nhật Bản trong lĩnh vực điện tử bán dẫn và y tế.',

        // 8. Call To Action (Tư vấn)
        'abt_cta_title': 'Sẵn Sàng Nâng Tầm <br><span class="text-primary">Chất Lượng Phòng Sạch?</span>',
        'abt_cta_desc': 'Đội ngũ kỹ sư của VAF luôn sẵn sàng khảo sát, tư vấn kỹ thuật và đưa ra giải pháp tối ưu TCO cho nhà máy của bạn. Kính mời Quý đối tác đến tham quan trực tiếp dây chuyền sản xuất tại Bình Dương.',
        'abt_cta_btn1': 'Nhận Tư Vấn Ngay',

        // 9. Chứng nhận Quốc tế
        'abt_cert': 'Tiêu Chuẩn & Chứng Nhận Quốc Tế',
        
        // --- BỔ SUNG CHO TIMELINE (LỊCH SỬ) ---
        // Lịch sử (Trang chủ)
        'ms_2008_title': 'Khởi Đầu',
        'ms_2008_sub': 'Thành lập Viet Air Filter Corp.',
        'ms_2008_desc': 'Thành lập nhà máy đầu tiên tại Bình Dương với 11 nhân sự nòng cốt. Đánh dấu cột mốc đầu tiên của ngành sản xuất lọc khí công nghiệp Việt Nam.',
        
        'ms_2010_title': 'Bước Nhảy Công Nghệ',
        'ms_2010_sub': 'Đầu tư dây chuyền & Đạt chuẩn ISO.',
        'ms_2010_desc': 'Đầu tư chiến lược vào dây chuyền sản xuất Mini-pleat tự động. Chính thức đạt chứng nhận <strong>ISO 9001:2008</strong>. Trở thành nhà sản xuất trong nước đầu tiên cung cấp trọn gói thiết bị phòng sạch.',
        
        'ms_2020_title': 'Vươn Tầm Quốc Tế',
        'ms_2020_sub': 'Xuất khẩu Mỹ & Thái Lan.',
        'ms_2020_desc': 'Xuất khẩu thành công lọc HEPA sang thị trường khó tính như Hoa Kỳ và Thái Lan. Thương hiệu VAF chính thức được bảo hộ tại <strong>Mỹ</strong>, khẳng định chất lượng Việt Nam trên bản đồ thế giới.',
        
        'ms_2023_title': 'Tiêu Chuẩn Y Tế',
        'ms_2023_sub': 'Đạt ISO 13485:2016.',
        'ms_2023_desc': 'Đạt chứng nhận quản lý chất lượng cho thiết bị y tế. Mở rộng thêm phạm vi cung cấp để phục vụ các đối tác lớn phía Bắc như Samsung.',
        
        'ms_2026_tag': 'Mục Tiêu',
        'ms_2026_title': 'Tầm Nhìn Tương Lai',
        'ms_2026_sub': 'Nhà Máy Thông Minh & Sản Xuất Xanh',
        'ms_2026_desc': 'Hướng tới mục tiêu "XANH" trong sản xuất. Ứng dụng AI vào kiểm soát chất lượng để dẫn đầu thị trường không khí sạch Đông Nam Á.',
        
        'btn_capacity': 'Tìm hiểu thêm về năng lực sản xuất',

        // --- BỔ SUNG CHO CÁC TIÊU ĐỀ SECTION ---
        'featured_products_title': 'Sản phẩm chủ lực',
        'featured_products_desc': 'Giải pháp tối ưu cho mọi nhu cầu lọc khí.',
        'view_all_products': 'Xem tất cả',
        'news_subtitle': 'Cập nhật mới nhất',
        'news_title': 'Tin Tức & Sự Kiện',
        'member_title': 'Thành Viên Hiệp Hội',
        'cert_title': 'Chứng Chỉ Chất Lượng',
        'partner_title': 'Đối tác khách hàng',
        'contact_title': 'Liên Hệ VAF',
        'contact_desc': 'Hãy để lại thông tin, đội ngũ kỹ thuật của chúng tôi sẽ liên hệ tư vấn.',
        'form_title': 'Gửi Yêu Cầu Báo Giá',
        'form_submit': 'Gửi Yêu Cầu Ngay',
        'footer_company': '© 2026 CÔNG TY CỔ PHẦN SẢN XUẤT LỌC KHÍ VIỆT (VAF)',
        'cat_title': 'Danh mục',
        'cat_all': 'Tất cả sản phẩm',
        'cat_pre': 'Lọc Thô',
        'cat_fine': 'Lọc Tinh',
        'cat_hepa': 'Lọc HEPA / ULPA',
        'cat_equip': 'Thiết bị phòng sạch',
        'prod_need_consult': 'Cần tư vấn chọn lọc?',
        'prod_call_now': 'Gọi 1900 8949',
        'btn_view_detail': 'Xem chi tiết',

        'pg_contact_title': 'Liên Hệ Với VAF',
        'pg_contact_desc': 'Đội ngũ kỹ sư của chúng tôi luôn sẵn sàng hỗ trợ khảo sát và tư vấn giải pháp khí sạch tối ưu nhất cho nhà máy của bạn.',
        'contact_add': 'Lô C3.4, đường N14, KCN Đồng An 2, TP. Thủ Dầu Một, Tỉnh Bình Dương.',
        'form_sub': 'Vui lòng điền thông tin, chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.',
        'lbl_name': 'Họ & Tên *',
        'lbl_phone': 'Số Điện Thoại *',
        'lbl_company': 'Tên Công Ty',
        'lbl_msg': 'Nội dung yêu cầu *',
        'btn_direct': 'Chỉ đường',
        'ft_desc': 'Nhà sản xuất thiết bị phòng sạch và lọc khí công nghiệp tiên phong tại Việt Nam. Định chuẩn khí sạch toàn cầu.',
        'ft_link': 'Liên Kết Nhanh',
        'ft_contact': 'Thông Tin Liên Hệ',
        'contact_hero_sub': 'Kết Nối Toàn Cầu',
        'contact_hero_title': 'Khởi Đầu Dự Án <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Phòng Sạch Của Bạn</span>',
        'contact_hero_desc': 'Các kỹ sư chuyên gia của VAF luôn sẵn sàng lắng nghe, khảo sát và thiết kế giải pháp xử lý không khí tối ưu nhất (TCO) cho nhà máy của bạn.',
        'contact_info_title': 'Thông Tin Liên Hệ',
        'contact_info_sub': 'Trực tiếp từ Nhà máy sản xuất VAF.',
        'contact_trust': 'Đối tác tin cậy của',
        'form_pro_title': 'Gửi Yêu Cầu Chuyên Gia',
        'form_pro_desc': 'Vui lòng cung cấp chi tiết nhu cầu, VAF sẽ phản hồi và báo giá trong 24 giờ.',
        'lbl_name': 'Họ & Tên *',
        'lbl_phone': 'Số Điện Thoại *',
        'lbl_company': 'Tên Công Ty / Dự Án',
        'lbl_msg': 'Chi tiết yêu cầu (Lưu lượng, cấp độ sạch...) *',
        'form_submit': 'Gửi Yêu Cầu Cho VAF',
        'btn_direct': 'Chỉ đường tới Nhà máy',

        'ft_solutions': 'Giải Pháp Khí Sạch',
        'ft_policy': 'Chính sách bảo mật',
        'ft_terms': 'Điều khoản dịch vụ',

        // Trang Dự án (Phần Tư vấn thiết kế mới)
        'proj_consult_sub': 'Engineering & Consulting',
        'proj_consult_title': 'Giải Pháp Phòng Sạch <br><span class="text-primary">Đồng Bộ & Toàn Diện</span>',
        'proj_consult_desc': 'Hơn cả một nhà sản xuất thiết bị, VAF mang đến dịch vụ tư vấn, thiết kế và thi công hệ thống xử lý không khí đạt chuẩn quốc tế (ISO 14644, GMP, FDA).',
        'step_1_title': 'Khảo Sát & Phân Tích',
        'step_1_desc': 'Đánh giá hiện trạng nhà máy, đo lường nồng độ bụi, nhiệt ẩm và phân tích yêu cầu cấp độ sạch thực tế của chủ đầu tư.',
        'step_2_title': 'Thiết Kế HVAC & CFD',
        'step_2_desc': 'Tính toán lưu lượng gió (ACH), thiết kế sơ đồ không gian P&ID và mô phỏng luồng khí CFD để tối ưu hóa hiệu suất.',
        'step_3_title': 'Sản Xuất & Tích Hợp',
        'step_3_desc': 'Chế tạo thiết bị phòng sạch (AHU, FFU, Pass Box) và màng lọc HEPA/ULPA đồng bộ ngay tại nhà máy tự động VAF.',
        'step_4_title': 'Thi Công & Kiểm Định',
        'step_4_desc': 'Lắp đặt tận nơi, tiến hành đo đạc hạt bụi (Particle count) và rò rỉ (DOP/PAO Test) cấp chứng nhận chuẩn ISO.',
        'proj_cta_title': 'Bắt đầu dự án phòng sạch của bạn?',
        'proj_cta_desc': 'Đội ngũ kỹ sư chuyên gia của VAF sẵn sàng tư vấn giải pháp và tối ưu hóa chi phí (TCO). Liên hệ ngay để nhận bản vẽ sơ bộ miễn phí.',
        'proj_cta_btn': 'Yêu Cầu Tư Vấn',


    },
    'en': {


        'ft_solutions': 'Clean Air Solutions',
        'ft_policy': 'Privacy Policy',
        'ft_terms': 'Terms of Service',

        'pg_contact_title': 'Contact VAF',
        'pg_contact_desc': 'Our engineering team is always ready to support surveys and provide the optimal clean air solutions for your factory.',
        'contact_add': 'Lot C3.4, N14 St., Dong An 2 IP, Thu Dau Mot City, Binh Duong Province.',
        'form_sub': 'Please fill out the form, we will respond within 24 working hours.',
        'lbl_name': 'Full Name *',
        'lbl_phone': 'Phone Number *',
        'lbl_company': 'Company Name',
        'lbl_msg': 'Your Message / Requirement *',
        'btn_direct': 'Get Directions',
        'ft_desc': 'The pioneer manufacturer of cleanroom equipment and industrial air filters in Vietnam. Defining global clean air standards.',
        'ft_link': 'Quick Links',
        'ft_contact': 'Contact Information',
        'contact_hero_sub': 'Global Connection',
        'contact_hero_title': 'Initiate Your <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Cleanroom Project</span>',
        'contact_hero_desc': 'VAF\'s expert engineers are always ready to listen, survey, and design the most optimal air treatment solution (TCO) for your factory.',
        'contact_info_title': 'Contact Information',
        'contact_info_sub': 'Directly from the VAF Manufacturing Plant.',
        'contact_trust': 'Trusted partner of',
        'form_pro_title': 'Request an Expert',
        'form_pro_desc': 'Please provide your requirements, VAF will respond and quotation within 24 hours.',
        'lbl_name': 'Full Name *',
        'lbl_phone': 'Phone Number *',
        'lbl_company': 'Company / Project Name',
        'lbl_msg': 'Requirement details (Airflow, cleanliness class...) *',
        'form_submit': 'Submit Request to VAF',
        'btn_direct': 'Get Directions to Factory',

        // Menu
        'nav_home': 'Home',
        'nav_about': 'About Us',
        'nav_products': 'Products',
        'nav_projects': 'Projects',
        'nav_news': 'News',
        'nav_contact': 'Contact',
        'btn_profile': 'Company Profile',
        
        // Homepage
        'hero_badge': 'ISO 16890 & EN 1822 International Standards',
        'hero_title': 'Comprehensive Air Filtration & <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Cleanroom Solutions</span>',
        'hero_title': '<span class="text-[#9badba]">Comprehensive Air Filtration &</span> <br><span class="text-transparent bg-clip-text bg-[#9badba]">Cleanroom Solutions </span>', 
        'hero_desc': 'VAF - Viet Air Filter is the pioneer manufacturer in Vietnam, providing clean air solutions for electronics factories, pharmaceuticals, hospitals, and commercial buildings.',
        'btn_view_prod': 'View Products',
        'btn_view_proj': 'Featured Projects',
        
        // About VAF (Homepage)
        'sect_about': 'The VAF Story',
        'about_title': 'Pioneering Clean Air Creation <br><span class="relative inline-block mt-2"><span class="relative z-10 text-primary">In Vietnam</span><span class="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-0"></span></span>',
        'about_desc_1': 'Established in <strong>January 2008</strong>, Viet Air Filter Manufacturing Joint Stock Company (VAF) proudly stands as a pioneering company laying the foundation for the industrial air filtration manufacturing industry in Vietnam. From humble beginnings, we have grown into a leading company with over <strong>200 experts and engineers</strong>, operating a large-scale factory with state-of-the-art production lines in Binh Duong.',
        'about_desc_2': 'VAF is the only company in Vietnam that fully masters the production process of cleanroom equipment meeting <strong>ISO 14644-1</strong> standards. Our mission is to provide world-class clean air solutions, protect human health, and optimize production processes for global partners such as Samsung, Intel, and leading hospitals.',
        
        // History (Homepage)
        'milestone_2008_desc': 'Established the first factory in Binh Duong with 11 core personnel. Marking the first milestone of Vietnam\'s industrial air filtration manufacturing industry.',
        'milestone_2010_desc': 'Strategic investment in an automatic Mini-pleat production line. Officially achieved <strong>ISO 9001:2008</strong> certification. Became the first domestic manufacturer to provide comprehensive cleanroom equipment.',
        'milestone_2020_desc': 'Successfully exported HEPA filters to demanding markets such as the USA and Thailand. The VAF brand is officially protected in the <strong>US</strong>, affirming Vietnamese quality on the global map.',
        'milestone_2023_desc': 'Achieved quality management certification for medical devices. Expanded the supply scope to serve major partners in the North, such as Samsung.',

        // Buttons & Labels
        'lbl_view_all': 'View All',
        'btn_quote': 'Request A Quote',
        'btn_submit': 'Submit Request',
        'contact_hq': 'Headquarters',
        'contact_hotline': 'Hotline',

        // =====================================
        // ABOUT US PAGE
        // =====================================
        
        // 1. Hero
        'abt_hero_sub': 'Pioneering Brand',
        'abt_hero_title': 'Defining <span class="text-primary">Clean Air</span><br>Standards in Vietnam',
        'abt_hero_desc': 'The pioneer manufacturer of cleanroom equipment and industrial air filters in Vietnam, owning an automated factory and Class 100,000 production cleanrooms.',
        'abt_hero_btn': 'Explore Our Solutions',

        // 2. Story & H&V Material
        'abt_story_title': 'Our Growth Journey',
        'abt_story_1': 'Founded in January 2008, <strong>Viet Air Filter (VAF)</strong> began with the pioneering mission of laying the foundation for the industrial air filtration industry in Vietnam. Over 18 years, we have grown from a small workshop into a 5,000m² automated smart factory.',
        'abt_story_2': 'We are proud to be the only domestic company to fully master the core technology of HEPA/ULPA filter manufacturing using Mini-pleat lines. Assembly and testing are strictly conducted inside a <strong>Class 100,000 (ISO 8) Cleanroom</strong> to ensure sterility.',
        'abt_story_3': 'Beyond serving strategic domestic partners like Samsung, Intel, and top-tier hospitals, VAF products have successfully conquered demanding international markets such as the USA and Japan.',
        'abt_material': 'Imported Materials',
        'abt_mat_desc': '100% premium glass fiber filter media from the world\'s leading corporation Hollingsworth & Vose (USA), ensuring outstanding performance and lifespan.',
        'abt_hv_1': 'Extremely high static dust holding capacity',
        'abt_hv_2': 'Low pressure drop, saving energy',
        'abt_hv_3': 'Superior tensile strength, tear resistant',

        // 3. Numbers
        'abt_num_1': 'Years of Experience',
        'abt_num_2': 'Sq. Meters of Production',
        'abt_num_3': 'Engineers & Experts',
        'abt_num_4': 'HEPA Leak Tested',

        // 4. Core Technology
        'abt_cap_sub': 'Core Technology',
        'abt_cap_title': 'Automated Manufacturing',
        'cap_1_title': 'Mini-pleat Production Line',
        'cap_1_desc': 'Fully automated hot-melt dispensing system ensures uniform pleats, reducing air pressure drop and saving LCC energy for HVAC systems.',
        'cap_2_title': 'EN 1822 Standard Lab',
        'cap_2_desc': 'Equipped with automatic Aerosol leak scan test machines. Ensuring every HEPA/ULPA filter is absolutely free of leaks before delivery.',
        'cap_3_title': 'Cleanroom Manufacturing',
        'cap_3_desc': 'Assembly and packaging areas are strictly located inside a Class 100,000 (ISO 8) cleanroom to prevent particulate cross-contamination.',

        // 5. Transformation History
        'hist_sub': 'Transformation Journey',
        'hist_title': '18 Years of Creating <br><span class="text-primary">Clean Standards</span>',
        'hist_quote': '"The unwavering dedication of hundreds of individuals with a single goal: Never compromise with dirty air."',
        'hist_author': 'VAF Board of Directors',
        'hist_2008_title': 'The Very First Steps',
        'h_08_lbl1': 'Core Personnel',
        'h_08_lbl2': 'Production Line',
        'h_08_val2': 'Manual',
        'h_08_lbl3': 'Filter Products',
        'h_08_val3': 'Basic',
        'h_08_lbl4': 'Market Scope',
        'h_08_val4': 'Domestic',
        'hist_2026_title': 'Industry Leading Position',
        'h_26_lbl1': 'Engineers & Experts',
        'h_26_lbl2': 'Production System',
        'h_26_val2': 'Automated',
        'h_26_lbl3': 'Mastering Core Tech',
        'h_26_lbl4': 'Distribution Market',
        'h_26_val4': 'Global',

        // 6. Global Footprint
        'gl_sub': 'Global Footprint',
        'gl_title': 'From Vietnam <br><span class="text-primary">To The World</span>',
        'gl_desc': 'Affirming global quality. VAF products have passed the strictest tests to be present in the world\'s leading industrial markets.',
        'gl_hub1_title': 'Vietnam (HQ)',
        'gl_hub1_sub': 'Manufacturing & Distribution',
        'gl_hub1_desc': '5,000m² automated factory in Binh Duong. Serving Samsung, Intel, and national hospital systems.',
        'gl_hub2_title': 'United States (USA)',
        'gl_hub2_sub': 'Export Market',
        'gl_hub2_desc': 'Successfully exported fine and HEPA filters. The VAF brand is officially trademark-protected in the US.',
        'gl_hub3_title': 'Japan',
        'gl_hub3_sub': 'Export Market',
        'gl_hub3_desc': 'Meeting the stringent technical standards of Japanese partners in the semiconductor and medical fields.',

        // 7. ESG
        'esg_sub': 'Sustainability (ESG)',
        'esg_title': 'Building a Green <br>Factory Ecosystem',
        'esg_desc': 'As part of the global supply chain, VAF prioritizes environmental responsibility. We continuously research to create energy-saving filters using recyclable materials, aligning with our partners\' LEED/LOTUS green certifications.',
        'esg_btn': 'Explore V-Dura Range',
        'esg_1_title': 'LCC Energy Optimization',
        'esg_1_desc': 'Aerodynamic design reduces static pressure drop, saving up to 20% in power consumption for HVAC fan systems.',
        'esg_2_title': 'Fully Incinerable Materials',
        'esg_2_desc': 'Using specialized ABS plastic frames (V-Dura series) instead of galvanized steel, emitting no heavy metals during disposal.',
        'esg_3_title': 'Outstanding Lifespan',
        'esg_3_desc': 'Extending the filter replacement cycle from 6 to 12 months, reducing industrial waste released into the environment by 50%.',

        // 8. CTA
        'abt_cta_title': 'Ready to Elevate Your <br><span class="text-primary">Cleanroom Quality?</span>',
        'abt_cta_desc': 'VAF\'s team of engineers is ready to support surveys, provide technical consultation, and deliver the optimal TCO solution for your factory. We welcome our partners to directly visit our production line in Binh Duong.',
        'abt_cta_btn1': 'Get Consultation Now',

        // 9. Certifications
        'abt_cert': 'International Standards & Certifications',
        
        // Product Detail
        'prod_specs': 'Specifications',
        'prod_apps': 'Applications',
        'tab_dat': 'Technical Data Sheet',
        'tab_dwg': 'Technical Drawing',
        'contact_consult': 'Tech Support',
        
        // History (Homepage)
        'ms_2008_title': 'Inception',
        'ms_2008_sub': 'Establishment of Viet Air Filter Corp.',
        'ms_2008_desc': 'Established the first factory in Binh Duong with 11 core personnel. Marking the first milestone of Vietnam\'s industrial air filtration manufacturing industry.',
        
        'ms_2010_title': 'Technology Leap',
        'ms_2010_sub': 'Line Investment & ISO Certification.',
        'ms_2010_desc': 'Strategic investment in an automatic Mini-pleat production line. Officially achieved <strong>ISO 9001:2008</strong> certification. Became the first domestic manufacturer to provide comprehensive cleanroom equipment.',
        
        'ms_2020_title': 'Global Reach',
        'ms_2020_sub': 'Export to USA & Thailand.',
        'ms_2020_desc': 'Successfully exported HEPA filters to demanding markets such as the USA and Thailand. The VAF brand is officially protected in the <strong>US</strong>, affirming Vietnamese quality on the global map.',
        
        'ms_2023_title': 'Medical Standard',
        'ms_2023_sub': 'Achieved ISO 13485:2016.',
        'ms_2023_desc': 'Achieved quality management certification for medical devices. Expanded the supply scope to serve major partners in the North, such as Samsung.',
        
        'ms_2026_tag': 'Target',
        'ms_2026_title': 'Future Vision',
        'ms_2026_sub': 'Smart Factory & Green Manufacturing',
        'ms_2026_desc': 'Aiming for "GREEN" goals in production. Applying AI in quality control to lead the Southeast Asian clean air market.',
        
        'btn_capacity': 'Learn more about production capacity',

        // --- TRANSLATION FOR SECTIONS ---
        'featured_products_title': 'Featured Products',
        'featured_products_desc': 'Optimal solutions for all filtration needs.',
        'filter_fine': 'Fine Filter',
        'prod_vpak_name': 'V-PAK (Bag Filter)',
        'prod_vpak_desc': 'F5-F9 efficiency, high dust capacity.',
        'filter_vbank': 'V-Bank',
        'prod_vdura_name': 'V-DURA',
        'prod_vdura_desc': 'Large filtration area, ABS plastic frame.',
        'filter_hepa': 'HEPA',
        'prod_ultracel_name': 'ULTRACEL',
        'prod_ultracel_desc': 'HEPA/ULPA H13-U15 filter standard EN1822.',
        'filter_equip': 'Equipment',
        'prod_airshower_name': 'Air Shower',
        'prod_airshower_desc': 'Clean air shower booth stainless steel 304.',
        'view_all_products': 'View All',
        'news_subtitle': 'Latest Updates',
        'news_title': 'News & Events',
        'member_title': 'Association Members',
        'member_nafa': 'NAFA (USA)',
        'member_saca': 'SACA (VN)',
        'cert_title': 'Quality Certificates',
        'partner_title': 'Our Partners',
        'contact_title': 'Contact VAF',
        'contact_desc': 'Please leave your information, our technical team will contact you for consultation.',
        'form_title': 'Request A Quote',
        'form_submit': 'Submit Request',
        'footer_company': '© 2026 VIET AIR FILTER CORPORATION (VAF)',
        
        // Products Page
        'page_products_title': 'Product Categories',
        'page_products_desc': 'Comprehensive air filtration solutions for all cleanliness levels',

        'filter_title': 'Categories',
        'cat_all': 'All Products',
        'cat_pre_filter': 'Pre-filter',
        'cat_fine_filter': 'Fine filter',
        'cat_hepa': 'HEPA / ULPA Filters',
        'cat_equip': 'Cleanroom Equipment',
        'prod_need_consult': 'Need filter consultation?',
        'prod_call_now': 'Call 1900 8949',
        'btn_back': 'Back',
        'btn_view_detail': 'View Details',
        'prod_click_zoom': '* Click the image to view full size',
        'prod_custom_title': 'Custom Size Manufacturing',
        'prod_custom_desc': 'Besides standard sizes, VAF offers custom manufacturing to fit your actual needs.',
        
        // Projects Page
        'page_projects_title': 'Featured Projects',
        'page_projects_desc': 'Projects executed by VAF',
        'back_list': 'Back to list',
        'proj_desc_title': 'Description',
        'proj_scope_title': 'Scope of Work',
        'proj_client': 'Client',
        'proj_loc': 'Location',
        'proj_scale': 'Scale',

        // =====================================
        // ABOUT US PAGE
        // =====================================
        
        // 1. Hero
        'abt_hero_sub': 'Pioneering Brand',
        'abt_hero_title': 'Defining <span class="text-primary">Clean Air</span><br>Standards in Vietnam',
        'abt_hero_desc': 'The pioneer manufacturer of cleanroom equipment and industrial air filters in Vietnam, owning an automated factory and Class 100,000 production cleanrooms.',
        'abt_hero_btn': 'Explore Our Solutions',

        // 2. Story & H&V Material
        'abt_story_title': 'Our Growth Journey',
        'abt_story_1': 'Founded in January 2008, <strong>Viet Air Filter (VAF)</strong> began with the pioneering mission of laying the foundation for the industrial air filtration industry in Vietnam. Over 18 years, we have grown from a small workshop into a 5,000m² automated smart factory.',
        'abt_story_2': 'We are proud to be the only domestic company to fully master the core technology of HEPA/ULPA filter manufacturing using Mini-pleat lines. Assembly and testing are strictly conducted inside a <strong>Class 100,000 (ISO 8) Cleanroom</strong> to ensure sterility.',
        'abt_story_3': 'Beyond serving strategic domestic partners like Samsung, Intel, and top-tier hospitals, VAF products have successfully conquered demanding international markets such as the USA and Japan.',
        'abt_material': 'Imported Materials',
        'abt_mat_desc': '100% premium glass fiber filter media from the world\'s leading corporation Hollingsworth & Vose (USA), ensuring outstanding performance and lifespan.',
        'abt_hv_1': 'Extremely high static dust holding capacity',
        'abt_hv_2': 'Low pressure drop, saving energy',
        'abt_hv_3': 'Superior tensile strength, tear resistant',

        // 3. Numbers
        'abt_num_1': 'Years of Experience',
        'abt_num_2': 'Sq. Meters of Production',
        'abt_num_3': 'Engineers & Experts',
        'abt_num_4': 'HEPA Leak Tested',

        // 4. Core Technology
        'abt_cap_sub': 'Core Technology',
        'abt_cap_title': 'Automated Manufacturing',
        'cap_1_title': 'Mini-pleat Production Line',
        'cap_1_desc': 'Fully automated hot-melt dispensing system ensures uniform pleats, reducing air pressure drop and saving LCC energy for HVAC systems.',
        'cap_2_title': 'EN 1822 Standard Lab',
        'cap_2_desc': 'Equipped with automatic Aerosol leak scan test machines. Ensuring every HEPA/ULPA filter is absolutely free of leaks before delivery.',
        'cap_3_title': 'Cleanroom Manufacturing',
        'cap_3_desc': 'Assembly and packaging areas are strictly located inside a Class 100,000 (ISO 8) cleanroom to prevent particulate cross-contamination.',

        // 5. Transformation History
        'hist_sub': 'Transformation Journey',
        'hist_title': '18 Years of Creating <br><span class="text-primary">Clean Standards</span>',
        'hist_quote': '"The unwavering dedication of hundreds of individuals with a single goal: Never compromise with dirty air."',
        'hist_author': 'VAF Board of Directors',
        'hist_2008_title': 'The Very First Steps',
        'h_08_lbl1': 'Core Personnel',
        'h_08_lbl2': 'Production Line',
        'h_08_val2': 'Manual',
        'h_08_lbl3': 'Filter Products',
        'h_08_val3': 'Basic',
        'h_08_lbl4': 'Market Scope',
        'h_08_val4': 'Domestic',
        'hist_2026_title': 'Industry Leading Position',
        'h_26_lbl1': 'Engineers & Experts',
        'h_26_lbl2': 'Production System',
        'h_26_val2': 'Automated',
        'h_26_lbl3': 'Mastering Core Tech',
        'h_26_lbl4': 'Distribution Market',
        'h_26_val4': 'Global',

        // 6. Global Footprint
        'gl_sub': 'Global Footprint',
        'gl_title': 'From Vietnam <br><span class="text-primary">To The World</span>',
        'gl_desc': 'Affirming global quality. VAF products have passed the strictest tests to be present in the world\'s leading industrial markets.',
        'gl_hub1_title': 'Vietnam (HQ)',
        'gl_hub1_sub': 'Manufacturing & Distribution',
        'gl_hub1_desc': '5,000m² automated factory in Binh Duong. Serving Samsung, Intel, and national hospital systems.',
        'gl_hub2_title': 'United States (USA)',
        'gl_hub2_sub': 'Export Market',
        'gl_hub2_desc': 'Successfully exported fine and HEPA filters. The VAF brand is officially trademark-protected in the US.',
        'gl_hub3_title': 'Japan',
        'gl_hub3_sub': 'Export Market',
        'gl_hub3_desc': 'Meeting the stringent technical standards of Japanese partners in the semiconductor and medical fields.',

        // 8. CTA
        'abt_cta_title': 'Ready to Elevate Your <br><span class="text-primary">Cleanroom Quality?</span>',
        'abt_cta_desc': 'VAF\'s team of engineers is ready to support surveys, provide technical consultation, and deliver the optimal TCO solution for your factory. We welcome our partners to directly visit our production line in Binh Duong.',
        'abt_cta_btn1': 'Get Consultation Now',

        // 9. Certifications
        'abt_cert': 'International Standards & Certifications',
        
        // Product Detail
        'prod_specs': 'Specifications',
        'prod_apps': 'Applications',
        'tab_dat': 'Technical Data Sheet',
        'tab_dwg': 'Technical Drawing',
        'contact_consult': 'Tech Support',
        'about_desc_1': 'Established in  <strong>January 2008</strong>,Viet Air Filter Manufacturing Joint Stock Company (VAF) proudly stands as a pioneering company laying the foundation for the industrial air filtration manufacturing industry in Vietnam. From humble beginnings, we have grown into a leading company with over <strong>200 experienced personnel and technicians</strong>,operating a large-scale factory with state-of-the-art production lines in Binh Duong.',
        'about_desc_2': 'VAF is the only company in Vietnam that fully masters the production process of cleanroom equipment meeting <strong>ISO 14644-1</strong> standards. Our mission is to provide world-class clean air solutions, protect human health, and optimize production processes for global partners such as Samsung, Intel, and leading hospitals.',
        'about_title': 'Pioneering Clean Air Creation <span class="relative inline-block mt-2"><span class="relative z-10 text-primary">In Viet Nam</span><span class="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-0"></span></span>',
        'milestone_start': 'Inception',
        'milestone_2008_desc': 'Established first factory in Binh Duong with 11 core personnel...',
        'milestone_tech': 'Technology Leap',
        'milestone_2010_desc': 'Invested in automatic Mini-pleat production line. Achieved ISO 9001:2008...',
        'milestone_global': 'Global Reach',
        'milestone_2020_desc': 'Successfully exported to USA and Thailand. Trademark protected in the US.',
        'milestone_med': 'Medical Standard',
        'milestone_2023_desc': 'Achieved ISO 13485:2016 for medical devices. Partnered with Samsung.',
        'milestone_future': 'Future Vision',
        'milestone_2026_title': 'Smart Factory & Green Manufacturing',
        'milestone_2026_desc': 'Aiming for GREEN goals, applying AI in quality control.',
        'btn_capacity': 'Learn more about production capacity',

        // --- TRANSLATION FOR SECTIONS ---
        'featured_products_title': 'Featured Products',
        'featured_products_desc': 'Optimal solutions for all filtration needs.',
        'view_all_products': 'View All',
        'news_subtitle': 'Latest Updates',
        'news_title': 'News & Events',
        'member_title': 'Association Members',
        'cert_title': 'Quality Certificates',
        'partner_title': 'Our Partners',
        'contact_title': 'Contact VAF',
        'contact_desc': 'Please leave your information, our technical team will contact you for consultation.',
        'form_title': 'Request A Quote',
        'form_submit': 'Submit Request',
        'footer_company': '© 2026 VIET AIR FILTER CORPORATION (VAF)',

        'cat_title': 'Categories',
        'cat_all': 'All Products',
        'cat_pre': 'Pre-filter',
        'cat_fine': 'Fine filter',
        'cat_hepa': 'HEPA / ULPA Filters',
        'cat_equip': 'Cleanroom Equipment',
        'prod_need_consult': 'Need filter consultation?',
        'prod_call_now': 'Call 1900 8949',
        'btn_view_detail': 'View Details',

        // Projects Page (New Consulting Section)
        'proj_consult_sub': 'Engineering & Consulting',
        'proj_consult_title': 'Comprehensive & Synchronized <br><span class="text-primary">Cleanroom Solutions</span>',
        'proj_consult_desc': 'More than just an equipment manufacturer, VAF provides consulting, design, and installation services for air treatment systems meeting international standards (ISO 14644, GMP, FDA).',
        'step_1_title': 'Survey & Analysis',
        'step_1_desc': 'Evaluate current factory conditions, measure dust concentration, temperature, humidity, and analyze the actual cleanliness level required.',
        'step_2_title': 'HVAC & CFD Design',
        'step_2_desc': 'Calculate airflow rate (ACH), design P&ID spatial diagrams, and simulate CFD airflow to optimize performance.',
        'step_3_title': 'Manufacturing & Integration',
        'step_3_desc': 'Fabricate cleanroom equipment (AHU, FFU, Pass Box) and synchronized HEPA/ULPA filters right at VAF automated factory.',
        'step_4_title': 'Installation & Validation',
        'step_4_desc': 'On-site installation, conduct particle counting and leakage tests (DOP/PAO Test) to issue ISO standard certificates.',
        'proj_cta_title': 'Starting your cleanroom project?',
        'proj_cta_desc': 'VAF expert engineering team is ready to consult solutions and optimize costs (TCO). Contact us now to get a free preliminary design drawing.',
        'proj_cta_btn': 'Request Consultation',
    }
};

// 3. HÀM CHUYỂN NGÔN NGỮ (Logic mới)
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('vaf_lang', lang); 

    // Đổi màu nút VN/EN
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const btns = document.querySelectorAll('.lang-btn');
    if (lang === 'vi' && btns[0]) btns[0].classList.add('active');
    else if (btns[1]) btns[1].classList.add('active');

    // Dịch text tĩnh
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Cập nhật lại Sidebar Menu sang ngôn ngữ mới ngay lập tức
    renderSidebarMenu();

    // Render lại dữ liệu đang xem
    const prodView = document.getElementById('view-products');
    const newsView = document.getElementById('view-news');
    const prodDetailView = document.getElementById('view-product-detail');

    if (prodView && prodView.style.display !== 'none') {
        // Gắn cờ true để không bị nhảy trang (cuộn chuột) khi chỉ đổi ngôn ngữ
        filterProducts(window.currentFilterCat || 'all', true); 
    }
    if (newsView && newsView.style.display !== 'none') {
        renderNewsPage(window.currentNewsPage || 1); 
    }
    if (prodDetailView && prodDetailView.style.display !== 'none' && window.currentProductId) {
        openProductDetail(window.currentProductId); 
    }
}

/* ================================================================
   FILE XỬ LÝ CHÍNH - VAF WEBSITE (MENU LỌC DANH MỤC)
================================================================ */

// --- 1. DỮ LIỆU DỰ ÁN (PROJECTS) ---


const projects = [

    // =========================
    // ĐIỆN TỬ / BÁN DẪN
    // =========================

    {
        id: 'p20',
        title: 'Samsung Display Vietnam (SDV)',
        cat: 'Điện Tử',
        img: 'images/anh-du-an/ssdisplay.webp',
        client: 'Samsung Display Vietnam',
        loc: 'Bắc Ninh',
        scale: 'Nhà máy màn hình OLED',
        year: '2023',
        desc: 'Cung cấp giải pháp lọc khí và vật tư phòng sạch cho dây chuyền sản xuất màn hình điện tử.',
        scope: ['HEPA Filter', 'ULPA Filter', 'FFU'],
        featured: true
    },

    {
        id: 'p17',
        title: 'Samsung Electronics Vietnam (SEMV)',
        cat: 'Điện Tử',
        img: 'images/anh-du-an/sev.webp',
        client: 'Samsung Electronics Vietnam',
        loc: 'Bắc Ninh',
        scale: 'Nhà máy điện tử',
        year: '2023',
        desc: 'Cung cấp lọc khí và vật tư phòng sạch cho nhà máy sản xuất điện tử.',
        scope: ['HEPA Filter', 'Pre Filter', 'Fine Filter']
     
    },

    {
        id: 'p18',
        title: 'Samsung Electronics Vietnam Thai Nguyen (SEVT)',
        cat: 'Điện Tử',
        img: 'images/anh-du-an/sevt.webp',
        client: 'Samsung Electronics Vietnam Thai Nguyen',
        loc: 'Thái Nguyên',
        scale: 'Nhà máy điện tử',
        year: '2023',
        desc: 'Cung cấp vật tư tiêu hao lọc khí và thiết bị phòng sạch.',
        scope: ['HEPA Filter', 'FFU', 'Bag Filter'],
        featured: true
    },

    {
        id: 'p19',
        title: 'Samsung CE Complex (SEHC)',
        cat: 'Điện Tử',
        img: 'images/anh-du-an/sehc.webp',
        client: 'Samsung CE Complex',
        loc: 'TP.HCM',
        scale: 'Nhà máy điện tử',
        year: '2023',
        desc: 'Cung cấp giải pháp lọc khí và vật tư phòng sạch cho nhà máy điện tử.',
        scope: ['HEPA Filter', 'AHU Filter', 'FFU'],
        featured: true
    },

  
    // =========================
    // Y TẾ
    // =========================

    {
        id: 'p01',
        title: 'Bệnh Viện Gia An 115',
        cat: 'Y Tế',
        img: 'images/anh-du-an/ga115.webp',
        client: 'Bệnh Viện Gia An 115',
        loc: 'TP HCM',
        scale: 'Phòng Sạch',
        year: '2023',
        desc: 'Thi công phòng LAF ISO CLASS 5 Viện Tế Bào Gốc.',
        scope: ['HVAC', 'HEPA Box'],
        featured: true
    },

    {
        id: 'p1',
        title: 'Bệnh Viện Đa Khoa Lâm Đồng',
        cat: 'Y Tế',
        img: 'images/anh-du-an/bvld.png',
        client: 'Bệnh Viện Lâm Đồng',
        loc: 'Lâm Đồng',
        scale: '3 Phòng sạch',
        year: '2022',
        desc: 'Cung cấp thiết bị phòng mổ áp lực âm.',
        scope: ['HVAC', 'HEPA Box']
    },

    {
        id: 'p5',
        title: 'Trung Tâm DIAG',
        cat: 'Y Tế',
        img: 'images/anh-du-an/diag.webp',
        client: 'DIAG',
        loc: 'TP.HCM',
        scale: 'Lab xét nghiệm',
        year: '2022',
        desc: 'Lắp đặt thiết bị phòng xét nghiệm.',
        scope: ['Pass Box', 'Air Shower']
    },

    {
        id: 'p6',
        title: 'Bệnh Viện Nhân Dân 115',
        cat: 'Y Tế',
        img: 'images/anh-du-an/115.webp',
        client: 'Bệnh Viện 115',
        loc: 'TP.HCM',
        scale: 'Khu cách ly',
        year: '2021',
        desc: 'Cải tạo phòng áp lực âm.',
        scope: ['Cải tạo', 'HEPA']
    },

    {
        id: 'p7',
        title: 'Bệnh Viện Long Khánh',
        cat: 'Y Tế',
        img: 'images/anh-du-an/bvlk.webp',
        client: 'Bệnh Viện Long Khánh',
        loc: 'Đồng Nai',
        scale: 'Phòng DSA',
        year: '2021',
        desc: 'Thi công phòng DSA và khu can thiệp tim mạch.',
        scope: ['Laminar', 'HVAC', 'Panel']
    },

    {
        id: 'p8',
        title: 'Bệnh Viện Mắt Hải Yến',
        cat: 'Y Tế',
        img: 'images/anh-du-an/hy.webp',
        client: 'Bệnh Viện Mắt Hải Yến',
        loc: 'TP.HCM',
        scale: 'Phòng mổ',
        year: '2021',
        desc: 'Thi công phòng mổ và khu vô trùng.',
        scope: ['Laminar', 'HVAC', 'Medical Gas']
    },

    {
        id: 'p10',
        title: 'Bệnh Viện Quân Y 13',
        cat: 'Y Tế',
        img: 'images/anh-du-an/qy13.webp',
        client: 'Bệnh Viện Quân Y 13',
        loc: 'Bình Định',
        scale: 'Khu phẫu thuật',
        year: '2021',
        desc: 'Thi công HVAC và BMS.',
        scope: ['HVAC', 'BMS']
    },

    {
        id: 'p11',
        title: 'Bệnh Viện 30/4',
        cat: 'Y Tế',
        img: 'images/anh-du-an/bv304.webp',
        client: 'Bệnh Viện 30/4',
        loc: 'TP.HCM',
        scale: 'Khu điều trị',
        year: '2021',
        desc: 'Thi công hệ thống HVAC và AHU Housing.',
        scope: ['HVAC', 'AHU Housing']
    },

    // =========================
    // CÔNG NGHIỆP
    // =========================

    {
        id: 'p2',
        title: 'Nhà Máy D PACK',
        cat: 'Công Nghiệp',
        img: 'images/anh-du-an/dpack.webp',
        client: 'D PACK',
        loc: 'Bình Định',
        scale: 'Nhà máy',
        year: '2023',
        desc: 'Tổng thầu thiết kế thi công phòng sạch.',
        scope: ['Thiết kế', 'Thi công'],
        featured: true
    },

    {
        id: 'p12',
        title: 'Daiwa Plastics',
        cat: 'Công Nghiệp',
        img: 'images/anh-du-an/daiwa.webp',
        client: 'Daiwa Plastics',
        loc: 'TP.HCM',
        scale: 'Nhà máy',
        year: '2022',
        desc: 'Thi công HVAC, Chiller và hệ Panel.',
        scope: ['HVAC', 'Chiller', 'Panel']
    },

    {
        id: 'p13',
        title: 'Trường Thọ',
        cat: 'Công Nghiệp',
        img: 'images/anh-du-an/truongtho.webp',
        client: 'Trường Thọ',
        loc: 'TP.HCM',
        scale: 'Phòng sạch',
        year: '2022',
        desc: 'Thi công phòng sạch công nghiệp.',
        scope: ['Panel', 'HVAC', 'Điện']
    },

    // =========================
    // NĂNG LƯỢNG
    // =========================

    {
        id: 'p21',
        title: 'Nhà Máy Nhiệt Điện Phú Mỹ',
        cat: 'Năng Lượng',
        img: 'images/anh-du-an/phumy.webp',
        client: 'Nhiệt Điện Phú Mỹ',
        loc: 'Bà Rịa - Vũng Tàu',
        scale: 'Nhà máy điện',
        year: '2022',
        desc: 'Cung cấp giải pháp lọc khí công nghiệp cho hệ thống vận hành nhà máy điện.',
        scope: ['Lọc Khí Công Nghiệp', 'HVAC', 'AHU Filter'],
        featured: true,
    },

    // =========================
    // QUỐC TẾ
    // =========================

    {
        id: 'p4',
        title: 'Bệnh Viện Grand Mandalay',
        cat: 'Quốc Tế',
        img: 'images/anh-du-an/gm.webp',
        client: 'Grand Mandalay Hospital',
        loc: 'Myanmar',
        scale: '2 Phòng mổ',
        year: '2022',
        desc: 'Xuất khẩu thiết bị phòng mổ và giải pháp phòng sạch.',
        scope: ['Xuất khẩu', 'Thi công']
    }

];

// --- 2. HÀM TIỆN ÍCH ---
function cleanText(text) { return text ? text.replace(/<[^>]*>?/gm, '') : ''; }

function resolveAssetPath(path) {
    if (!path || /^(https?:)?\/\//.test(path) || path.startsWith('/')) return path;
    return '/' + path;
}

function resolveNewsContentAssets(html) {
    if (!html) return '';
    return html
        .replace(/src="images\//g, 'src="/images/')
        .replace(/src='images\//g, "src='/images/");
}

function applyImageLoadingHints(scope = document) {
    scope.querySelectorAll('img').forEach(img => {
        img.decoding = 'async';
        if (img.classList.contains('img-logo')) {
            img.loading = 'eager';
            img.fetchPriority = 'high';
            return;
        }
        if (!img.hasAttribute('loading')) img.loading = 'lazy';
    });
}

function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
    }
}

function switchView(viewId) {
    const target = document.getElementById(viewId);
    if(!target) return;
    document.querySelectorAll('.page-section').forEach(el => {
        el.classList.remove('active');
        if(el.id !== viewId) el.style.display = 'none';
    });
    target.style.display = 'block';
    setTimeout(() => target.classList.add('active'), 10);
}

// --- 3. LOGIC SẢN PHẨM & MENU ---

function loadProductsScript() {
    if (window.products) return Promise.resolve(window.products);

    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/products-data.js"]');
        if (existing) {
            existing.addEventListener('load', () => resolve(window.products || []), { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = '/products-data.js';
        script.onload = () => resolve(window.products || []);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function hydrateDeferredImages(scope = document) {
    const images = [...scope.querySelectorAll('img[data-src]')];
    if (!images.length) return;

    const loadImage = img => {
        if (!img.dataset.src) return;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    };

    if (!('IntersectionObserver' in window)) {
        images.forEach(loadImage);
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            loadImage(entry.target);
        });
    }, { rootMargin: '120px 0px' });

    images.forEach(img => observer.observe(img));
}

function loadDeferredImagesNow(scope = document) {
    scope.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

function loadNewsScript() {
    if (window.newsData) return Promise.resolve(window.newsData);

    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/news-data.js"]');
        if (existing) {
            existing.addEventListener('load', () => resolve(window.newsData || []), { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = '/news-data.js';
        script.onload = () => resolve(window.newsData || []);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Render Menu Danh Mục (Sidebar)
function renderSidebarMenu() {
    const container = document.getElementById('product-filters');
    if (!container) return;

    const lang = currentLang || 'vi';
    const t = translations[lang];

    // Bộ phiên dịch danh mục từ tiếng Việt gốc sang ngôn ngữ hiện tại
    const catMap = {
        'Lọc Thô': t['cat_pre'] || 'Lọc Thô',
        'Lọc Tinh': t['cat_fine'] || 'Lọc Tinh',
        'Phòng Sạch': t['cat_hepa'] || 'Lọc HEPA / ULPA',
        'Thiết Bị': t['cat_equip'] || 'Thiết bị phòng sạch'
    };

    // Icon tương ứng cho từng danh mục
    const iconsMap = {
        'Lọc Thô': 'fa-wind',
        'Lọc Tinh': 'fa-layer-group',
        'Phòng Sạch': 'fa-virus-slash',
        'Thiết Bị': 'fa-box-open'
    };

    const categories = [...new Set((window.products || []).map(p => p.cat))];
    const currentCat = window.currentFilterCat || 'all';

    // 1. Nút "Tất cả sản phẩm"
    let html = `
        <button onclick="filterProducts('all')" class="category-btn ${currentCat === 'all' ? 'active bg-primary text-white' : 'bg-white text-slate-600'} w-full text-left font-bold py-3 px-4 rounded-lg mb-2 flex justify-between items-center transition border border-gray-100 hover:border-primary hover:text-primary">
            <span>${t['cat_all'] || 'Tất cả sản phẩm'}</span>
            <i class="fas fa-th-large text-xs"></i>
        </button>
    `;

    // 2. Các nút danh mục con
    categories.forEach(cat => {
        const isActive = (currentCat === cat);
        const translatedName = catMap[cat] || cat; // Lấy tên đã dịch
        const icon = iconsMap[cat] || 'fa-chevron-right'; // Lấy icon chuẩn
        
        html += `
            <button onclick="filterProducts('${cat}')" class="category-btn ${isActive ? 'active bg-primary text-white' : 'bg-white text-slate-600'} w-full text-left font-bold py-3 px-4 rounded-lg mb-2 flex justify-between items-center transition border border-gray-100 hover:border-primary hover:text-primary">
                <span>${translatedName}</span>
                <i class="fas ${icon} text-xs"></i>
            </button>
        `;
    });

    container.innerHTML = html;
}

// Lọc và Hiển thị Sản phẩm (Grid View)
// Lọc và Hiển thị Sản phẩm (Grid View)
// Lọc và Hiển thị Sản phẩm (Grid View) - ĐÃ SỬA LỖI SONG NGỮ
async function filterProducts(cat, noScroll = false) {

    await loadProductsScript();

    const products = window.products || [];

    window.currentFilterCat = cat;

    switchView('view-products');

    renderSidebarMenu();

    const list = cat === 'all'
        ? products
        : products.filter(p => p.cat === cat);
    const grid = document.getElementById('products-grid');
    
    if (grid) {
        if (list.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400">Không tìm thấy sản phẩm.</div>';
        } else {
            const lang = currentLang || 'vi'; 
            grid.innerHTML = list.map(p => {
                const pName = (typeof p.name === 'object') ? p.name[lang] : p.name;
                const pDesc = (typeof p.desc === 'object') ? p.desc[lang] : p.desc;
                
                // Dịch thẻ Tag góc trái ảnh
                const catMap = {
                    'Lọc Thô': translations[lang]['cat_pre'] || 'Lọc Thô',
                    'Lọc Tinh': translations[lang]['cat_fine'] || 'Lọc Tinh',
                    'Phòng Sạch': translations[lang]['cat_hepa'] || 'HEPA',
                    'Thiết Bị': translations[lang]['cat_equip'] || 'Thiết Bị'
                };
                const translatedCat = catMap[p.cat] || p.cat;
                
                // Dịch chữ Xem chi tiết
                const txtViewDetail = translations[lang]['btn_view_detail'] || 'Xem chi tiết';

                return `
                <div class="product-card bg-white border rounded-lg overflow-hidden cursor-pointer h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group" onclick="openProductDetail('${p.id}')">
                    
                    <div class="relative w-full aspect-[2400/1792] overflow-hidden bg-white">
                        <img src="${p.img}" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover" alt="${pName}" onerror="this.src='https://placehold.co/2400x1792?text=VAF+Product'">
                        <div class="absolute top-2 left-2">
                            <span class="text-[10px] font-bold text-white bg-primary/90 px-2 py-1 rounded shadow uppercase tracking-wide backdrop-blur-sm">${translatedCat}</span>
                        </div>
                    </div>

                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="font-bold text-lg text-secondary mb-2 leading-snug group-hover:text-primary transition">${pName}</h3>
                        <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">${pDesc}</p>
                        <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-gray-400 group-hover:text-primary transition">
                            <span>${txtViewDetail}</span>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            `}).join('');
        }
        applyImageLoadingHints(grid);
    }

    // Nếu người dùng chủ động bấm thì cuộn chuột lên đầu lưới, nếu do hệ thống auto-đổi ngôn ngữ thì giữ yên
    if (!noScroll) {
        const section = document.getElementById('view-products');
        if(section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
}
// --- CHI TIẾT SẢN PHẨM (FINAL VERSION - FIX LỖI) ---
function openProductDetail(id) {

    history.pushState(
        {},
        "",
        "/product/" + id
    );

    handleRouting();
}

async function executeProductDetail(id) {
    await loadProductsScript();
    window.currentProductId = id;
    const p = (window.products || []).find(x => x.id === id);
    if (!p) {
        history.replaceState({}, "", "/products");

        switchView("view-products");

        return;
    }

    const lang = currentLang;
    const pName = (typeof p.name === 'object') ? p.name[lang] : p.name;
    const pDesc = (typeof p.desc === 'object') ? p.desc[lang] : p.desc;

    document.title = pName + " | VAF";
    const imgEl = document.getElementById('pd-img');
    imgEl.src = "/" + p.img;
    imgEl.alt = pName;
    imgEl.onerror = function () { this.src = 'https://placehold.co/800x600?text=VAF+Product'; };

    document.getElementById('pd-cat').innerText = p.cat;
    const catTag = document.getElementById('pd-cat-tag');
    if (catTag) catTag.innerText = p.cat;

    document.getElementById('pd-name').innerText = pName;
    document.getElementById('pd-name-breadcrumb').innerText = pName;
    document.getElementById('pd-desc').innerText = pDesc;

    if (p.specs && Array.isArray(p.specs)) {
        document.getElementById('pd-specs').innerHTML = p.specs.map(s => {
            if (!s || !Array.isArray(s)) return '';
            const label = (typeof s[0] === 'object') ? s[0][lang] : s[0];
            const value = (typeof s[1] === 'object') ? s[1][lang] : s[1];
            return `
            <tr class="border-b border-gray-100 last:border-0">
                <td class="py-2 pr-4 font-bold text-slate-800 w-[40%] align-top">${label}</td>
                <td class="py-2 text-slate-600 align-top">${value}</td>
            </tr>`;
        }).join('');
    }

    if (p.apps) {
        let appList = Array.isArray(p.apps) ? p.apps : (p.apps[lang] || []);
        document.getElementById('pd-apps').innerHTML = appList.map(app => `
            <li class="marker:text-primary">${app}</li>
        `).join('');
    }

    document.getElementById('pd-table-container').innerHTML = p.table || '<div class="p-4 text-gray-400 italic text-center">Liên hệ để nhận thông số chi tiết.</div>';

    const drawingWrapper = document.getElementById('pd-drawing-wrapper');
    const drawingImg = document.getElementById('pd-drawing-img');

    if (!document.getElementById('custom-size-banner')) {
        const bannerDiv = document.createElement('div');
        bannerDiv.id = 'custom-size-banner';
        bannerDiv.className = 'custom-size-banner mt-8';
        const txtTitle = translations[lang]['prod_custom_title'] || 'Sản xuất kích thước theo yêu cầu';
        const txtDesc = translations[lang]['prod_custom_desc'] || 'Ngoài quy cách chuẩn, VAF nhận sản xuất theo thực tế.';
        const txtBtn = translations[lang]['nav_contact'] || 'Liên hệ';

        bannerDiv.innerHTML = `
            <div class="z-10 relative">
                <h4 class="text-xl font-bold mb-2 flex items-center gap-2 text-white uppercase tracking-wide">
                    <i class="fas fa-ruler-combined text-primary"></i> ${txtTitle}
                </h4>
                <p class="text-gray-300 text-sm mb-4 max-w-3xl">${txtDesc}</p>
                <button onclick="navigate('contact')" class="bg-white text-secondary hover:bg-primary hover:text-white px-6 py-2 rounded font-bold text-sm transition shadow-lg uppercase">
                    ${txtBtn}
                </button>
            </div>
            <i class="fas fa-drafting-compass big-icon"></i>
        `;
        if (drawingWrapper && drawingWrapper.parentNode) drawingWrapper.parentNode.insertBefore(bannerDiv, drawingWrapper);
    }

    if (p.drawing && drawingWrapper && drawingImg) {
        drawingImg.src = p.drawing;
        drawingImg.alt = `${pName} technical drawing`;
        drawingWrapper.classList.remove('hidden');
    } else if (drawingWrapper) {
        drawingWrapper.classList.add('hidden');
    }

    switchView('view-product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/// --- 4. HỆ THỐNG ĐỊNH TUYẾN (ROUTING) TẠO URL RIÊNG ---
function navigate(target) {

    let url = "/";

    switch (target) {

        case "home":
            url = "/";
            break;

        case "about":
            url = "/about";
            break;

        case "products":
            url = "/products";
            break;

        case "projects":
            url = "/projects";
            break;

        case "news":
            url = "/news";
            break;

        case "contact":
            url = "/contact";
            break;

        default:
            url = "/" + target;
            break;
    }

    history.pushState({}, "", url);

    handleRouting();
}

function handleNav(target) {
    navigate(target);
}

// Lắng nghe sự kiện khi URL thay đổi (Bấm nút Back/Forward trình duyệt)
window.addEventListener('popstate', handleRouting);

async function handleRouting() {
    const path = location.pathname;

    let hash = "";

    if (path === "/")
        hash = "home";
    else
        hash = path.substring(1);

    // Nếu không có hash (mới vào web), mặc định là home
    if (!hash) {
        history.replaceState({}, "", "/");
        hash = "home";
    }

    const parts = hash.split("/");

    const page = parts[0];
    const param = parts[1];
    

    // 1. Ẩn menu mobile nếu đang mở
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');

    // 2. Active màu đỏ cho menu trên thanh điều hướng
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
let activeTarget = page;

if (page === "product") activeTarget = "products";
if (page === "project") activeTarget = "projects";

    const activeLink = document.querySelector(`.nav-link[data-target="${activeTarget}"]`);
    if (activeLink) activeLink.classList.add('active');

    // 3. Xử lý hiển thị trang tương ứng
    if (page === 'home') {
        document.title = 'VAF - Nhà Sản Xuất Lọc Khí & Thiết Bị Phòng Sạch Hàng Đầu';
        switchView('view-home');
        hydrateDeferredImages(document.getElementById('view-home') || document);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (page === 'about') {
        document.title = 'Về VAF - Hồ Sơ Năng Lực & Nhà Máy Sản Xuất';
        switchView('view-about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => runCounterAnimation(), 500);
    }
    else if (page === 'products') {
        document.title = 'Danh Mục Sản Phẩm Lọc Khí - VAF';
        switchView('view-products');
        if (!window.currentFilterCat) await filterProducts('all', true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (page === 'product' && param) {
        await executeProductDetail(param);
    }
    else if (page === 'projects') {

        document.title = 'Dự Án Tiêu Biểu & Khách Hàng - VAF';
        switchView('view-projects');
        filterProjects('all'); // <--- Đã sửa thành tên hàm mới
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (page === 'projects-all') {

        document.title = 'Tất Cả Dự Án - VAF';
            
        switchView('view-projects-all');

        renderAllProjects(1);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    else if (page === 'project' && param) {
    executeProjectDetail(param);
}
    else if (page === "news" && param) {
    await executeNewsDetail(param);
}
else if (page === "news") {
    document.title = 'Tin Tức & Kiến Thức Phòng Sạch - VAF';
    switchView('view-news');
    await loadNewsScript();
    renderNewsPage();
    renderSidebarNews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
    else if (page === "news-detail" && param) {
        await executeNewsDetail(param);
    }
    else if (page === 'contact') {
        document.title = 'Liên Hệ Tư Vấn & Báo Giá - VAF';
        switchView('view-contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
// Render Dự án & Tin tức (Giữ nguyên)

}
// Render Dự án & Tin tức (Giữ nguyên)
// --- BỘ LỌC DỰ ÁN ---
function renderProjectFilters(activeCat = 'all') {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    // Tự động gom các ngành nghề đang có trong mảng projects
    const categories = [...new Set(projects.map(p => p.cat))];

    // Nút "Tất cả"
    let html = `<button onclick="filterProjects('all')" class="px-6 py-2 rounded-full font-bold text-sm transition shadow-sm ${activeCat === 'all' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border border-gray-200 hover:text-primary hover:border-primary'}">Tất cả</button>`;

    // Các nút ngành nghề khác
    categories.forEach(cat => {
        html += `<button onclick="filterProjects('${cat}')" class="px-6 py-2 rounded-full font-bold text-sm transition shadow-sm ${activeCat === cat ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border border-gray-200 hover:text-primary hover:border-primary'}">${cat}</button>`;
    });

    filterContainer.innerHTML = html;
}

const projectsPerPage = 9;
let currentPage = 1;

function renderAllProjects(page = 1) {

    const grid =
        document.getElementById('all-projects-grid');

    if (!grid) {
        console.error('Không tìm thấy all-projects-grid');
        return;
    }

    const projectsPerPage = 9;

    currentPage = page;

    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;

    const paginatedProjects =
        projects.slice(start, end);

    grid.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${paginatedProjects.map(p => `
                <div class="bg-white rounded-xl border p-5">

                    <h3 class="font-bold text-lg text-secondary">
                        ${p.title}
                    </h3>

                    <div class="text-sm text-gray-500 mt-2">
                        ${p.client}
                    </div>

                    <div class="text-sm text-gray-400">
                        ${p.loc} • ${p.year}
                    </div>

                </div>
            `).join('')}
        </div>
    `;

    renderPagination();
}

// --- HIỂN THỊ DỰ ÁN ---
function filterProjects(cat) {
    renderProjectFilters(cat); // Đổi màu nút đang chọn
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
        
    const featuredProjects = projects.filter(p => p.featured);

    const filteredProjects =
        cat === 'all'
            ? featuredProjects
            : projects.filter(p => p.cat === cat);
   

    

    if (filteredProjects.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400">Chưa có dự án nào trong danh mục này.</div>';
        return;
    }

    grid.innerHTML = filteredProjects.map(p => `
        <div class="product-card bg-white border rounded-xl overflow-hidden cursor-pointer h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group" onclick="openProjectDetail('${p.id}')">
            <div class="h-56 bg-gray-100 relative overflow-hidden">
                <img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide shadow">${p.cat}</div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg text-secondary mb-2 group-hover:text-primary transition leading-snug line-clamp-2">${p.title}</h3>
                <p class="text-sm text-gray-500 mb-2 leading-5">${p.desc}</p>
               <div class="mt-2 pt-2 border-t border-gray-100 text-xs text-slate-500 space-y-0">
    <p><strong>Khách hàng:</strong> ${p.client}</p>
    <p><strong>Địa điểm:</strong> ${p.loc}</p>
    <p><strong>Năm:</strong> ${p.year}</p>
</div>
            </div>
        </div>`).join('');
    applyImageLoadingHints(grid);
}

function showAllProjects() {

    const grid = document.getElementById('projects-grid');

    grid.innerHTML = projects.map(p => `
        <div class="project-row border-b py-3">

            <div class="font-bold text-secondary">
                ${p.title}
            </div>

            <div class="text-sm text-gray-500">
                ${p.client} • ${p.loc} • ${p.year}
            </div>

        </div>
    `).join('');

}


function renderHomeNews() {
    const container = document.getElementById('home-news-slider-content');
    const news = window.newsData || [];
    if (!container || !news.length) return;
    container.innerHTML = news.map(n => `
        <div class="swiper-slide h-auto"><article class="bg-white h-full rounded-xl overflow-hidden border hover:shadow-lg transition cursor-pointer flex flex-col" onclick="openNewsDetail('${n.id}')">
            <div class="h-48 relative overflow-hidden"><img src="${resolveAssetPath(n.img)}?w=600" alt="${n.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-500 hover:scale-110"></div>
            <div class="p-5 flex-grow flex flex-col"><h3 class="font-bold text-lg mb-2 text-secondary leading-tight line-clamp-2">${n.title}</h3></div>
        </article></div>`).join('');
    applyImageLoadingHints(container);
    if (window.homeNewsSwiper) window.homeNewsSwiper.update();
}

// --- CẤU HÌNH PHÂN TRANG ---
const NEWS_PER_PAGE = 6; // Số bài viết mỗi trang
let currentNewsPage = 1; // Trang hiện tại

// 1. Hàm Render Tin Tức có Phân Trang
function renderNewsPage(page = 1) {
    const container = document.getElementById('news-page-grid');
    const paginationContainer = document.getElementById('news-pagination');
    const news = window.newsData || [];
    
    if (!container || !news.length) return;

    // Tính toán cắt mảng dữ liệu
    const totalItems = news.length;
    const totalPages = Math.ceil(totalItems / NEWS_PER_PAGE);
    
    // Đảm bảo trang hợp lệ
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentNewsPage = page;

    // Vị trí bắt đầu và kết thúc
    const start = (page - 1) * NEWS_PER_PAGE;
    const end = start + NEWS_PER_PAGE;
    const itemsToShow = news.slice(start, end);

    // A. Render Bài viết
    container.innerHTML = itemsToShow.map(n => `
        <article class="news-grid-card group cursor-pointer h-full flex flex-col" onclick="openNewsDetail('${n.id}')">
            <div class="h-56 relative overflow-hidden">
                <img src="${resolveAssetPath(n.img)}?w=800" alt="${n.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" onerror="this.src='https://placehold.co/600x400?text=VAF+News'">
                <div class="absolute top-4 left-4">
                    <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">${n.cat}</span>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span><i class="far fa-calendar-alt mr-1"></i> ${n.date}</span>
                </div>
                <h3 class="font-bold text-xl text-secondary mb-3 leading-snug group-hover:text-primary transition line-clamp-2">
                    ${n.title}
                </h3>
                <p class="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                    ${cleanText(n.desc)}
                </p>
                <div class="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center">
                    <span class="text-primary font-bold text-sm group-hover:underline">Đọc tiếp</span>
                    <i class="fas fa-long-arrow-alt-right text-primary transform group-hover:translate-x-2 transition"></i>
                </div>
            </div>
        </article>
    `).join('');
    applyImageLoadingHints(container);

    // B. Render Nút Phân Trang
    renderPaginationControls(totalPages, page);
}

// --- HÀM RENDER SIDEBAR TIN TỨC (CỘT PHẢI) ---
function renderSidebarNews() {
    const container = document.getElementById('sidebar-featured');
    const news = window.newsData || [];
    if (!container || !news.length) return;

    // Lấy 5 bài viết bất kỳ (hoặc lấy 5 bài đầu tiên làm tin nổi bật)
    // Ở đây mình lấy 5 bài đầu tiên cho đơn giản
    const featuredNews = news.slice(0, 5); 

    container.innerHTML = featuredNews.map(n => `
        <div class="flex gap-4 group cursor-pointer border-b border-gray-100 pb-4 last:border-0 last:pb-0" onclick="openNewsDetail('${n.id}')">
            <div class="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
                <img src="${resolveAssetPath(n.img)}?w=200" alt="${n.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" onerror="this.src='https://placehold.co/200?text=News'">
            </div>
            
            <div class="flex-grow flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-bold text-primary uppercase tracking-wide mb-1 block">${n.cat}</span>
                    <h4 class="text-sm font-bold text-slate-700 leading-snug group-hover:text-primary transition line-clamp-2">
                        ${n.title}
                    </h4>
                </div>
                <div class="text-[11px] text-gray-400 mt-1">
                    <i class="far fa-clock mr-1"></i> ${n.date}
                </div>
            </div>
        </div>
    `).join('');
    applyImageLoadingHints(container);
}

// 2. Hàm tạo nút bấm (1, 2, 3, Next, Prev)
function renderPaginationControls(totalPages, currentPage) {
    const container = document.getElementById('news-pagination');
    if (!container) return;
    
    if (totalPages <= 1) {
        container.innerHTML = ''; // Ít bài quá thì ẩn phân trang
        return;
    }

    let html = '';

    // Nút Previous
    html += `<button onclick="renderNewsPage(${currentPage - 1})" class="w-10 h-10 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition flex items-center justify-center ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}"><i class="fas fa-chevron-left"></i></button>`;

    // Các nút số trang
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100';
        html += `<button onclick="renderNewsPage(${i})" class="w-10 h-10 rounded-full border font-bold transition flex items-center justify-center ${activeClass}">${i}</button>`;
    }

    // Nút Next
    html += `<button onclick="renderNewsPage(${currentPage + 1})" class="w-10 h-10 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}"><i class="fas fa-chevron-right"></i></button>`;

    container.innerHTML = html;
    
    // Cuộn lên đầu danh sách tin tức mỗi khi chuyển trang
    const newsSection = document.getElementById('news-page-grid');
    if(newsSection && currentPage !== 1) { // Chỉ cuộn nếu không phải lần load đầu
         const y = newsSection.getBoundingClientRect().top + window.pageYOffset - 150;
         window.scrollTo({top: y, behavior: 'smooth'});
    }
}

function openNewsDetail(id) {
    history.pushState(
        {},
        "",
        "/news/" + id
    );

    handleRouting();
}

async function executeNewsDetail(id) {
    await loadNewsScript();
    const n = (window.newsData || []).find(x => x.id === id);
    if (!n) {
        history.replaceState({}, "", "/news");

        switchView("view-news");

        return;
    }

    document.title = n.title + " | Tin Tức VAF";
    document.getElementById('nd-cat').innerText = n.cat;
    document.getElementById('nd-date').innerText = n.date;
    document.getElementById('nd-title').innerText = n.title;
    document.getElementById('nd-desc').innerText = cleanText(n.desc);
    const newsImage = document.getElementById("nd-img");
    newsImage.src = resolveAssetPath(n.img);
    newsImage.alt = n.title;
    const newsContent = document.getElementById('nd-content');
    newsContent.innerHTML = resolveNewsContentAssets(n.content);
    applyImageLoadingHints(newsContent);
    switchView('view-news-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openProjectDetail(id) {
    history.pushState(
        {},
        "",
        "/project/" + id
    );

    handleRouting();
}

function executeProjectDetail(id) {
    const p = projects.find(x => x.id === id);
    if (!p) {
        history.replaceState({}, "", "/projects");

        switchView("view-projects");

        return;
    }

    document.title = "Dự Án: " + p.title + " | VAF";
    document.getElementById('pjd-title').innerText = p.title;
    document.getElementById('pjd-desc').innerText = p.desc;
    const projectImage = document.getElementById('pjd-img');
    projectImage.src = p.img;
    projectImage.alt = p.title;
    document.getElementById('pjd-client').innerText = p.client;
    document.getElementById('pjd-loc').innerText = p.loc;
    document.getElementById('pjd-scale').innerText = p.scale;
    document.getElementById('pjd-scope').innerHTML = p.scope.map(s => `<li>${s}</li>`).join('');
    switchView('view-project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 5. KHỞI TẠO ---
document.addEventListener('DOMContentLoaded', () => {
    try {
        handleRouting();
    } catch (e) { console.error(e); }

    const prepareBelowFoldImages = () => applyImageLoadingHints();
    if ('requestIdleCallback' in window) requestIdleCallback(prepareBelowFoldImages, { timeout: 2000 });
    else setTimeout(prepareBelowFoldImages, 1200);

    hydrateDeferredImages();
    lazyInitSwipers();
});    

function runWhenNearViewport(element, callback) {
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
        callback();
        return;
    }

    const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        observer.disconnect();
        callback();
    }, { rootMargin: '400px 0px' });

    observer.observe(element);
}

let swiperAssetPromise;
function loadSwiperAssets() {
    if (window.Swiper) return Promise.resolve();
    if (swiperAssetPromise) return swiperAssetPromise;

    swiperAssetPromise = new Promise((resolve, reject) => {
        if (!document.querySelector('link[data-swiper-css]')) {
            const css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
            css.dataset.swiperCss = 'true';
            document.head.appendChild(css);
        }

        const existingScript = document.querySelector('script[data-swiper-js]');
        if (existingScript) {
            existingScript.addEventListener('load', resolve, { once: true });
            existingScript.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
        script.async = true;
        script.dataset.swiperJs = 'true';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    return swiperAssetPromise;
}

function lazyInitSwipers() {
    const swiperEl = document.querySelector('.news-swiper-home');
    runWhenNearViewport(swiperEl, async () => {
        if (window.homeNewsSwiper) return;
        await loadNewsScript();
        renderHomeNews();
        await loadSwiperAssets();
        window.homeNewsSwiper = new Swiper('.news-swiper-home', {
            slidesPerView: 1, spaceBetween: 24, loop: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.home-slider-next', prevEl: '.home-slider-prev' },
            breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
    });

    // KHỞI TẠO SLIDER ĐỐI TÁC KHI GẦN TỚI SECTION ĐỂ GIẢM MAIN THREAD BAN ĐẦU
    const partnerSwiperEl = document.querySelector('.partner-swiper');
    runWhenNearViewport(partnerSwiperEl, async () => {
        if (window.partnerSwiper) return;
        await loadSwiperAssets();
        window.partnerSwiper = new Swiper('.partner-swiper', {
            // Số lượng logo hiển thị
            slidesPerView: 2, 
            spaceBetween: 30,
            
            // QUAN TRỌNG: Vòng lặp vô tận
            loop: true,
            
            // Giữ vòng lặp nhẹ hơn để mobile không phải clone quá nhiều logo lúc đầu.
            loopAdditionalSlides: 8, 
            
            // Tốc độ trượt: 600ms (Trượt dứt khoát, không lề mề)
            speed: 600, 

            // Cấu hình tự động chạy
            autoplay: {
                delay: 1000,                 // Nghỉ 1 giây rồi trượt tiếp
                disableOnInteraction: false, // Tương tác xong vẫn chạy
                pauseOnMouseEnter: true,     // Rê chuột vào thì DỪNG lại
            },
            
            // Mũi tên điều hướng
            navigation: {
                nextEl: '.partner-next',
                prevEl: '.partner-prev',
            },
            
            // Responsive
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 5, // PC hiện 5 logo
                    spaceBetween: 60,
                },
            }
        });
    });
}

// Mobile menu & Scroll effect
document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if(nav) window.scrollY > 10 ? nav.classList.add('py-0') : nav.classList.remove('py-0');
});
// --- HÀM ĐỔI NGÔN NGỮ ---


/* ================================================================
   ANIMATION ĐẾM SỐ CHO TRANG GIỚI THIỆU
================================================================ */
function runCounterAnimation() {
    const counters = document.querySelectorAll('.count-up');
    const speed = 200; // Tốc độ đếm (càng nhỏ càng nhanh)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Tính bước nhảy
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20); // Gọi lại hàm sau 20ms
            } else {
                counter.innerText = target; // Đảm bảo số cuối cùng chính xác
            }
        };
        updateCount();
    });
}

// --- CHỨC NĂNG COMING SOON ---

// 1. Mở Popup
function showComingSoon() {
    const modal = document.getElementById('coming-soon-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// 2. Đóng Popup
function closeComingSoon() {
    const modal = document.getElementById('coming-soon-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

/* =====================================================================
   XỬ LÝ GỬI FORM LIÊN HỆ (WEB3FORMS AJAX)
===================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vaf-contact-form');
    const result = document.getElementById('form-result');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn chặn hành vi load lại trang mặc định
            
            // Lấy ngôn ngữ hiện tại để báo lỗi/thành công cho đúng
            const lang = currentLang || 'vi';
            const txtSending = lang === 'vi' ? "Đang gửi yêu cầu..." : "Sending request...";
            const txtSuccess = lang === 'vi' ? "Gửi yêu cầu thành công! Chuyên gia VAF sẽ liên hệ lại sớm nhất." : "Request sent successfully! Our experts will contact you soon.";
            const txtError = lang === 'vi' ? "Có lỗi xảy ra, vui lòng kiểm tra lại!" : "Something went wrong, please try again!";

            // Hiển thị trạng thái đang gửi
            result.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> ${txtSending}`;
            result.classList.remove('hidden', 'text-green-500', 'text-red-500');
            result.classList.add('text-primary'); // Trạng thái chờ màu đỏ VAF

            // Thu thập dữ liệu
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            // Gửi dữ liệu qua API
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    // Thành công
                    result.innerHTML = `<i class="fas fa-check-circle mr-2"></i> ${txtSuccess}`;
                    result.classList.replace('text-primary', 'text-green-500'); // Đổi sang màu xanh lá
                } else {
                    // Thất bại từ Server
                    console.log(response);
                    result.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i> ${json.message}`;
                    result.classList.replace('text-primary', 'text-red-500');
                }
            })
            .catch(error => {
                // Lỗi mạng
                console.log(error);
                result.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i> ${txtError}`;
                result.classList.replace('text-primary', 'text-red-500');
            })
            .then(function() {
                form.reset(); // Xóa trắng form sau khi gửi
                // Tự động ẩn thông báo sau 7 giây
                setTimeout(() => {
                    result.classList.add('hidden');
                }, 7000);
            });
        });
    }


});
