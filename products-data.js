/* ================================================================
   KHO DỮ LIỆU SẢN PHẨM VAF - CATALOG 2024
   Dữ liệu chi tiết từng mã sản phẩm
================================================================ */

const products = [
    // --- 1. LỌC THÔ (COARSE FILTERS) ---
    //vroll
    {
    id: 'v-roll', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vroll.webp', 
        
        name: { 
            vi: 'V-Roll (Bông lọc bụi)', 
            en: 'V-Roll (Pre-Filter Media Roll)' 
        },
        desc: { 
            vi: 'Bông lọc sơ cấp dạng cuộn, vật liệu sợi tổng hợp chịu nước.', 
            en: 'Roll-type primary air filter media made of water-resistant synthetic fiber.' 
        },

        apps: {
            vi: ['Hệ thống HVAC dân dụng', 'Lọc cửa gió hồi'],
            en: ['Residential HVAC systems', 'Return air grille filtration']
        },

        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Efficiency Class'}, 'G2, G3, G4 (EN779)'],
            [{vi: 'Vật liệu', en: 'Filter Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Nhiệt độ làm việc tối đa', en: 'Max. Operating Temperature'}, '70°C']
        ],
        table: `<table class="tech-table"><thead><tr><th>Mã SP</th><th>Cấp độ</th><th>Quy cách (m)</th><th>Độ dày</th><th>Chênh áp</th></tr></thead><tbody><tr><td>V-Roll 75</td><td>G2</td><td>2 x 20</td><td>10mm</td><td>28 Pa</td></tr><tr><td>V-Roll 85</td><td>G3</td><td>2 x 20</td><td>15mm</td><td>30 Pa</td></tr><tr><td>V-Roll 92</td><td>G4</td><td>2 x 20</td><td>20mm</td><td>40 Pa</td></tr></tbody></table>`
    },
    //vf
    {
        id: 'v-f', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vf.webp',

        name: {
            vi: 'V-F (Lọc trần phòng sơn)',
            en: 'V-F (Ceiling Filter)'
        },
        desc: {
            vi: 'Lọc trần phòng sơn có keo giữ bụi, hiệu suất M5-M6.',
            en: 'Ceiling filter with tackifier for spray booths, efficiency M5-M6.'
        },
        apps: {
            vi: ['Hệ thống lọc phòng sơn', 'Phòng sấy'],
            en: ['Spray booth filtration systems', 'Drying ovens']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Efficiency Class'}, 'M5, M6 (EN779)'],
            [{vi: 'Vật liệu', en: 'Media'}, {vi: 'Sợi tổng hợp + Keo', en: 'Synthetic fiber + Tackifier'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '70°C']
        ],
        table: `<table class="tech-table"><thead><tr><th>Mã SP</th><th>Cấp độ</th><th>Quy cách (m)</th><th>Độ dày</th><th>Chênh áp</th></tr></thead><tbody><tr><td>V-F560</td><td>M5</td><td>2 x 20</td><td>20mm</td><td>50 Pa</td></tr><tr><td>V-F600</td><td>M6</td><td>2 x 20</td><td>25mm</td><td>55 Pa</td></tr></tbody></table>`
    },
    //vr28
    {
        id: 'v-r28', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vr28.webp',

        name: {
            vi: 'V-R28 (Lọc sàn phòng sơn)',
            en: 'V-R28 (Paint Stop / Floor Filter)'
        },
        desc: {
            vi: 'Lọc sợi thủy tinh thu hồi bụi sơn sàn, hiệu quả 90-95%.',
            en: 'Glass fiber paint mist arrestor for spray booth floors, arrestance 90-95%.'
        },
        apps: {
            vi: ['Hệ thống phun sơn tự động', 'Hút khí thải phòng sơn'],
            en: ['Automatic spray painting systems', 'Spray booth exhaust air']
        },
        specs: [
            [{vi: 'Vật liệu', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Khả năng giữ bụi', en: 'Dust Holding Capacity'}, '3500 g/m²'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table"><thead><tr><th>Mã SP</th><th>Kích thước</th><th>Lưu lượng</th><th>Vận tốc</th></tr></thead><tbody><tr><td>V-R28</td><td>2m x 20m x 50mm</td><td>3600 m³/h</td><td>2.5 m/s</td></tr></tbody></table>`
    },
    //vra
    {
        id: 'v-ra', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vra.webp',

        name: {
            vi: 'V-RA (Lọc lưới kim loại)',
            en: 'V-RA (Metal Mesh Filter)'
        },
        desc: {
            vi: 'Lọc lưới nhôm/inox tái sử dụng vĩnh viễn, chịu nhiệt cao.',
            en: 'Permanent washable Aluminum/Stainless Steel mesh filter, high temperature resistance.'
        },
        apps: {
            vi: ['Hệ thống HVAC', 'Môi trường khắc nghiệt, độ ẩm cao', 'Lọc dầu mỡ, khói bụi'],
            en: ['HVAC Systems', 'Harsh environments, high humidity', 'Oil mist and grease filtration']
        },
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, {vi: 'Nhôm / Inox', en: 'Aluminum / Stainless Steel'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '350°C'],
            [{vi: 'Vệ sinh', en: 'Cleaning'}, {vi: 'Rửa nước', en: 'Washable'}]
        ],
        table: `<table class="tech-table">
    <thead>
        <th>Mã sản phẩm</th>
        <th>Quy cách</th>
        <th>Lưu lượng</th>
        <th>Hiệu suất lọc trung bình (%)</th>
        <th>Chênh áp đầu (Pa)</th>
        <th>Diện tích lọc (m²)</th>
    </thead>
    <tr>
        <td>VRA25592592</td>
        <td>592x592x25</td>
        <td>3400</td>
        <td>65-79.9</td>
        <td>30</td>
        <td>0.35</td>
    </tr>
    <tr>
        <td>VRA25592490</td>
        <td>592x490x25</td>
        <td>2800</td>
        <td>65-79.9</td>
        <td>30</td>
        <td>0.29</td>
    </tr>
    <tr>
        <td>VRA25592287</td>
        <td>592x287x25</td>
        <td>1700</td>
        <td>65-79.9</td>
        <td>30</td>
        <td>0.17</td>
    </tr>
    <tr>
        <td>VRA46592592</td>
        <td>592x592x46</td>
        <td>3400</td>
        <td>80-89.9</td>
        <td>45</td>
        <td>0.35</td>
    </tr>
    <tr>
        <td>VRA46592490</td>
        <td>592x490x46</td>
        <td>2800</td>
        <td>80-89.9</td>
        <td>45</td>
        <td>0.29</td>
    </tr>
    <tr>
        <td>VRA46592287</td>
        <td>592x287x46</td>
        <td>1700</td>
        <td>80-89.9</td>
        <td>45</td>
        <td>0.17</td>
    </tr>
    <tr>
        <td>VRA100592592</td>
        <td>592x592x100</td>
        <td>3400</td>
        <td>≥90</td>
        <td>55</td>
        <td>0.35</td>
    </tr>
    <tr>
        <td>VRA100592490</td>
        <td>592x490x100</td>
        <td>2800</td>
        <td>≥90</td>
        <td>55</td>
        <td>0.29</td>
    </tr>
    <tr>
        <td>VRA100592287</td>
        <td>592x287x100</td>
        <td>1700</td>
        <td>≥90</td>
        <td>55</td>
        <td>0.17</td>
    </tr>
</table>`
    },
    //vr
    {
        id: 'v-r', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vr.webp',

        name: {
            vi: 'V-R (Lọc tấm giặt được)',
            en: 'V-R (Washable Panel Filter)'
        },
        desc: {
            vi: 'Lọc sơ cấp dạng tấm (Panel) có thể vệ sinh, khung kim loại.',
            en: 'Washable primary panel filter with metal frame.'
        },
        apps: {
            vi: ['Hệ thống HVAC, Bệnh viện', 'Công nghiệp thực phẩm, điện tử', 'Lọc thô cửa gió'],
            en: ['HVAC Systems, Hospitals', 'Food & Beverage, Electronics', 'Air intake pre-filtration']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'G2, G3, G4 (EN779)'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Khung', en: 'Frame'}, {vi: 'Nhôm / Tôn mạ kẽm / Inox', en: 'Alu / GI / SS304'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
    <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
    <tr>
        <td>V-R 75</td>
        <td>592x592x15</td>
        <td>3400</td>
        <td>G2</td>
        <td>2.5</td>
        <td>80</td>
        <td>250</td>
        <td>0.35</td>
    </tr>
    <tr>
        <td>V-R 75</td>
        <td>592x490x15</td>
        <td>2800</td>
        <td>G2</td>
        <td>2.5</td>
        <td>80</td>
        <td>250</td>
        <td>0.29</td>
    </tr>
    <tr>
        <td>V-R 75</td>
        <td>592x287x15</td>
        <td>1700</td>
        <td>G2</td>
        <td>2.5</td>
        <td>80</td>
        <td>250</td>
        <td>0.17</td>
    </tr>
    <tr>
        <td>V-R 85</td>
        <td>592x529x20</td>
        <td>3400</td>
        <td>G3</td>
        <td>2.5</td>
        <td>95</td>
        <td>250</td>
        <td>0.35</td>
    </tr>
    <tr>
        <td>V-R 85</td>
        <td>592x490x20</td>
        <td>2800</td>
        <td>G3</td>
        <td>2.5</td>
        <td>95</td>
        <td>250</td>
        <td>0.29</td>
    </tr>
    <tr>
        <td>V-R 85</td>
        <td>592x287x20</td>
        <td>1700</td>
        <td>G3</td>
        <td>2.5</td>
        <td>95</td>
        <td>250</td>
        <td>0.17</td>
    </tr>
    <tr>
        <td>V-R 92</td>
        <td>592x592x25</td>
        <td>3400</td>
        <td>G4</td>
        <td>2.5</td>
        <td>105</td>
        <td>250</td>
        <td>0.35</td>
    </tr>
    <tr>
        <td>V-R 92</td>
        <td>592x490x25</td>
        <td>2800</td>
        <td>G4</td>
        <td>2.5</td>
        <td>105</td>
        <td>250</td>
        <td>0.29</td>
    </tr>
    <tr>
        <td>V-R 92</td>
        <td>592x287x25</td>
        <td>1700</td>
        <td>G4</td>
        <td>2.5</td>
        <td>105</td>
        <td>250</td>
        <td>0.17</td>
    </tr>
</table>`
    },
    //vrw
    {
        id: 'v-rw', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vrw.webp',

        name: {
            vi: 'V-RW (Lọc tấm giặt được)',
            en: 'V-RW (Washable Pleated Panel Filter)'
        },
        desc: {
            vi: 'Lọc sơ cấp dạng tấm gấp nếp (Wave) giúp tăng diện tích lọc.',
            en: 'Washable primary filter with pleated media (Wave form) for higher surface area.'
        },
        apps: {
            vi: ['Hệ thống HVAC lưu lượng lớn', 'Bảo vệ lọc tinh phía sau'],
            en: ['High airflow HVAC systems', 'Pre-filter for fine filters']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'G3, G4'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Khung', en: 'Frame'}, 'Nhôm / GI / SS304'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>V-RW 85</td>
        <td>592x592x46</td>
        <td>3400</td>
        <td>G3</td>
        <td>2.5</td>
        <td>65</td>
        <td>250</td>
        <td>0.60</td>
    </tr>
    <tr>
        <td>V-RW 85</td>
        <td>592x490x46</td>
        <td>2800</td>
        <td>G3</td>
        <td>2.5</td>
        <td>65</td>
        <td>250</td>
        <td>0.50</td>
    </tr>
    <tr>
        <td>V-RW 85</td>
        <td>592x287x46</td>
        <td>1700</td>
        <td>G3</td>
        <td>2.5</td>
        <td>65</td>
        <td>250</td>
        <td>0.30</td>
    </tr>
    <tr>
        <td>V-RW 92</td>
        <td>592x592x46</td>
        <td>3400</td>
        <td>G4</td>
        <td>2.5</td>
        <td>85</td>
        <td>250</td>
        <td>0.60</td>
    </tr>
    <tr>
        <td>V-RW 92</td>
        <td>592x490x46</td>
        <td>2800</td>
        <td>G4</td>
        <td>2.5</td>
        <td>85</td>
        <td>250</td>
        <td>0.50</td>
    </tr>
    <tr>
        <td>V-RW 92</td>
        <td>592x287x46</td>
        <td>1700</td>
        <td>G4</td>
        <td>2.5</td>
        <td>85</td>
        <td>250</td>
        <td>0.30</td>
    </tr>
</table>
        </table>`
    },
    //vrz
    {
        id: 'v-rz', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vrz.webp',

        name: {
            vi: 'V-RZ (Lọc tấm giặt được)',
            en: 'V-RZ (Washable Deep Pleat Filter)'
        },
        desc: {
            vi: 'Lọc sơ cấp dạng tấm dày (96mm) giúp tăng lưu lượng gió và độ bền.',
            en: 'Washable primary filter with deep pleats (96mm) for higher airflow and durability.'
        },
        apps: {
            vi: ['Hệ thống HVAC, Bệnh viện', 'Lọc sơ cấp cho AHU'],
            en: ['HVAC Systems, Hospitals', 'Pre-filter for AHU']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'G2, G3, G4 (EN779)'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Khung', en: 'Frame'}, 'Nhôm / GI / SS304'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>V-RZ 85</td>
        <td>592x592x96</td>
        <td>3400</td>
        <td>G3</td>
        <td>2.5</td>
        <td>55</td>
        <td>250</td>
        <td>1.30</td>
    </tr>
    <tr>
        <td>V-RZ 85</td>
        <td>592x490x96</td>
        <td>2800</td>
        <td>G3</td>
        <td>2.5</td>
        <td>55</td>
        <td>250</td>
        <td>1.09</td>
    </tr>
    <tr>
        <td>V-RZ 85</td>
        <td>592x287x96</td>
        <td>1700</td>
        <td>G3</td>
        <td>2.5</td>
        <td>55</td>
        <td>250</td>
        <td>0.66</td>
    </tr>
    <tr>
        <td>V-RZ 92</td>
        <td>592x592x96</td>
        <td>3400</td>
        <td>G4</td>
        <td>2.5</td>
        <td>80</td>
        <td>250</td>
        <td>1.30</td>
    </tr>
    <tr>
        <td>V-RZ 92</td>
        <td>592x490x96</td>
        <td>2800</td>
        <td>G4</td>
        <td>2.5</td>
        <td>80</td>
        <td>250</td>
        <td>1.09</td>
    </tr>
    <tr>
        <td>V-RZ 92</td>
        <td>592x287x96</td>
        <td>1700</td>
        <td>G4</td>
        <td>2.5</td>
        <td>80</td>
        <td>250</td>
        <td>0.66</td>
    </tr>
        </table>`
    },
    //vdi
    {
        id: 'v-di', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vdi.webp',

        name: {
            vi: 'V-DI (Lọc thô khung giấy)',
            en: 'V-DI (Disposable Cardboard Filter)'
        },
        desc: {
            vi: 'Lọc thô dùng một lần, khung giấy, giải pháp kinh tế.',
            en: 'Disposable primary filter, moisture-resistant cardboard frame, economical solution.'
        },
        apps: {
            vi: ['Hệ thống HVAC tòa nhà', 'Lọc cửa gió hồi', 'Thông gió nhà bếp'],
            en: ['Building HVAC systems', 'Return air grilles', 'Kitchen ventilation']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'G4 (EN779)'],
            [{vi: 'Khung', en: 'Frame'}, {vi: 'Giấy cứng chịu nước', en: 'Beverage board / Cardboard'}],
            [{vi: 'Lưới bảo vệ', en: 'Support Grid'}, {vi: 'Lưới kẽm', en: 'Galvanized wire'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '70°C']
        ],
        table: `<table class="tech-table">
    <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
    <tr>
        <td>V-Di 300</td>
        <td>594x594x44</td>
        <td>3400</td>
        <td>G4</td>
        <td>2.5</td>
        <td>75</td>
        <td>250</td>
        <td>1.50</td>
    </tr>
    <tr>
        <td>V-Di 300</td>
        <td>594x492x44</td>
        <td>2800</td>
        <td>G4</td>
        <td>2.5</td>
        <td>75</td>
        <td>250</td>
        <td>1.24</td>
    </tr>
    <tr>
        <td>V-Di 300</td>
        <td>594x289x44</td>
        <td>1700</td>
        <td>G4</td>
        <td>2.5</td>
        <td>75</td>
        <td>250</td>
        <td>0.73</td>
    </tr>
    <tr>
        <td>V-Di 300</td>
        <td>594x594x95</td>
        <td>4200</td>
        <td>G4</td>
        <td>3.2</td>
        <td>89</td>
        <td>250</td>
        <td>2.67</td>
    </tr>
    <tr>
        <td>V-Di 300</td>
        <td>594x289x95</td>
        <td>2100</td>
        <td>G4</td>
        <td>3.2</td>
        <td>89</td>
        <td>250</td>
        <td>1.29</td>
    </tr>
    <tr>
        <td>V-Di 100</td>
        <td>594x594x44</td>
        <td>3400</td>
        <td>G4</td>
        <td>2.5</td>
        <td>85</td>
        <td>250</td>
        <td>0.97</td>
    </tr>
    <tr>
        <td>V-Di 100</td>
        <td>594x492x44</td>
        <td>2800</td>
        <td>G4</td>
        <td>2.5</td>
        <td>85</td>
        <td>250</td>
        <td>0.80</td>
    </tr>
    <tr>
        <td>V-Di 100</td>
        <td>594x287x44</td>
        <td>1700</td>
        <td>G4</td>
        <td>2.5</td>
        <td>85</td>
        <td>250</td>
        <td>0.47</td>
    </tr>
    <tr>
        <td>V-Di 100</td>
        <td>594x594x95</td>
        <td>4200</td>
        <td>G4</td>
        <td>3.2</td>
        <td>98</td>
        <td>250</td>
        <td>1.97</td>
    </tr>
    <tr>
        <td>V-Di 100</td>
        <td>594x289x95</td>
        <td>2100</td>
        <td>G4</td>
        <td>3.2</td>
        <td>98</td>
        <td>250</td>
        <td>0.96</td>
    </tr>
</table>`
    },
    //vht
    {
        id: 'v-ht', 
        cat: 'Lọc Thô',
        img: 'images/san-pham/vht.webp',

        name: {
            vi: 'V-HT (Lọc thô chịu nhiệt)',
            en: 'V-HT (High Temp Primary Filter)'
        },
        desc: {
            vi: 'Lọc sơ cấp chịu nhiệt 250°C chuyên dụng cho lò sấy.',
            en: 'High temperature resistant (250°C) primary filter for drying ovens.'
        },
        apps: {
            vi: ['Hệ thống lò sấy sơn', 'Sấy thực phẩm', 'Công nghiệp luyện kim'],
            en: ['Paint drying ovens', 'Food drying', 'Metallurgy industry']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'G3, G4'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Khung', en: 'Frame'}, 'GI / SS304'],
            [{vi: 'Nhiệt độ giới hạn', en: 'Max. Temp'}, '250°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  (EN779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>V-HT250</td>
        <td>592x592x25</td>
        <td>3400</td>
        <td>G3</td>
        <td>2.5</td>
        <td>55</td>
        <td>250</td>
        <td>0.36</td>
    </tr>
    <tr>
        <td>V-HT250</td>
        <td>592x490x25</td>
        <td>2800</td>
        <td>G3</td>
        <td>2.5</td>
        <td>55</td>
        <td>250</td>
        <td>0.30</td>
    </tr>
    <tr>
        <td>V-HT250</td>
        <td>592x287x25</td>
        <td>1700</td>
        <td>G3</td>
        <td>2.5</td>
        <td>55</td>
        <td>250</td>
        <td>0.18</td>
    </tr>
        </table>`
    },

    // --- 2. LỌC TINH (FINE FILTERS) ---
    //vpm5
    {
        id: 'v-pakm5', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vpm5.webp',

        name: {
            vi: 'V-PAK M5 (Túi lọc khí)',
            en: 'V-PAK M5 (Bag Filter)'
        },
        desc: {
            vi: 'Lọc túi (Bag filter) hiệu suất M5, khả năng chứa bụi lớn, độ bền cao.',
            en: 'M5 efficiency bag filter, high dust holding capacity, durable construction.'
        },
        apps: {
            vi: ['Môi trường độ ẩm cao', 'Hệ thống HVAC tòa nhà', 'Nhà máy nhiệt điện'],
            en: ['High humidity environments', 'Commercial HVAC systems', 'Thermal power plants']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'M5 (EN779) / ePM10 50%'],
            [{vi: 'Số túi', en: 'No. of Pockets'}, '3 - 10'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Số túi</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  (EN779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>VP160</td>
        <td>592x592x530</td>
        <td>8</td>
        <td>3400</td>
        <td>M5</td>
        <td>2.5</td>
        <td>55</td>
        <td>450</td>
        <td>5.68</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x490x530</td>
        <td>6</td>
        <td>2800</td>
        <td>M5</td>
        <td>2.5</td>
        <td>55</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x287x530</td>
        <td>4</td>
        <td>1700</td>
        <td>M5</td>
        <td>2.5</td>
        <td>55</td>
        <td>450</td>
        <td>2.84</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x592x530</td>
        <td>6</td>
        <td>3400</td>
        <td>M5</td>
        <td>2.5</td>
        <td>65</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x490x530</td>
        <td>5</td>
        <td>2800</td>
        <td>M5</td>
        <td>2.5</td>
        <td>65</td>
        <td>450</td>
        <td>3.55</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x287x530</td>
        <td>3</td>
        <td>1700</td>
        <td>M5</td>
        <td>2.5</td>
        <td>65</td>
        <td>450</td>
        <td>2.13</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x592x635</td>
        <td>8</td>
        <td>3400</td>
        <td>M5</td>
        <td>2.5</td>
        <td>50</td>
        <td>450</td>
        <td>6.81</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x490x635</td>
        <td>6</td>
        <td>2800</td>
        <td>M5</td>
        <td>2.5</td>
        <td>50</td>
        <td>450</td>
        <td>5.11</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x287x635</td>
        <td>4</td>
        <td>1700</td>
        <td>M5</td>
        <td>2.5</td>
        <td>50</td>
        <td>450</td>
        <td>3.40</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x592x635</td>
        <td>6</td>
        <td>3400</td>
        <td>M5</td>
        <td>2.5</td>
        <td>58</td>
        <td>450</td>
        <td>5.11</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x490x635</td>
        <td>5</td>
        <td>2800</td>
        <td>M5</td>
        <td>2.5</td>
        <td>58</td>
        <td>450</td>
        <td>4.25</td>
    </tr>
    <tr>
        <td>VP160</td>
        <td>592x287x635</td>
        <td>3</td>
        <td>1700</td>
        <td>M5</td>
        <td>2.5</td>
        <td>58</td>
        <td>450</td>
        <td>2.55</td>
    </tr>
        </table>`
    },
    //vpm6
    {
        id: 'v-pakm6', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vpm6.webp',

        name: {
            vi: 'V-PAK M6 (Túi lọc khí)',
            en: 'V-PAK M6 (Bag Filter)'
        },
        desc: {
            vi: 'Lọc túi hiệu suất M6, dùng làm lọc trung gian bảo vệ lọc tinh.',
            en: 'M6 efficiency bag filter, secondary filter to protect fine filters.'
        },
        apps: {
            vi: ['Hệ thống điều hòa không khí', 'Công nghiệp thực phẩm', 'Linh kiện điện tử'],
            en: ['Air conditioning systems', 'Food & Beverage', 'Electronics components']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'M6 (EN779) / ePM10 70%'],
            [{vi: 'Số túi', en: 'No. of Pockets'}, '3 - 10'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Số túi</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  (EN779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>VP180</td>
        <td>592x592x380</td>
        <td>8</td>
        <td>3400</td>
        <td>M6</td>
        <td>2.5</td>
        <td>85</td>
        <td>450</td>
        <td>4.07</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x490x380</td>
        <td>6</td>
        <td>2800</td>
        <td>M6</td>
        <td>2.5</td>
        <td>85</td>
        <td>450</td>
        <td>3.06</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x287x380</td>
        <td>4</td>
        <td>1700</td>
        <td>M6</td>
        <td>2.5</td>
        <td>85</td>
        <td>450</td>
        <td>2.04</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x592x380</td>
        <td>6</td>
        <td>3400</td>
        <td>M6</td>
        <td>2.5</td>
        <td>90</td>
        <td>450</td>
        <td>3.06</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x490x380</td>
        <td>5</td>
        <td>2800</td>
        <td>M6</td>
        <td>2.5</td>
        <td>90</td>
        <td>450</td>
        <td>2.55</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x287x380</td>
        <td>3</td>
        <td>1700</td>
        <td>M6</td>
        <td>2.5</td>
        <td>90</td>
        <td>450</td>
        <td>1.53</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x592x530</td>
        <td>8</td>
        <td>3400</td>
        <td>M6</td>
        <td>2.5</td>
        <td>75</td>
        <td>450</td>
        <td>5.68</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x490x530</td>
        <td>6</td>
        <td>2800</td>
        <td>M6</td>
        <td>2.5</td>
        <td>75</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x287x530</td>
        <td>4</td>
        <td>1700</td>
        <td>M6</td>
        <td>2.5</td>
        <td>75</td>
        <td>450</td>
        <td>2.84</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x592x530</td>
        <td>6</td>
        <td>3400</td>
        <td>M6</td>
        <td>2.5</td>
        <td>80</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP180</td>
        <td>592x490x530</td>
        <td>5</td>
        <td>2800</td>
        <td>M6</td>
        <td>2.5</td>
        <td>80</td>
        <td>450</td>
        <td>3.55</td>
    </tr>
        </table>`
    },
    //vpf7
    {
        id: 'v-pakf7', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vpf7.webp',

        name: {
            vi: 'V-PAK F7 (Túi lọc khí)',
            en: 'V-PAK F7 (Bag Filter)'
        },
        desc: {
            vi: 'Lọc túi hiệu suất cao F7, lọc sạch bụi mịn trước khi vào phòng sạch.',
            en: 'F7 high efficiency bag filter, pre-filtration for cleanrooms.'
        },
        apps: {
            vi: ['Bệnh viện', 'Dược phẩm', 'Điện tử bán dẫn'],
            en: ['Hospitals', 'Pharmaceuticals', 'Semiconductors']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'F7 (EN779) / ePM1 55%'],
            [{vi: 'Số túi', en: 'No. of Pockets'}, '3 - 10'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Số túi</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  (EN779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
    <tr>
        <td>VP190</td>
        <td>592x592x380</td>
        <td>8</td>
        <td>3400</td>
        <td>F7</td>
        <td>2.5</td>
        <td>125</td>
        <td>450</td>
        <td>4.07</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x490x380</td>
        <td>6</td>
        <td>2800</td>
        <td>F7</td>
        <td>2.5</td>
        <td>125</td>
        <td>450</td>
        <td>3.06</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x287x380</td>
        <td>4</td>
        <td>1700</td>
        <td>F7</td>
        <td>2.5</td>
        <td>125</td>
        <td>450</td>
        <td>2.04</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x592x380</td>
        <td>6</td>
        <td>3400</td>
        <td>F7</td>
        <td>2.5</td>
        <td>130</td>
        <td>450</td>
        <td>3.06</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x490x380</td>
        <td>5</td>
        <td>2800</td>
        <td>F7</td>
        <td>2.5</td>
        <td>130</td>
        <td>450</td>
        <td>2.55</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x287x380</td>
        <td>3</td>
        <td>1700</td>
        <td>F7</td>
        <td>2.5</td>
        <td>130</td>
        <td>450</td>
        <td>1.53</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x592x530</td>
        <td>8</td>
        <td>3400</td>
        <td>F7</td>
        <td>2.5</td>
        <td>110</td>
        <td>450</td>
        <td>5.68</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x490x530</td>
        <td>6</td>
        <td>2800</td>
        <td>F7</td>
        <td>2.5</td>
        <td>110</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x287x530</td>
        <td>4</td>
        <td>1700</td>
        <td>F7</td>
        <td>2.5</td>
        <td>110</td>
        <td>450</td>
        <td>2.84</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x592x530</td>
        <td>6</td>
        <td>3400</td>
        <td>F7</td>
        <td>2.5</td>
        <td>120</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x490x530</td>
        <td>5</td>
        <td>2800</td>
        <td>F7</td>
        <td>2.5</td>
        <td>120</td>
        <td>450</td>
        <td>3.55</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x287x530</td>
        <td>3</td>
        <td>1700</td>
        <td>F7</td>
        <td>2.5</td>
        <td>120</td>
        <td>450</td>
        <td>2.13</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x592x530</td>
        <td>10</td>
        <td>3400</td>
        <td>F7</td>
        <td>2.5</td>
        <td>95</td>
        <td>450</td>
        <td>7.10</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>287x592x530</td>
        <td>5</td>
        <td>1700</td>
        <td>F7</td>
        <td>2.5</td>
        <td>95</td>
        <td>450</td>
        <td>3.55</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x592x635</td>
        <td>8</td>
        <td>3400</td>
        <td>F7</td>
        <td>2.5</td>
        <td>100</td>
        <td>450</td>
        <td>6.81</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x490x635</td>
        <td>6</td>
        <td>2800</td>
        <td>F7</td>
        <td>2.5</td>
        <td>100</td>
        <td>450</td>
        <td>5.11</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x287x635</td>
        <td>4</td>
        <td>1700</td>
        <td>F7</td>
        <td>2.5</td>
        <td>100</td>
        <td>450</td>
        <td>3.40</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x592x635</td>
        <td>6</td>
        <td>3400</td>
        <td>F7</td>
        <td>2.5</td>
        <td>110</td>
        <td>450</td>
        <td>5.11</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x490x635</td>
        <td>5</td>
        <td>2800</td>
        <td>F7</td>
        <td>2.5</td>
        <td>110</td>
        <td>450</td>
        <td>4.25</td>
    </tr>
    <tr>
        <td>VP190</td>
        <td>592x287x635</td>
        <td>3</td>
        <td>1700</td>
        <td>F7</td>
        <td>2.5</td>
        <td>110</td>
        <td>450</td>
        <td>2.55</td>
    </tr>
    </table>`
    },
    //vpf8
    {
        id: 'v-pakf8', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vpf8.webp',

        name: {
            vi: 'V-PAK F8 (Túi lọc khí)',
            en: 'V-PAK F8 (Bag Filter)'
        },
        desc: {
            vi: 'Lọc túi hiệu suất F8, khả năng chứa bụi lớn, phù hợp cho phòng sạch.',
            en: 'F8 high efficiency bag filter, high dust holding capacity, suitable for cleanrooms.'
        },
        apps: {
            vi: ['Bệnh viện, Dược phẩm', 'Nhà máy điện tử', 'Tòa nhà thương mại cao cấp'],
            en: ['Hospitals, Pharmaceuticals', 'Electronics factories', 'High-end commercial buildings']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'F8 (EN779) / ePM1 70%'],
            [{vi: 'Số túi', en: 'No. of Pockets'}, '3 - 10'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Số túi</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  (EN779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
         <tr>
        <td>VP195</td>
        <td>592x592x380</td>
        <td>8</td>
        <td>3400</td>
        <td>F8</td>
        <td>2.5</td>
        <td>160</td>
        <td>450</td>
        <td>4.07</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x490x380</td>
        <td>6</td>
        <td>2800</td>
        <td>F8</td>
        <td>2.5</td>
        <td>160</td>
        <td>450</td>
        <td>3.06</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x287x380</td>
        <td>4</td>
        <td>1700</td>
        <td>F8</td>
        <td>2.5</td>
        <td>160</td>
        <td>450</td>
        <td>2.04</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x592x380</td>
        <td>6</td>
        <td>3400</td>
        <td>F8</td>
        <td>2.5</td>
        <td>175</td>
        <td>450</td>
        <td>3.06</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x490x380</td>
        <td>5</td>
        <td>2800</td>
        <td>F8</td>
        <td>2.5</td>
        <td>175</td>
        <td>450</td>
        <td>2.55</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x287x380</td>
        <td>3</td>
        <td>1700</td>
        <td>F8</td>
        <td>2.5</td>
        <td>175</td>
        <td>450</td>
        <td>1.53</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x592x530</td>
        <td>8</td>
        <td>3400</td>
        <td>F8</td>
        <td>2.5</td>
        <td>150</td>
        <td>450</td>
        <td>5.68</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x490x530</td>
        <td>6</td>
        <td>2800</td>
        <td>F8</td>
        <td>2.5</td>
        <td>150</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x287x530</td>
        <td>4</td>
        <td>1700</td>
        <td>F8</td>
        <td>2.5</td>
        <td>150</td>
        <td>450</td>
        <td>2.84</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x592x530</td>
        <td>6</td>
        <td>3400</td>
        <td>F8</td>
        <td>2.5</td>
        <td>165</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x490x530</td>
        <td>5</td>
        <td>2800</td>
        <td>F8</td>
        <td>2.5</td>
        <td>165</td>
        <td>450</td>
        <td>3.55</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x287x530</td>
        <td>3</td>
        <td>1700</td>
        <td>F8</td>
        <td>2.5</td>
        <td>165</td>
        <td>450</td>
        <td>2.13</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x592x530</td>
        <td>10</td>
        <td>3400</td>
        <td>F8</td>
        <td>2.5</td>
        <td>.webp</td>
        <td>450</td>
        <td>7.10</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>287x592x530</td>
        <td>5</td>
        <td>1700</td>
        <td>F8</td>
        <td>2.5</td>
        <td>.webp</td>
        <td>450</td>
        <td>3.55</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x592x635</td>
        <td>8</td>
        <td>3400</td>
        <td>F8</td>
        <td>2.5</td>
        <td>135</td>
        <td>450</td>
        <td>6.81</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x490x635</td>
        <td>6</td>
        <td>2800</td>
        <td>F8</td>
        <td>2.5</td>
        <td>135</td>
        <td>450</td>
        <td>5.11</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x287x635</td>
        <td>4</td>
        <td>1700</td>
        <td>F8</td>
        <td>2.5</td>
        <td>135</td>
        <td>450</td>
        <td>3.40</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x592x635</td>
        <td>6</td>
        <td>3400</td>
        <td>F8</td>
        <td>2.5</td>
        <td>155</td>
        <td>450</td>
        <td>5.11</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x490x635</td>
        <td>5</td>
        <td>2800</td>
        <td>F8</td>
        <td>2.5</td>
        <td>155</td>
        <td>450</td>
        <td>4.25</td>
    </tr>
    <tr>
        <td>VP195</td>
        <td>592x287x635</td>
        <td>3</td>
        <td>1700</td>
        <td>F8</td>
        <td>2.5</td>
        <td>155</td>
        <td>450</td>
        <td>2.55</td>
    </tr>
        </table>`
    },
    //vpf9
    {
        id: 'v-pakf9', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vpf9.webp',

        name: {
            vi: 'V-PAK F9 (Túi lọc khí)',
            en: 'V-PAK F9 (Bag Filter)'
        },
        desc: {
            vi: 'Lọc túi hiệu suất cao nhất F9, lọc bụi mịn cực tốt.',
            en: 'F9 highest efficiency bag filter, excellent fine dust filtration.'
        },
        apps: {
            vi: ['Phòng mổ, Phòng thí nghiệm', 'Sản xuất chip bán dẫn', 'Công nghệ sinh học'],
            en: ['Operating rooms, Labs', 'Semiconductor manufacturing', 'Biotechnology']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'F9 (EN779) / ePM1 80%'],
            [{vi: 'Số túi', en: 'No. of Pockets'}, '3 - 10'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi tổng hợp', en: 'Synthetic fiber'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '100°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Số túi</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  (EN779:2012)</th>
        <th>Vận tốc gió ) (m/s)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Độ tổn thất áp suất cuối khuyến nghị  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>VP196</td>
        <td>592x592x530</td>
        <td>10</td>
        <td>3400</td>
        <td>F9</td>
        <td>2.5</td>
        <td>165</td>
        <td>450</td>
        <td>5.68</td>
    </tr>
    <tr>
        <td>VP196</td>
        <td>592x287x530</td>
        <td>5</td>
        <td>1700</td>
        <td>F9</td>
        <td>2.5</td>
        <td>165</td>
        <td>450</td>
        <td>5.68</td>
    </tr>
    <tr>
        <td>VP196</td>
        <td>592x592x530</td>
        <td>8</td>
        <td>3400</td>
        <td>F9</td>
        <td>2.5</td>
        <td>175</td>
        <td>450</td>
        <td>5.68</td>
    </tr>
    <tr>
        <td>VP196</td>
        <td>592x490x530</td>
        <td>6</td>
        <td>2800</td>
        <td>F9</td>
        <td>2.5</td>
        <td>175</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP196</td>
        <td>592x287x530</td>
        <td>4</td>
        <td>1700</td>
        <td>F9</td>
        <td>2.5</td>
        <td>175</td>
        <td>450</td>
        <td>2.84</td>
    </tr>
    <tr>
        <td>VP196</td>
        <td>592x592x530</td>
        <td>6</td>
        <td>3400</td>
        <td>F9</td>
        <td>2.5</td>
        <td>185</td>
        <td>450</td>
        <td>4.26</td>
    </tr>
    <tr>
        <td>VP196</td>
        <td>592x490x530</td>
        <td>5</td>
        <td>2800</td>
        <td>F9</td>
        <td>2.5</td>
        <td>185</td>
        <td>450</td>
        <td>3.55</td>
    </tr>
    <tr>
        <td>VP196</td>
        <td>592x287x530</td>
        <td>3</td>
        <td>1700</td>
        <td>F9</td>
        <td>2.5</td>
        <td>185</td>
        <td>450</td>
        <td>2.13</td>
    </tr>
        </table>`
    },
    //vdura
    {
        id: 'v-dura', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vduraa.webp',

        name: {
            vi: 'V-DURA (V-Bank Nhựa)',
            en: 'V-DURA (Plastic V-Bank Filter)'
        },
        desc: {
            vi: 'Lọc V-Bank khung nhựa ABS siêu bền, diện tích lọc lớn, chịu lưu lượng gió cao.',
            en: 'Durable ABS frame V-Bank filter, large filtration area, high airflow capacity.'
        },
        apps: {
            vi: ['Turbin khí điện lực', 'Môi trường gió nhiễu loạn', 'Độ ẩm cao, sương muối'],
            en: ['Gas turbines', 'Turbulent airflow environments', 'High humidity, Saline mist']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'F7, F8, F9 (EN779)'],
            [{vi: 'Khung', en: 'Frame'}, {vi: 'Nhựa ABS', en: 'ABS Plastic'}],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Áp suất phá hủy', en: 'Burst Pressure'}, '1500 Pa'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '70°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Số Khe  (Vee)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ lọc  (EN779:2012)</th>
        <th>Cấp độ lọc  (ISO16890)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>VRS90</td>
        <td>592x592x292</td>
        <td>4</td>
        <td>3400</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>80</td>
        <td>17.8</td>
    </tr>
    <tr>
        <td>VRS90</td>
        <td>592x490x292</td>
        <td>4</td>
        <td>2800</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>80</td>
        <td>14.5</td>
    </tr>
    <tr>
        <td>VRS90</td>
        <td>592x287x292</td>
        <td>4</td>
        <td>1700</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>80</td>
        <td>8.0</td>
    </tr>
    <tr>
        <td>VRS95</td>
        <td>592x592x292</td>
        <td>4</td>
        <td>3400</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>90</td>
        <td>17.8</td>
    </tr>
    <tr>
        <td>VRS95</td>
        <td>592x490x292</td>
        <td>4</td>
        <td>2800</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>90</td>
        <td>14.5</td>
    </tr>
    <tr>
        <td>VRS95</td>
        <td>592x287x292</td>
        <td>4</td>
        <td>1700</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>90</td>
        <td>8.0</td>
    </tr>
    <tr>
        <td>VRS96</td>
        <td>592x592x292</td>
        <td>4</td>
        <td>3400</td>
        <td>F9</td>
        <td>ePM1 80%</td>
        <td>102</td>
        <td>17.8</td>
    </tr>
    <tr>
        <td>VRS96</td>
        <td>592x490x292</td>
        <td>4</td>
        <td>2800</td>
        <td>F9</td>
        <td>ePM1 80%</td>
        <td>102</td>
        <td>14.5</td>
    </tr>
    <tr>
        <td>VRS96</td>
        <td>592x287x292</td>
        <td>4</td>
        <td>1700</td>
        <td>F9</td>
        <td>ePM1 80%</td>
        <td>102</td>
        <td>8.0</td>
    </tr>
        </table>`
    },
    //vduracarbon
    {
        id: 'v-dura-carbon', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vduraC.webp',

        name: {
            vi: 'V-DURA CARBON (Khử mùi)',
            en: 'V-DURA CARBON (Chemical Filter)'
        },
        desc: {
            vi: 'Lọc V-Bank chứa than hoạt tính khử mùi H2S, Acid, Amoniac, khí độc.',
            en: 'Activated carbon V-Bank filter for removing odors, H2S, Acid, Ammonia, VOCs.'
        },
        apps: {
            vi: ['Sân bay, Nhà ga', 'Kiểm soát khí thải', 'Khử mùi hóa chất'],
            en: ['Airports, Stations', 'Exhaust air control', 'Chemical odor removal']
        },
        specs: [
            [{vi: 'Vật liệu', en: 'Media'}, {vi: 'Than hoạt tính hỗn hợp', en: 'Impregnated Activated Carbon'}],
            [{vi: 'Khung', en: 'Frame'}, 'Nhựa ABS'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '52°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Số Khe  (Vee)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
    <tbody><tr><td>VDRC4292592592</td><td>592x592x292</td><td>4</td><td>3400 CMH</td><td>125 Pa</td><td>1.3</td></tr></tbody></table>`
    },
    //vm1
    {
        id: 'vmi', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vm1ht.webp',

        name: {
            vi: 'VMI (Lọc Hộp Nhôm)',
            en: 'VMI (Aluminum Separator Box Filter)'
        },
        desc: {
            vi: 'Lọc tinh dạng hộp, vách chia nhôm, kết cấu chắc chắn.',
            en: 'Rigid box filter with aluminum separators, high stability construction.'
        },
        apps: {
            vi: ['Môi trường gió thay đổi, nhiễu loạn', 'Hệ thống HVAC, AHU', 'Nhiệt độ, độ ẩm cao'],
            en: ['Variable air volume (VAV) systems', 'HVAC, AHU', 'High humidity & turbulent flow']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'M6, F7, F8 (EN779)'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Vách chia gió', en: 'Separators'}, {vi: 'Nhôm', en: 'Aluminum'}],
            [{vi: 'Keo', en: 'Sealant'}, 'Polyurethane']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN779</th>
        <th>Cấp độ ISO16890</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>VMIS6149592592</td>
        <td>592x592x149</td>
        <td>1700</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>60</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIS6149592287</td>
        <td>592x287x149</td>
        <td>850</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>60</td>
        <td>2.9</td>
    </tr>
    <tr>
        <td>VMIS7149592592</td>
        <td>592x592x149</td>
        <td>1700</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>75</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIS7149592287</td>
        <td>592x287x149</td>
        <td>850</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>75</td>
        <td>2.9</td>
    </tr>
    <tr>
        <td>VMIS8149592592</td>
        <td>592x592x149</td>
        <td>1700</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>95</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIS8149592287</td>
        <td>592x287x149</td>
        <td>850</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>95</td>
        <td>2.9</td>
    </tr>
    <tr>
        <td>VMIH6292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>95</td>
        <td>12.7</td>
    </tr>
    <tr>
        <td>VMIH6292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>95</td>
        <td>5.7</td>
    </tr>
    <tr>
        <td>VMIH7292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>135</td>
        <td>12.7</td>
    </tr>
    <tr>
        <td>VMIH7292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>135</td>
        <td>5.7</td>
    </tr>
    <tr>
        <td>VMIH8292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>150</td>
        <td>12.7</td>
    </tr>
    <tr>
        <td>VMIH8292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>150</td>
        <td>5.7</td>
    </tr>
        </table>`
    },
    //vm1ht
    {
        id: 'vmi-ht', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vm1ht.webp',

        name: {
            vi: 'VMI-HT (Chịu nhiệt 250°C)',
            en: 'VMI-HT (High Temp 250°C Box Filter)'
        },
        desc: {
            vi: 'Lọc tinh chịu nhiệt 250°C dùng cho lò sấy, vách nhôm.',
            en: 'High temperature (250°C) fine filter for drying ovens, aluminum separators.'
        },
        apps: {
            vi: ['Lò sấy sơn', 'Sấy thực phẩm', 'Môi trường nhiệt độ cao'],
            en: ['Paint drying ovens', 'Food drying', 'High temperature environments']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'M6, F7, F8 (EN779)'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '250°C'],
            [{vi: 'Keo', en: 'Sealant'}, 'Silicone (Red)']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN779</th>
        <th>Cấp độ ISO16890</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>VMIHTS6149592592</td>
        <td>592x592x149</td>
        <td>1700</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>60</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIHTS6149592287</td>
        <td>592x287x149</td>
        <td>850</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>60</td>
        <td>2.9</td>
    </tr>
    <tr>
        <td>VMIHTS7149592592</td>
        <td>592x592x149</td>
        <td>1700</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>75</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIHTS7149592287</td>
        <td>592x287x149</td>
        <td>850</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>75</td>
        <td>2.9</td>
    </tr>
    <tr>
        <td>VMIHTS8149592592</td>
        <td>592x592x149</td>
        <td>1700</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>95</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIHTS8149592287</td>
        <td>592x287x149</td>
        <td>850</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>95</td>
        <td>2.9</td>
    </tr>
    <tr>
        <td>VMIHTH6292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>95</td>
        <td>12.7</td>
    </tr>
    <tr>
        <td>VMIHTH6292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>95</td>
        <td>5.7</td>
    </tr>
    <tr>
        <td>VMIHTH7292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>135</td>
        <td>12.7</td>
    </tr>
    <tr>
        <td>VMIHTH7292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>135</td>
        <td>5.7</td>
    </tr>
    <tr>
        <td>VMIHTH8292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>150</td>
        <td>12.7</td>
    </tr>
        </table>`
    },
    //vm2
    {
        id: 'vm-ii', 
        cat: 'Lọc Tinh',
        img: 'images/san-pham/vm2.webp',

        name: {
            vi: 'VM II (Lọc Mini-pleat)',
            en: 'VM II (Mini-pleat Compact Filter)'
        },
        desc: {
            vi: 'Lọc tinh mỏng (Compact), công nghệ Mini-pleat giúp tiết kiệm không gian.',
            en: 'Compact fine filter (100mm/292mm), Mini-pleat technology for space saving.'
        },
        apps: {
            vi: ['Hệ thống HVAC không gian hẹp', 'Thay thế cho lọc túi'],
            en: ['HVAC with limited space', 'Replacement for Bag filters']
        },
        specs: [
            [{vi: 'Cấp độ', en: 'Class'}, 'M6, F7, F8, F9'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Vách chia gió', en: 'Separators'}, {vi: 'Keo nhiệt dẻo (Hot melt)', en: 'Hot melt'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '80°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN779</th>
        <th>Cấp độ ISO16890</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>VMIIS697592592</td>
        <td>592x592x97</td>
        <td>3400</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>90</td>
        <td>13.5</td>
    </tr>
    <tr>
        <td>VMIIS697592490</td>
        <td>592x490x97</td>
        <td>2800</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>90</td>
        <td>11.2</td>
    </tr>
    <tr>
        <td>VMIIS697592287</td>
        <td>592x287x97</td>
        <td>1700</td>
        <td>M6</td>
        <td>ePM10 70%</td>
        <td>90</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIIS797592592</td>
        <td>592x592x97</td>
        <td>3400</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>125</td>
        <td>13.5</td>
    </tr>
    <tr>
        <td>VMIIS797592490</td>
        <td>592x490x97</td>
        <td>2800</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>125</td>
        <td>11.2</td>
    </tr>
    <tr>
        <td>VMIIS797592287</td>
        <td>592x287x97</td>
        <td>1700</td>
        <td>F7</td>
        <td>ePM1 55%</td>
        <td>125</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIIS897592592</td>
        <td>592x592x97</td>
        <td>3400</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>170</td>
        <td>13.5</td>
    </tr>
    <tr>
        <td>VMIIS897592490</td>
        <td>592x490x97</td>
        <td>2800</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>170</td>
        <td>11.2</td>
    </tr>
    <tr>
        <td>VMIIS897592287</td>
        <td>592x287x97</td>
        <td>1700</td>
        <td>F8</td>
        <td>ePM1 70%</td>
        <td>170</td>
        <td>6.5</td>
    </tr>
    <tr>
        <td>VMIIS997592592</td>
        <td>592x592x97</td>
        <td>3400</td>
        <td>F9</td>
        <td>ePM1 80%</td>
        <td>190</td>
        <td>13.5</td>
    </tr>
    <tr>
        <td>VMIIS997592490</td>
        <td>592x490x97</td>
        <td>2800</td>
        <td>F9</td>
        <td>ePM1 80%</td>
        <td>190</td>
        <td>11.2</td>
    </tr>
    <tr>
        <td>VMIIS997592287</td>
        <td>592x287x97</td>
        <td>1700</td>
        <td>F9</td>
        <td>ePM1 80%</td>
        <td>190</td>
        <td>6.5</td>
    </tr>
    </table>`
    },

    // --- 3. LỌC HEPA & ULPA ---
    //u1sc
    {
        id: 'ultracel-i-sc', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u1s.webp',

        name: {
            vi: 'Ultracel I - SC (HEPA Tiêu Chuẩn)',
            en: 'Ultracel I - SC (Standard Capacity HEPA)'
        },
        desc: {
            vi: 'HEPA vách nhôm lưu lượng tiêu chuẩn, khả năng giữ bụi cao.',
            en: 'Standard capacity HEPA filter with aluminum separators, high dust holding capacity.'
        },
        apps: {
            vi: ['Phòng sạch Class 1.000 - 100.000', 'Nhà máy bán dẫn, Dược phẩm', 'Lọc đầu cuối (Terminal Filter)'],
            en: ['Cleanroom Class 1,000 - 100,000', 'Semiconductor, Pharmaceutical', 'Terminal filtration']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14, U15 (EN1822)'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Vách chia gió', en: 'Separators'}, {vi: 'Nhôm', en: 'Aluminum'}],
            [{vi: 'Ron làm kín', en: 'Gasket'}, 'Polyurethane'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '80°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
    <tr>
        <td>UISN13149305305</td>
        <td>305x305x149</td>
        <td>250</td>
        <td>H13</td>
        <td>250</td>
        <td>1.7</td>
    </tr>
    <tr>
        <td>UISN13149457457</td>
        <td>457x457x149</td>
        <td>560</td>
        <td>H13</td>
        <td>250</td>
        <td>3.9</td>
    </tr>
    <tr>
        <td>UISN13149610305</td>
        <td>610x305x149</td>
        <td>500</td>
        <td>H13</td>
        <td>250</td>
        <td>3.5</td>
    </tr>
    <tr>
        <td>UISN13149610610</td>
        <td>610x610x149</td>
        <td>1000</td>
        <td>H13</td>
        <td>250</td>
        <td>6.9</td>
    </tr>
    <tr>
        <td>UISN13149762610</td>
        <td>762x610x149</td>
        <td>1250</td>
        <td>H13</td>
        <td>250</td>
        <td>8.6</td>
    </tr>
    <tr>
        <td>UISN13149915610</td>
        <td>915x610x149</td>
        <td>1500</td>
        <td>H13</td>
        <td>250</td>
        <td>10.4</td>
    </tr>
    <tr>
        <td>UISN111491220610</td>
        <td>1220x610x149</td>
        <td>2000</td>
        <td>H13</td>
        <td>250</td>
        <td>13.8</td>
    </tr>
    <tr>
        <td>UISN14149305305</td>
        <td>305x305x149</td>
        <td>250</td>
        <td>H14</td>
        <td>320</td>
        <td>1.7</td>
    </tr>
    <tr>
        <td>UISN14149457457</td>
        <td>457x457x149</td>
        <td>560</td>
        <td>H14</td>
        <td>320</td>
        <td>3.9</td>
    </tr>
    <tr>
        <td>UISN14149610305</td>
        <td>610x305x149</td>
        <td>500</td>
        <td>H14</td>
        <td>320</td>
        <td>3.5</td>
    </tr>
    <tr>
        <td>UISN14149610610</td>
        <td>610x610x149</td>
        <td>1000</td>
        <td>H14</td>
        <td>320</td>
        <td>6.9</td>
    </tr>
    <tr>
        <td>UISN14149762610</td>
        <td>762x610x149</td>
        <td>1250</td>
        <td>H14</td>
        <td>320</td>
        <td>8.6</td>
    </tr>
    <tr>
        <td>UISN14149915610</td>
        <td>915x610x149</td>
        <td>1500</td>
        <td>H14</td>
        <td>320</td>
        <td>10.4</td>
    </tr>
    <tr>
        <td>UISN111491220610</td>
        <td>1220x610x149</td>
        <td>2000</td>
        <td>H14</td>
        <td>320</td>
        <td>13.8</td>
    </tr>
    <tr>
        <td>UISN13292305305</td>
        <td>305x305x292</td>
        <td>500</td>
        <td>H13</td>
        <td>250</td>
        <td>3.3</td>
    </tr>
    <tr>
        <td>UISN13292457457</td>
        <td>457x457x292</td>
        <td>1100</td>
        <td>H13</td>
        <td>250</td>
        <td>7.5</td>
    </tr>
    <tr>
        <td>UISN13292610305</td>
        <td>610x305x292</td>
        <td>1000</td>
        <td>H13</td>
        <td>250</td>
        <td>6.7</td>
    </tr>
    <tr>
        <td>UISN13292610610</td>
        <td>610x610x292</td>
        <td>2000</td>
        <td>H13</td>
        <td>250</td>
        <td>13.4</td>
    </tr>
    <tr>
        <td>UISN13292762610</td>
        <td>762x610x292</td>
        <td>2500</td>
        <td>H13</td>
        <td>250</td>
        <td>16.7</td>
    </tr>
    <tr>
        <td>UISN14292305305</td>
        <td>305x305x292</td>
        <td>500</td>
        <td>H14</td>
        <td>320</td>
        <td>3.3</td>
    </tr>
    <tr>
        <td>UISN14292457457</td>
        <td>457x457x292</td>
        <td>1100</td>
        <td>H14</td>
        <td>320</td>
        <td>7.5</td>
    </tr>
    <tr>
        <td>UISN14292610305</td>
        <td>610x305x292</td>
        <td>1000</td>
        <td>H14</td>
        <td>320</td>
        <td>6.7</td>
    </tr>
    <tr>
        <td>UISN14292610610</td>
        <td>610x610x292</td>
        <td>2000</td>
        <td>H14</td>
        <td>320</td>
        <td>13.4</td>
    </tr>
    <tr>
        <td>UISN14292762610</td>
        <td>762x610x292</td>
        <td>2500</td>
        <td>H14</td>
        <td>320</td>
        <td>16.7</td>
    </tr>
    </table>`
    },
    //u1hc
    {
        iid: 'ultracel-i-hc', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u1s.webp',

        name: {
            vi: 'Ultracel I - HC (HEPA Lưu Lượng Cao)',
            en: 'Ultracel I - HC (High Capacity HEPA)'
        },
        desc: {
            vi: 'HEPA vách nhôm lưu lượng gió cao, tiết kiệm không gian lắp đặt.',
            en: 'High capacity HEPA filter with aluminum separators for higher airflow requirements.'
        },
        apps: {
            vi: ['Hệ thống cần lưu lượng gió lớn', 'Lọc đầu cuối hoặc trên đường ống'],
            en: ['High airflow systems', 'Terminal or In-duct filtration']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14 (EN1822)'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Vận tốc gió', en: 'Velocity'}, '1.5 - 2.5 m/s'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '80°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UIHN13149305305</td>
        <td>305x305x149</td>
        <td>410</td>
        <td>H13</td>
        <td>300</td>
        <td>2.4</td>
    </tr>
    <tr>
        <td>UIHN13149457457</td>
        <td>457x457x149</td>
        <td>930</td>
        <td>H13</td>
        <td>300</td>
        <td>5.4</td>
    </tr>
    <tr>
        <td>UIHN13149610305</td>
        <td>610x305x149</td>
        <td>830</td>
        <td>H13</td>
        <td>300</td>
        <td>4.8</td>
    </tr>
    <tr>
        <td>UIHN13149610610</td>
        <td>610x610x149</td>
        <td>1700</td>
        <td>H13</td>
        <td>300</td>
        <td>9.7</td>
    </tr>
    <tr>
        <td>UIHN13149762610</td>
        <td>762x610x149</td>
        <td>2100</td>
        <td>H13</td>
        <td>300</td>
        <td>12.1</td>
    </tr>
    <tr>
        <td>UIHN13149915610</td>
        <td>915x610x149</td>
        <td>2500</td>
        <td>H13</td>
        <td>300</td>
        <td>14.5</td>
    </tr>
    <tr>
        <td>UIHN131491220610</td>
        <td>1220x610x149</td>
        <td>3400</td>
        <td>H13</td>
        <td>300</td>
        <td>19.3</td>
    </tr>
    <tr>
        <td>UIHN14149305305</td>
        <td>305x305x149</td>
        <td>410</td>
        <td>H14</td>
        <td>350</td>
        <td>2.4</td>
    </tr>
    <tr>
        <td>UIHN14149457457</td>
        <td>457x457x149</td>
        <td>930</td>
        <td>H14</td>
        <td>350</td>
        <td>5.4</td>
    </tr>
    <tr>
        <td>UIHN14149610305</td>
        <td>610x305x149</td>
        <td>830</td>
        <td>H14</td>
        <td>350</td>
        <td>4.8</td>
    </tr>
    <tr>
        <td>UIHN14149610610</td>
        <td>610x610x149</td>
        <td>1700</td>
        <td>H14</td>
        <td>350</td>
        <td>9.7</td>
    </tr>
    <tr>
        <td>UIHN14149762610</td>
        <td>762x610x149</td>
        <td>2100</td>
        <td>H14</td>
        <td>350</td>
        <td>12.1</td>
    </tr>
    <tr>
        <td>UIHN14149915610</td>
        <td>915x610x149</td>
        <td>2500</td>
        <td>H14</td>
        <td>350</td>
        <td>14.5</td>
    </tr>
    <tr>
        <td>UIHN141491220610</td>
        <td>1220x610x149</td>
        <td>3400</td>
        <td>H14</td>
        <td>350</td>
        <td>19.3</td>
    </tr>
    <tr>
        <td>UIHN13292305305</td>
        <td>305x305x292</td>
        <td>830</td>
        <td>H13</td>
        <td>300</td>
        <td>4.7</td>
    </tr>
    <tr>
        <td>UIHN13292457457</td>
        <td>457x457x292</td>
        <td>1870</td>
        <td>H13</td>
        <td>300</td>
        <td>10.5</td>
    </tr>
    <tr>
        <td>UIHN13292610305</td>
        <td>610x305x292</td>
        <td>1700</td>
        <td>H13</td>
        <td>300</td>
        <td>9.4</td>
    </tr>
    <tr>
        <td>UIHN13292610610</td>
        <td>610x610x292</td>
        <td>3400</td>
        <td>H13</td>
        <td>300</td>
        <td>18.8</td>
    </tr>
    <tr>
        <td>UIHN13292762610</td>
        <td>762x610x292</td>
        <td>4180</td>
        <td>H13</td>
        <td>300</td>
        <td>23.4</td>
    </tr>
    <tr>
        <td>UIHN14292305305</td>
        <td>305x305x292</td>
        <td>830</td>
        <td>H14</td>
        <td>350</td>
        <td>4.7</td>
    </tr>
    <tr>
        <td>UIHN14292457457</td>
        <td>457x457x292</td>
        <td>1870</td>
        <td>H14</td>
        <td>350</td>
        <td>10.5</td>
    </tr>
    <tr>
        <td>UIHN14292610305</td>
        <td>610x305x292</td>
        <td>1700</td>
        <td>H14</td>
        <td>350</td>
        <td>9.4</td>
    </tr>
    <tr>
        <td>UIHN14292610610</td>
        <td>610x610x292</td>
        <td>3400</td>
        <td>H14</td>
        <td>350</td>
        <td>18.8</td>
    </tr>
    <tr>
        <td>UIHN14292762610</td>
        <td>762x610x292</td>
        <td>4180</td>
        <td>H14</td>
        <td>350</td>
        <td>23.4</td>
    </tr>
    </table>`
    },
    //u1ht
    {
        id: 'ultracel-i-ht', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u1ht.webp',

        name: {
            vi: 'Ultracel I - HT (HEPA Chịu Nhiệt)',
            en: 'Ultracel I - HT (High Temp HEPA)'
        },
        desc: {
            vi: 'HEPA chịu nhiệt độ cao (250°C - 400°C), keo Ceramic chuyên dụng.',
            en: 'High temperature resistant HEPA (up to 400°C) with Ceramic sealant.'
        },
        apps: {
            vi: ['Đường hầm sấy vô trùng (Depyrogenation tunnels)', 'Lò sấy dược phẩm', 'Công nghiệp thực phẩm'],
            en: ['Depyrogenation tunnels', 'Pharmaceutical ovens', 'Food processing ovens']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14'],
            [{vi: 'Khung', en: 'Frame'}, {vi: 'Inox 304 / 316', en: 'Stainless Steel 304 / 316'}],
            [{vi: 'Keo', en: 'Sealant'}, {vi: 'Gốm Ceramic đỏ', en: 'Red Silicone / Ceramic'}],
            [{vi: 'Ron', en: 'Gasket'}, {vi: 'Sợi thủy tinh / Silicone', en: 'Glass fiber / Silicone'}],
            [{vi: 'Nhiệt độ giới hạn', en: 'Max. Temp'}, '350°C - 400°C']
        ],
        table: `<table class="tech-table">C
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UIHSN13149305305</td>
        <td>305x305x149</td>
        <td>250</td>
        <td>H13</td>
        <td>300</td>
        <td>1.7</td>
    </tr>
    <tr>
        <td>UIHSN13149457457</td>
        <td>457x457x149</td>
        <td>560</td>
        <td>H13</td>
        <td>300</td>
        <td>3.9</td>
    </tr>
    <tr>
        <td>UIHSN13149610305</td>
        <td>610x305x149</td>
        <td>500</td>
        <td>H13</td>
        <td>300</td>
        <td>3.5</td>
    </tr>
    <tr>
        <td>UIHSN13149610610</td>
        <td>610x610x149</td>
        <td>1000</td>
        <td>H13</td>
        <td>300</td>
        <td>6.9</td>
    </tr>
    <tr>
        <td>UIHSN13149762610</td>
        <td>762x610x149</td>
        <td>1250</td>
        <td>H13</td>
        <td>300</td>
        <td>8.6</td>
    </tr>
    <tr>
        <td>UIHSN13149915610</td>
        <td>915x610x149</td>
        <td>1500</td>
        <td>H13</td>
        <td>300</td>
        <td>10.4</td>
    </tr>
    <tr>
        <td>UIHSN131491220610</td>
        <td>1220x610x149</td>
        <td>2000</td>
        <td>H13</td>
        <td>300</td>
        <td>13.8</td>
    </tr>
    <tr>
        <td>UIHSN14149305305</td>
        <td>305x305x149</td>
        <td>250</td>
        <td>H14</td>
        <td>355</td>
        <td>1.7</td>
    </tr>
    <tr>
        <td>UIHSN14149457457</td>
        <td>457x457x149</td>
        <td>560</td>
        <td>H14</td>
        <td>355</td>
        <td>3.9</td>
    </tr>
    <tr>
        <td>UIHSN14149610305</td>
        <td>610x305x149</td>
        <td>500</td>
        <td>H14</td>
        <td>355</td>
        <td>3.5</td>
    </tr>
    <tr>
        <td>UIHSN14149610610</td>
        <td>610x610x149</td>
        <td>1000</td>
        <td>H14</td>
        <td>355</td>
        <td>6.9</td>
    </tr>
    <tr>
        <td>UIHSN14149762610</td>
        <td>762x610x149</td>
        <td>1250</td>
        <td>H14</td>
        <td>355</td>
        <td>8.6</td>
    </tr>
    <tr>
        <td>UIHSN14149915610</td>
        <td>915x610x149</td>
        <td>1500</td>
        <td>H14</td>
        <td>355</td>
        <td>10.4</td>
    </tr>
    <tr>
        <td>UIHSN141491220610</td>
        <td>1220x610x149</td>
        <td>2000</td>
        <td>H14</td>
        <td>355</td>
        <td>13.8</td>
    </tr>
    <tr>
        <td>UIHSN13292305305</td>
        <td>305x305x292</td>
        <td>500</td>
        <td>H13</td>
        <td>300</td>
        <td>3.3</td>
    </tr>
    <tr>
        <td>UIHSN13292457457</td>
        <td>457x457x292</td>
        <td>1100</td>
        <td>H13</td>
        <td>300</td>
        <td>7.5</td>
    </tr>
    <tr>
        <td>UIHSN13292610305</td>
        <td>610x305x292</td>
        <td>1000</td>
        <td>H13</td>
        <td>300</td>
        <td>6.7</td>
    </tr>
    <tr>
        <td>UIHSN13292610610</td>
        <td>610x610x292</td>
        <td>2000</td>
        <td>H13</td>
        <td>300</td>
        <td>13.4</td>
    </tr>
    <tr>
        <td>UIHSN13292762610</td>
        <td>762x610x292</td>
        <td>2500</td>
        <td>H13</td>
        <td>300</td>
        <td>16.7</td>
    </tr>
    <tr>
        <td>UIHSN14292305305</td>
        <td>305x305x292</td>
        <td>500</td>
        <td>H14</td>
        <td>355</td>
        <td>3.3</td>
    </tr>
    <tr>
        <td>UIHSN14292457457</td>
        <td>457x457x292</td>
        <td>1100</td>
        <td>H14</td>
        <td>355</td>
        <td>7.5</td>
    </tr>
    <tr>
        <td>UIHSN14292610305</td>
        <td>610x305x292</td>
        <td>1000</td>
        <td>H14</td>
        <td>355</td>
        <td>6.7</td>
    </tr>
    <tr>
        <td>UIHSN14292610610</td>
        <td>610x610x292</td>
        <td>2000</td>
        <td>H14</td>
        <td>355</td>
        <td>13.4</td>
    </tr>
    <tr>
        <td>UIHSN14292762610</td>
        <td>762x610x292</td>
        <td>2500</td>
        <td>H14</td>
        <td>355</td>
        <td>16.7</td>
    </tr>
    </table>`
    },
    //u2sc
    {
        id: 'ultracel-ii-sc', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u2hc.webp',

        name: {
            vi: 'Ultracel II - SC (HEPA Mini-pleat)',
            en: 'Ultracel II - SC (Standard Capacity Mini-pleat)'
        },
        desc: {
            vi: 'HEPA mỏng 69mm, công nghệ Mini-pleat, lưu lượng tiêu chuẩn (0.45m/s).',
            en: 'Slim 69mm Mini-pleat HEPA, Standard airflow capacity (0.45m/s).'
        },
        apps: {
            vi: ['Phòng sạch Class 1 - 1.000', 'Lắp cho FFU hoặc trần phòng sạch'],
            en: ['Cleanroom Class 1 - 1,000', 'FFU or Ceiling grid installation']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14, U15 (EN1822)'],
            [{vi: 'Khung', en: 'Frame'}, {vi: 'Nhôm định hình (Anodized)', en: 'Anodized Extruded Aluminum'}],
            [{vi: 'Vách chia gió', en: 'Separators'}, {vi: 'Keo nhiệt dẻo (Hot melt)', en: 'Hot melt'}],
            [{vi: 'Lưới bảo vệ', en: 'Faceguard'}, {vi: 'Sơn tĩnh điện 2 mặt', en: 'Powder coated (both sides)'}],
            [{vi: 'Vận tốc gió', en: 'Face Velocity'}, '0.45 m/s']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UIIS1369305305</td>
        <td>305x305x69</td>
        <td>150</td>
        <td>H13</td>
        <td>110</td>
        <td>2.38</td>
    </tr>
    <tr>
        <td>UIIS1369457457</td>
        <td>457x457x69</td>
        <td>330</td>
        <td>H13</td>
        <td>110</td>
        <td>5.34</td>
    </tr>
    <tr>
        <td>UIIS1369610305</td>
        <td>610x305x69</td>
        <td>300</td>
        <td>H13</td>
        <td>110</td>
        <td>4.76</td>
    </tr>
    <tr>
        <td>UIIS1369610610</td>
        <td>610x610x69</td>
        <td>600</td>
        <td>H13</td>
        <td>110</td>
        <td>9.52</td>
    </tr>
    <tr>
        <td>UIIS1369762610</td>
        <td>762x610x69</td>
        <td>750</td>
        <td>H13</td>
        <td>110</td>
        <td>11.9</td>
    </tr>
    <tr>
        <td>UIIS1369915610</td>
        <td>915x610x69</td>
        <td>900</td>
        <td>H13</td>
        <td>110</td>
        <td>14.28</td>
    </tr>
    <tr>
        <td>UIIS13691220610</td>
        <td>1220x610x69</td>
        <td>1200</td>
        <td>H13</td>
        <td>110</td>
        <td>19.04</td>
    </tr>
    <tr>
        <td>UIIS1469305305</td>
        <td>305x305x69</td>
        <td>150</td>
        <td>H14</td>
        <td>125</td>
        <td>2.38</td>
    </tr>
    <tr>
        <td>UIIS1469457457</td>
        <td>457x457x69</td>
        <td>330</td>
        <td>H14</td>
        <td>125</td>
        <td>5.34</td>
    </tr>
    <tr>
        <td>UIIS1469610305</td>
        <td>610x305x69</td>
        <td>300</td>
        <td>H14</td>
        <td>125</td>
        <td>4.76</td>
    </tr>
    <tr>
        <td>UIIS1469610610</td>
        <td>610x610x69</td>
        <td>600</td>
        <td>H14</td>
        <td>125</td>
        <td>9.52</td>
    </tr>
    <tr>
        <td>UIIS1469762610</td>
        <td>762x610x69</td>
        <td>750</td>
        <td>H14</td>
        <td>125</td>
        <td>11.9</td>
    </tr>
    <tr>
        <td>UIIS1469915610</td>
        <td>915x610x69</td>
        <td>900</td>
        <td>H14</td>
        <td>125</td>
        <td>14.28</td>
    </tr>
    <tr>
        <td>UIIS14691220610</td>
        <td>1220x610x69</td>
        <td>1200</td>
        <td>H14</td>
        <td>125</td>
        <td>19.04</td>
    </tr>
    <tr>
        <td>UIIS1569305305</td>
        <td>305x305x69</td>
        <td>150</td>
        <td>U15</td>
        <td>145</td>
        <td>2.38</td>
    </tr>
    <tr>
        <td>UIIS1569457457</td>
        <td>457x457x69</td>
        <td>330</td>
        <td>U15</td>
        <td>145</td>
        <td>5.34</td>
    </tr>
    <tr>
        <td>UIIS1569610305</td>
        <td>610x305x69</td>
        <td>300</td>
        <td>U15</td>
        <td>145</td>
        <td>4.76</td>
    </tr>
    <tr>
        <td>UIIS1569610610</td>
        <td>610x610x69</td>
        <td>600</td>
        <td>U15</td>
        <td>145</td>
        <td>9.52</td>
    </tr>
    <tr>
        <td>UIIS1569762610</td>
        <td>762x610x69</td>
        <td>750</td>
        <td>U15</td>
        <td>145</td>
        <td>11.9</td>
    </tr>
    <tr>
        <td>UIIS1569915610</td>
        <td>915x610x69</td>
        <td>900</td>
        <td>U15</td>
        <td>145</td>
        <td>14.28</td>
    </tr>
    <tr>
        <td>UIIS15691220610</td>
        <td>1220x610x69</td>
        <td>1200</td>
        <td>U15</td>
        <td>145</td>
        <td>19.04</td>
    </tr>
    </table>`
    },
    //u2mc
    {
        id: 'ultracel-ii-mc', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u2hc.webp',

        name: {
            vi: 'Ultracel II - MC (HEPA Mini-pleat)',
            en: 'Ultracel II - MC (Medium Capacity Mini-pleat)'
        },
        desc: {
            vi: 'HEPA mỏng 69mm, lưu lượng gió trung bình (0.75m/s).',
            en: 'Slim 69mm Mini-pleat HEPA, Medium airflow capacity (0.75m/s).'
        },
        apps: {
            vi: ['Yêu cầu lưu lượng gió cao hơn trong không gian hẹp'],
            en: ['Higher airflow requirements in limited space']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14'],
            [{vi: 'Khung', en: 'Frame'}, 'Nhôm định hình (Anodized)'],
            [{vi: 'Vật liệu lọc', en: 'Media'}, {vi: 'Sợi thủy tinh', en: 'Glass fiber'}],
            [{vi: 'Vận tốc gió', en: 'Face Velocity'}, '0.75 m/s'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '70°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UIIM1369305305</td>
        <td>305x305x69</td>
        <td>250</td>
        <td>H13</td>
        <td>245</td>
        <td>2.56</td>
    </tr>
    <tr>
        <td>UIIM1369457457</td>
        <td>457x457x69</td>
        <td>550</td>
        <td>H13</td>
        <td>245</td>
        <td>5.76</td>
    </tr>
    <tr>
        <td>UIIM1369610305</td>
        <td>610x305x69</td>
        <td>500</td>
        <td>H13</td>
        <td>245</td>
        <td>5.13</td>
    </tr>
    <tr>
        <td>UIIM1369610610</td>
        <td>610x610x69</td>
        <td>1000</td>
        <td>H13</td>
        <td>245</td>
        <td>10.25</td>
    </tr>
    <tr>
        <td>UIIM1369762610</td>
        <td>762x610x69</td>
        <td>1250</td>
        <td>H13</td>
        <td>245</td>
        <td>12.81</td>
    </tr>
    <tr>
        <td>UIIM1369915610</td>
        <td>915x610x69</td>
        <td>1500</td>
        <td>H13</td>
        <td>245</td>
        <td>15.38</td>
    </tr>
    <tr>
        <td>UIIM13691220610</td>
        <td>1220x610x69</td>
        <td>2000</td>
        <td>H13</td>
        <td>245</td>
        <td>20.51</td>
    </tr>
    <tr>
        <td>UIIM1469305305</td>
        <td>305x305x69</td>
        <td>250</td>
        <td>H14</td>
        <td>275</td>
        <td>2.56</td>
    </tr>
    <tr>
        <td>UIIM1469457457</td>
        <td>457x457x69</td>
        <td>550</td>
        <td>H14</td>
        <td>275</td>
        <td>5.76</td>
    </tr>
    <tr>
        <td>UIIM1469610305</td>
        <td>610x305x69</td>
        <td>500</td>
        <td>H14</td>
        <td>275</td>
        <td>5.13</td>
    </tr>
    <tr>
        <td>UIIM1469610610</td>
        <td>610x610x69</td>
        <td>1000</td>
        <td>H14</td>
        <td>275</td>
        <td>10.25</td>
    </tr>
    <tr>
        <td>UIIM1469762610</td>
        <td>762x610x69</td>
        <td>1250</td>
        <td>H14</td>
        <td>275</td>
        <td>12.81</td>
    </tr>
    <tr>
        <td>UIIM1469915610</td>
        <td>915x610x69</td>
        <td>1500</td>
        <td>H14</td>
        <td>275</td>
        <td>15.38</td>
    </tr>
    <tr>
        <td>UIIM14691220610</td>
        <td>1220x610x69</td>
        <td>2000</td>
        <td>H14</td>
        <td>275</td>
        <td>20.51</td>
    </tr>
    <tr>
        <td>UIIM1590600600</td>
        <td>600x600x90</td>
        <td>1000</td>
        <td>H14</td>
        <td>305</td>
        <td>12.85</td>
    </tr>
    <tr>
        <td>UIIM15901240630</td>
        <td>1240x630x90</td>
        <td>2000</td>
        <td>H14</td>
        <td>305</td>
        <td>25.48</td>
    </tr>
    <tr>
        <td>UIIM1569305305</td>
        <td>305x305x69</td>
        <td>250</td>
        <td>U15</td>
        <td>305</td>
        <td>2.56</td>
    </tr>
    <tr>
        <td>UIIM1569457457</td>
        <td>457x457x69</td>
        <td>550</td>
        <td>U15</td>
        <td>305</td>
        <td>5.76</td>
    </tr>
    <tr>
        <td>UIIM1569610305</td>
        <td>610x305x69</td>
        <td>500</td>
        <td>U15</td>
        <td>305</td>
        <td>5.13</td>
    </tr>
    <tr>
        <td>UIIM1569610610</td>
        <td>610x610x69</td>
        <td>1000</td>
        <td>U15</td>
        <td>305</td>
        <td>10.25</td>
    </tr>
    </table>`
    },
    //u2hc
    {
        id: 'ultracel-ii-hc', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u2hc.webp',

        name: {
            vi: 'Ultracel II - HC (HEPA Mini-pleat)',
            en: 'Ultracel II - HC (High Capacity Mini-pleat)'
        },
        desc: {
            vi: 'HEPA Mini-pleat dày 110mm, lưu lượng gió cao (1.25m/s).',
            en: '110mm Mini-pleat HEPA, High airflow capacity (1.25m/s).'
        },
        apps: {
            vi: ['Hệ thống HVAC trung tâm', 'Lọc đầu cuối lưu lượng lớn'],
            en: ['Central HVAC systems', 'High volume terminal filtration']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14'],
            [{vi: 'Khung', en: 'Frame'}, 'GI / Nhôm / SS304'],
            [{vi: 'Vận tốc gió', en: 'Face Velocity'}, '1.25 m/s'],
            [{vi: 'Chênh áp ban đầu', en: 'Initial P.Drop'}, '265 - 320 Pa']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UIIH13110305305</td>
        <td>305x305x110</td>
        <td>375</td>
        <td>H13</td>
        <td>265</td>
        <td>4.52</td>
    </tr>
    <tr>
        <td>UIIH13110457457</td>
        <td>457x457x110</td>
        <td>850</td>
        <td>H13</td>
        <td>265</td>
        <td>10.15</td>
    </tr>
    <tr>
        <td>UIIH13110610305</td>
        <td>610x305x110</td>
        <td>750</td>
        <td>H13</td>
        <td>265</td>
        <td>9.05</td>
    </tr>
    <tr>
        <td>UIIH13110610610</td>
        <td>610x610x110</td>
        <td>1500</td>
        <td>H13</td>
        <td>265</td>
        <td>18.09</td>
    </tr>
    <tr>
        <td>UIIH13110762610</td>
        <td>762x610x110</td>
        <td>1875</td>
        <td>H13</td>
        <td>265</td>
        <td>22.6</td>
    </tr>
    <tr>
        <td>UIIH13110915610</td>
        <td>915x610x110</td>
        <td>2250</td>
        <td>H13</td>
        <td>265</td>
        <td>27.14</td>
    </tr>
    <tr>
        <td>UIIH131101220610</td>
        <td>1220x610x110</td>
        <td>3000</td>
        <td>H13</td>
        <td>265</td>
        <td>36.18</td>
    </tr>
    <tr>
        <td>UIIH14110305305</td>
        <td>305x305x110</td>
        <td>375</td>
        <td>H14</td>
        <td>320</td>
        <td>4.52</td>
    </tr>
    <tr>
        <td>UIIH14110457457</td>
        <td>457x457x110</td>
        <td>842</td>
        <td>H14</td>
        <td>320</td>
        <td>10.15</td>
    </tr>
    <tr>
        <td>UIIH14110610305</td>
        <td>610x305x110</td>
        <td>750</td>
        <td>H14</td>
        <td>320</td>
        <td>9.05</td>
    </tr>
    <tr>
        <td>UIIH14110610610</td>
        <td>610x610x110</td>
        <td>1500</td>
        <td>H14</td>
        <td>320</td>
        <td>18.09</td>
    </tr>
    <tr>
        <td>UIIH14110762610</td>
        <td>762x610x110</td>
        <td>1875</td>
        <td>H14</td>
        <td>320</td>
        <td>22.6</td>
    </tr>
    <tr>
        <td>UIIH14110915610</td>
        <td>915x610x110</td>
        <td>2250</td>
        <td>H14</td>
        <td>320</td>
        <td>27.14</td>
    </tr>
    <tr>
        <td>UIIH141101220610</td>
        <td>1220x610x110</td>
        <td>3000</td>
        <td>H14</td>
        <td>320</td>
        <td>36.18</td>
    </tr>
    <tr>
        <td>UIIH15110305305</td>
        <td>305x305x110</td>
        <td>375</td>
        <td>U15</td>
        <td>355</td>
        <td>4.52</td>
    </tr>
    <tr>
        <td>UIIH15110457457</td>
        <td>457x457x110</td>
        <td>842</td>
        <td>U15</td>
        <td>355</td>
        <td>10.15</td>
    </tr>
    <tr>
        <td>UIIH15110610305</td>
        <td>610x305x110</td>
        <td>750</td>
        <td>U15</td>
        <td>355</td>
        <td>9.05</td>
    </tr>
    <tr>
        <td>UIIH15110610610</td>
        <td>610x610x110</td>
        <td>1500</td>
        <td>U15</td>
        <td>355</td>
        <td>18.09</td>
    </tr>
    <tr>
        <td>UIIH15110762610</td>
        <td>762x610x110</td>
        <td>1875</td>
        <td>U15</td>
        <td>355</td>
        <td>22.6</td>
    </tr>
    <tr>
        <td>UIIH15110915610</td>
        <td>915x610x69</td>
        <td>2250</td>
        <td>U15</td>
        <td>355</td>
        <td>27.14</td>
    </tr>
    <tr>
        <td>UIIH151101220610</td>
        <td>1220x610x110</td>
        <td>3000</td>
        <td>U15</td>
        <td>355</td>
        <td>36.18</td>
    </tr>
    </table>`
    },
    //u2gel
    {
        id: 'ultracel-ii-gel', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u2gel.webp',

        name: {
            vi: 'Ultracel II - GEL (Gel Seal)',
            en: 'Ultracel II - GEL (Gel Seal HEPA)'
        },
        desc: {
            vi: 'HEPA rãnh Gel giúp làm kín tuyệt đối, ngăn ngừa rò rỉ khí.',
            en: 'Gel Seal HEPA filter for 100% leak-free sealing performance.'
        },
        apps: {
            vi: ['Phòng sạch dược phẩm (GMP)', 'Phòng mổ áp lực dương', 'Công nghệ sinh học'],
            en: ['Pharmaceutical Cleanrooms (GMP)', 'Positive pressure OT', 'Biotechnology']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14, U15'],
            [{vi: 'Khung', en: 'Frame'}, 'Nhôm định hình (Anodized)'],
            [{vi: 'Keo làm kín', en: 'Sealant'}, {vi: 'Gel Urethane (Xanh)', en: 'Urethane Gel (Blue)'}],
            [{vi: 'Vận tốc gió', en: 'Face Velocity'}, '0.45 m/s'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '70°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UIIGS1372305305</td>
        <td>305x305x72</td>
        <td>150</td>
        <td>H13</td>
        <td>110</td>
        <td>2.34</td>
    </tr>
    <tr>
        <td>UIIGS1372457457</td>
        <td>457x457x72</td>
        <td>330</td>
        <td>H13</td>
        <td>110</td>
        <td>5.29</td>
    </tr>
    <tr>
        <td>UIIGS1372610305</td>
        <td>610x305x72</td>
        <td>300</td>
        <td>H13</td>
        <td>110</td>
        <td>4.68</td>
    </tr>
    <tr>
        <td>UIIGS1372610610</td>
        <td>610x610x72</td>
        <td>600</td>
        <td>H13</td>
        <td>110</td>
        <td>9.44</td>
    </tr>
    <tr>
        <td>UIIGS1372762610</td>
        <td>762x610x72</td>
        <td>750</td>
        <td>H13</td>
        <td>110</td>
        <td>11.8</td>
    </tr>
    <tr>
        <td>UIIGS1372915610</td>
        <td>915x610x72</td>
        <td>900</td>
        <td>H13</td>
        <td>110</td>
        <td>14.17</td>
    </tr>
    <tr>
        <td>UIIGS13721220610</td>
        <td>1220x610x72</td>
        <td>1200</td>
        <td>H13</td>
        <td>110</td>
        <td>18.89</td>
    </tr>
    <tr>
        <td>UIIGS1472305305</td>
        <td>305x305x72</td>
        <td>150</td>
        <td>H14</td>
        <td>125</td>
        <td>2.34</td>
    </tr>
    <tr>
        <td>UIIGS1472457457</td>
        <td>457x457x72</td>
        <td>330</td>
        <td>H14</td>
        <td>125</td>
        <td>5.29</td>
    </tr>
    <tr>
        <td>UIIGS1472610305</td>
        <td>610x305x72</td>
        <td>300</td>
        <td>H14</td>
        <td>125</td>
        <td>4.68</td>
    </tr>
    <tr>
        <td>UIIGS1472610610</td>
        <td>610x610x72</td>
        <td>600</td>
        <td>H14</td>
        <td>125</td>
        <td>9.44</td>
    </tr>
    <tr>
        <td>UIIGS1472762610</td>
        <td>762x610x72</td>
        <td>750</td>
        <td>H14</td>
        <td>125</td>
        <td>11.8</td>
    </tr>
    <tr>
        <td>UIIGS1472915610</td>
        <td>915x610x72</td>
        <td>900</td>
        <td>H14</td>
        <td>125</td>
        <td>14.17</td>
    </tr>
    <tr>
        <td>UIIGS14721220610</td>
        <td>1220x610x72</td>
        <td>1200</td>
        <td>H14</td>
        <td>125</td>
        <td>18.89</td>
    </tr>
    <tr>
        <td>UIIGS1572305305</td>
        <td>305x305x72</td>
        <td>150</td>
        <td>U15</td>
        <td>145</td>
        <td>2.34</td>
    </tr>
    <tr>
        <td>UIIGS1572457457</td>
        <td>457x457x72</td>
        <td>330</td>
        <td>U15</td>
        <td>145</td>
        <td>5.29</td>
    </tr>
    <tr>
        <td>UIIGS1572610305</td>
        <td>610x305x72</td>
        <td>300</td>
        <td>U15</td>
        <td>145</td>
        <td>4.68</td>
    </tr>
    <tr>
        <td>UIIGS1572610610</td>
        <td>610x610x72</td>
        <td>600</td>
        <td>U15</td>
        <td>145</td>
        <td>9.44</td>
    </tr>
    <tr>
        <td>UIIGS1572762610</td>
        <td>762x610x72</td>
        <td>750</td>
        <td>U15</td>
        <td>145</td>
        <td>11.8</td>
    </tr>
    <tr>
        <td>UIIGS1572915610</td>
        <td>915x610x72</td>
        <td>900</td>
        <td>U15</td>
        <td>145</td>
        <td>14.17</td>
    </tr>
    <tr>
        <td>UIIGS15721220610</td>
        <td>1220x610x72</td>
        <td>1200</td>
        <td>U15</td>
        <td>145</td>
        <td>18.89</td>
    </tr>
    </table>`
    },
    //u2gel2
     {
        id: 'ultracel-ii-gelt2', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/u2gel2.webp',

        name: {
            vi: 'Ultracel II - GEL TYPE 2 (Gel Seal)',
            en: 'Ultracel II - GEL TYPE 2 (Gel Seal with Header)'
        },
        desc: {
            vi: 'HEPA rãnh Gel kín tuyệt đối, thiết kế có khung Header để lắp đặt dễ dàng.',
            en: 'Gel Seal HEPA with Header frame design for easy installation.'
        },
        apps: {
            vi: ['Thay thế lọc từ phía dưới trần (Room side replaceable)', 'Hệ thống Camfil / AF'],
            en: ['Room side replaceable systems', 'Camfil / AF compatible systems']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'H13, H14, U15'],
            [{vi: 'Khung', en: 'Frame'}, 'Nhôm đúc / Định hình'],
            [{vi: 'Kiểu dáng', en: 'Style'}, {vi: 'Rãnh Gel + Header', en: 'Gel Channel + Header'}],
            [{vi: 'Vận tốc gió', en: 'Face Velocity'}, '0.45 m/s']
        ],
         table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UIIG2S1393305305</td>
        <td>305x305x93</td>
        <td>150</td>
        <td>H13</td>
        <td>120</td>
        <td>2.34</td>
    </tr>
    <tr>
        <td>UIIG2S1393457457</td>
        <td>457x457x93</td>
        <td>330</td>
        <td>H13</td>
        <td>120</td>
        <td>5.29</td>
    </tr>
    <tr>
        <td>UIIG2S1393610305</td>
        <td>610x305x93</td>
        <td>300</td>
        <td>H13</td>
        <td>120</td>
        <td>4.68</td>
    </tr>
    <tr>
        <td>UIIG2S1393610610</td>
        <td>610x610x93</td>
        <td>600</td>
        <td>H13</td>
        <td>120</td>
        <td>9.44</td>
    </tr>
    <tr>
        <td>UIIG2S1393762610</td>
        <td>762x610x93</td>
        <td>750</td>
        <td>H13</td>
        <td>120</td>
        <td>11.8</td>
    </tr>
    <tr>
        <td>UIIG2S1393915610</td>
        <td>915x610x93</td>
        <td>900</td>
        <td>H13</td>
        <td>120</td>
        <td>14.17</td>
    </tr>
    <tr>
        <td>UIIG2S13931220610</td>
        <td>1220x610x93</td>
        <td>1200</td>
        <td>H13</td>
        <td>120</td>
        <td>18.89</td>
    </tr>
    <tr>
        <td>UIIG2S1493305305</td>
        <td>305x305x93</td>
        <td>150</td>
        <td>H14</td>
        <td>135</td>
        <td>2.34</td>
    </tr>
    <tr>
        <td>UIIG2S1493457457</td>
        <td>457x457x93</td>
        <td>330</td>
        <td>H14</td>
        <td>135</td>
        <td>5.29</td>
    </tr>
    <tr>
        <td>UIIG2S1493610305</td>
        <td>610x305x93</td>
        <td>300</td>
        <td>H14</td>
        <td>135</td>
        <td>4.68</td>
    </tr>
    <tr>
        <td>UIIG2S1493610610</td>
        <td>610x610x93</td>
        <td>600</td>
        <td>H14</td>
        <td>135</td>
        <td>9.44</td>
    </tr>
    <tr>
        <td>UIIG2S1493762610</td>
        <td>762x610x93</td>
        <td>750</td>
        <td>H14</td>
        <td>135</td>
        <td>11.8</td>
    </tr>
    <tr>
        <td>UIIG2S1493915610</td>
        <td>915x610x93</td>
        <td>900</td>
        <td>H14</td>
        <td>135</td>
        <td>14.17</td>
    </tr>
    <tr>
        <td>UIIG2S14931220610</td>
        <td>1220x610x93</td>
        <td>1200</td>
        <td>H14</td>
        <td>135</td>
        <td>18.89</td>
    </tr>
    <tr>
        <td>UIIG2S1593305305</td>
        <td>305x305x93</td>
        <td>150</td>
        <td>U15</td>
        <td>155</td>
        <td>2.34</td>
    </tr>
    <tr>
        <td>UIIG2S1593457457</td>
        <td>457x457x93</td>
        <td>330</td>
        <td>U15</td>
        <td>155</td>
        <td>5.29</td>
    </tr>
    <tr>
        <td>UIIG2S1593610305</td>
        <td>610x305x93</td>
        <td>300</td>
        <td>U15</td>
        <td>155</td>
        <td>4.68</td>
    </tr>
    <tr>
        <td>UIIG2S1593610610</td>
        <td>610x610x93</td>
        <td>600</td>
        <td>U15</td>
        <td>155</td>
        <td>9.44</td>
    </tr>
    <tr>
        <td>UIIG2S1593762610</td>
        <td>762x610x93</td>
        <td>750</td>
        <td>U15</td>
        <td>155</td>
        <td>11.8</td>
    </tr>
    <tr>
        <td>UIIG2S1593915610</td>
        <td>915x610x93</td>
        <td>900</td>
        <td>U15</td>
        <td>155</td>
        <td>14.17</td>
    </tr>
    <tr>
        <td>UIIG2S15931220610</td>
        <td>1220x610x93</td>
        <td>1200</td>
        <td>U15</td>
        <td>155</td>
        <td>18.89</td>
    </tr>
    </table>`
    },
    //uvabs
    {
        id: 'ultracel-v-abs', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/uv.webp',

        name: {
            vi: 'Ultracel V - ABS (HEPA V-Bank)',
            en: 'Ultracel V - ABS (Plastic V-Bank HEPA)'
        },
        desc: {
            vi: 'HEPA V-Bank khung nhựa ABS, lưu lượng gió cực lớn (lên đến 4000 m3/h).',
            en: 'High capacity V-Bank HEPA, ABS plastic frame, airflow up to 4000 m3/h.'
        },
        apps: {
            vi: ['Hệ thống HVAC trung tâm lớn', 'Thay thế cho bộ lọc túi', 'Bệnh viện, Điện tử'],
            en: ['Large central HVAC systems', 'Replacement for bag filters', 'Hospitals, Electronics']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'E11, H13, H14'],
            [{vi: 'Khung', en: 'Frame'}, {vi: 'Nhựa ABS', en: 'ABS Plastic'}],
            [{vi: 'Số V-Bank', en: 'No. of V-Banks'}, '4V'],
            [{vi: 'Lưới bảo vệ', en: 'Faceguard'}, {vi: 'Có', en: 'Yes'}],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '70°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Số Vee</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UVSP11292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>E11</td>
        <td>4</td>
        <td>175</td>
        <td>17.06</td>
    </tr>
    <tr>
        <td>UVSP11292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>E11</td>
        <td>4</td>
        <td>175</td>
        <td>7.63</td>
    </tr>
    <tr>
        <td>UVSP13292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>H13</td>
        <td>4</td>
        <td>195</td>
        <td>17.06</td>
    </tr>
    <tr>
        <td>UVSP13292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>H13</td>
        <td>4</td>
        <td>195</td>
        <td>7.63</td>
    </tr>
    <tr>
        <td>UVSP14292592592</td>
        <td>592x592x292</td>
        <td>3400</td>
        <td>H14</td>
        <td>4</td>
        <td>215</td>
        <td>17.06</td>
    </tr>
    <tr>
        <td>UVSP14292592287</td>
        <td>592x287x292</td>
        <td>1700</td>
        <td>H14</td>
        <td>4</td>
        <td>215</td>
        <td>7.63</td>
    </tr>
    <tr>
        <td>UVHP11292592592</td>
        <td>592x592x292</td>
        <td>4200</td>
        <td>E11</td>
        <td>4</td>
        <td>205</td>
        <td>20.71</td>
    </tr>
    <tr>
        <td>UVHP11292592287</td>
        <td>592x287x292</td>
        <td>2100</td>
        <td>E11</td>
        <td>4</td>
        <td>205</td>
        <td>9.27</td>
    </tr>
    <tr>
        <td>UVHP13292592592</td>
        <td>592x592x292</td>
        <td>4200</td>
        <td>H13</td>
        <td>4</td>
        <td>245</td>
        <td>20.71</td>
    </tr>
    <tr>
        <td>UVHP13292592287</td>
        <td>592x287x292</td>
        <td>2100</td>
        <td>H13</td>
        <td>4</td>
        <td>245</td>
        <td>9.27</td>
    </tr>
    <tr>
        <td>UVHP14292592592</td>
        <td>592x592x292</td>
        <td>4200</td>
        <td>H14</td>
        <td>4</td>
        <td>275</td>
        <td>20.71</td>
    </tr>
    </table>`
    },
    //uvg
    {
        id: 'ultracel-v-gi', 
        cat: 'Phòng Sạch',
        img: 'images/san-pham/uvg.webp',

        name: {
            vi: 'Ultracel V - GI (HEPA V-Bank Tôn)',
            en: 'Ultracel V - GI (Galvanized V-Bank HEPA)'
        },
        desc: {
            vi: 'HEPA V-Bank khung Tôn mạ kẽm (GI), kết cấu cứng cáp, chịu áp lực cao.',
            en: 'V-Bank HEPA filter with Galvanized Iron frame, robust and high pressure resistant.'
        },
        apps: {
            vi: ['Môi trường công nghiệp nặng', 'Yêu cầu chống cháy lan', 'Lưu lượng gió lớn'],
            en: ['Heavy industries', 'Fire retardant requirements', 'High airflow systems']
        },
        specs: [
            [{vi: 'Tiêu chuẩn', en: 'Class'}, 'E11, H13, H14'],
            [{vi: 'Khung', en: 'Frame'}, {vi: 'Tôn mạ kẽm (GI)', en: 'Galvanized Iron (GI)'}],
            [{vi: 'Số V-Bank', en: 'No. of V-Banks'}, '4V / 5V'],
            [{vi: 'Nhiệt độ tối đa', en: 'Max. Temp'}, '70°C']
        ],
        table: `<table class="tech-table">
        <thead>
        <th>Mã sản phẩm </th>
        <th>Quy cách  (mm)</th>
        <th>Lưu lượng  (m3/h)</th>
        <th>Cấp độ EN1822</th>
        <th>Số Vee</th>
        <th>Độ tổn thất áp suất ban đầu  (Pa)</th>
        <th>Diện tích lọc  (m2)</th>
    </thead>
        <tr>
        <td>UVSG11292610610</td>
        <td>610x610x292</td>    
        <td>3400</td>
        <td>E11</td>
        <td>4</td>
        <td>185</td>
        <td>21.1</td>
    </tr>
    <tr>
        <td>UVSG11292610305</td>
        <td>610x305x292</td>
        <td>1700</td>
        <td>E11</td>
        <td>4</td>
        <td>185</td>
        <td>10.5</td>
    </tr>
    <tr>
        <td>UVSG13292610610</td>
        <td>610x610x292</td>
        <td>3400</td>
        <td>H13</td>
        <td>4</td>
        <td>205</td>
        <td>21.1</td>
    </tr>
    <tr>
        <td>UVSG13292610305</td>
        <td>610x305x292</td>
        <td>1700</td>
        <td>H13</td>
        <td>4</td>
        <td>205</td>
        <td>10.5</td>
    </tr>
    <tr>
        <td>UVSG14292610610</td>
        <td>610x610x292</td>
        <td>3400</td>
        <td>H14</td>
        <td>4</td>
        <td>225</td>
        <td>21.1</td>
    </tr>
    <tr>
        <td>UVSG14292610305</td>
        <td>610x305x292</td>
        <td>1700</td>
        <td>H14</td>
        <td>4</td>
        <td>225</td>
        <td>10.5</td>
    </tr>
    <tr>
        <td>UVHG11292610610</td>
        <td>610x610x292</td>
        <td>4250</td>
        <td>E11</td>
        <td>5</td>
        <td>235</td>
        <td>26.4</td>
    </tr>
    <tr>
        <td>UVHG11292610305</td>
        <td>610x305x292</td>
        <td>2100</td>
        <td>E11</td>
        <td>5</td>
        <td>235</td>
        <td>13.2</td>
    </tr>
    <tr>
        <td>UVHG13292610610</td>
        <td>610x610x292</td>
        <td>4250</td>
        <td>H13</td>
        <td>5</td>
        <td>260</td>
        <td>26.4</td>
    </tr>
    <tr>
        <td>UVHG13292610305</td>
        <td>610x305x292</td>
        <td>2100</td>
        <td>H13</td>
        <td>5</td>
        <td>260</td>
        <td>13.2</td>
    </tr>
    <tr>
        <td>UVHG14292610610</td>
        <td>610x610x292</td>
        <td>4250</td>
        <td>H14</td>
        <td>5</td>
        <td>285</td>
        <td>26.4</td>
    </tr>
    <tr>
        <td>UVHG14292610305</td>
        <td>610x305x292</td>
        <td>2100</td>
        <td>H14</td>
        <td>5</td>
        <td>285</td>
        <td>13.2</td>
    </tr>
    </table>`
    },

    // --- 4. THIẾT BỊ (EQUIPMENT) ---
    {
        id: 'ffu', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/ffu.webp',
        
        name: {
            vi: 'Fan Filter Unit (FFU)',
            en: 'Fan Filter Unit (FFU)'
        },
        desc: {
            vi: 'Hộp lọc tích hợp quạt, cung cấp khí sạch cục bộ hoặc toàn phần.',
            en: 'Motorized air filtering unit for supplying purified air to cleanrooms.'
        },
        apps: {
            vi: ['Phòng sạch điện tử, Dược phẩm', 'Lắp ghép thành trần phòng sạch (Clean ceiling)'],
            en: ['Electronics, Pharma cleanrooms', 'Cleanroom ceiling grid installation']
        },
        drawing: 'images/ban-ve/ffu-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Housing Material'}, {vi: 'Thép sơn tĩnh điện / Inox 304', en: 'Powder Coated Steel / SS304'}],
            [{vi: 'Lưu lượng gió', en: 'Airflow'}, {vi: '0.45 m/s ± 20%', en: '0.45 m/s ± 20%'}],
            [{vi: 'Điều khiển', en: 'Control'}, {vi: '3 cấp / Vô cấp', en: '3-speed / Stepless'}],
            [{vi: 'Bộ lọc', en: 'Filter'}, 'HEPA H13 / ULPA U15'],
            [{vi: 'Độ ồn', en: 'Noise Level'}, '≤ 58 dB(A)'],
            [{vi: 'Nguồn điện', en: 'Power Supply'}, '220V / 1Ph / 50Hz']
        ]
        
    },
    {
        id: 'bfu', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/bfu.webp',

        name: {
            vi: 'Blower Filter Unit (BFU)',
            en: 'Blower Filter Unit (BFU)'
        },
        desc: {
            vi: 'Hộp lọc gắn quạt ly tâm, áp suất tĩnh cao, độ ồn thấp.',
            en: 'Air unit with centrifugal fan, high static pressure, low noise.'
        },
        apps: {
            vi: ['Hệ thống cần áp suất gió lớn', 'Dược phẩm, Phòng thí nghiệm'],
            en: ['High pressure requirements', 'Pharmaceuticals, Labs']
        },
        drawing: 'images/ban-ve/BFU-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Housing Material'}, {vi: 'Thép sơn tĩnh điện / Inox 304', en: 'Powder Coated Steel / SS304'}],
            [{vi: 'Quạt', en: 'Fan Type'}, {vi: 'Ly tâm', en: 'Centrifugal'}],
            [{vi: 'Lọc HEPA', en: 'Filter'}, 'H13 / H14 / U15'],
            [{vi: 'Độ ồn', en: 'Noise Level'}, '48 - 55 dB(A)'],
            [{vi: 'Nguồn điện', en: 'Power Supply'}, '220V / 1Ph / 50Hz']
        ]
        
    },
    {
        id: 'static-pass-box', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/spb.webp',

        name: {
            vi: 'Static Pass Box (Hộp chuyển hàng)',
            en: 'Static Pass Box'
        },
        desc: {
            vi: 'Hộp chuyển hàng tiêu chuẩn, khóa liên động ngăn nhiễm chéo.',
            en: 'Standard transfer hatch with interlock system to prevent cross-contamination.'
        },
        apps: {
            vi: ['Chuyển hàng giữa các phòng sạch', 'Dược phẩm, Điện tử'],
            en: ['Material transfer between cleanrooms', 'Pharma, Electronics']
        },
        drawing: 'images/ban-ve/Staticpassbox-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'SS304 / Powder Coated Steel'],
            [{vi: 'Khóa liên động', en: 'Interlock'}, {vi: 'Cơ / Điện tử', en: 'Mechanical / Electronic'}],
            [{vi: 'Đèn UV', en: 'UV Lamp'}, {vi: 'Tùy chọn diệt khuẩn', en: 'Optional'}],
            [{vi: 'Nguồn điện', en: 'Power'}, '220V / 50Hz']
        ]
    },
     {
        id: 'dynamic-pass-box', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/dpb.webp',

        name: {
            vi: 'Dynamic Pass Box (Tự làm sạch)',
            en: 'Dynamic Pass Box (Self-Cleaning)'
        },
        desc: {
            vi: 'Hộp chuyển hàng tích hợp quạt và lọc HEPA để làm sạch vật phẩm.',
            en: 'Pass box with built-in fan & HEPA filter for self-cleaning materials.'
        },
        apps: {
            vi: ['Chuyển hàng từ khu bẩn sang khu sạch', 'Yêu cầu vô trùng cao'],
            en: ['Dirty to clean area transfer', 'High sterility requirements']
        },
        drawing: 'images/ban-ve/Dynamicpassbox-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'SS304 / Powder Coated Steel'],
            [{vi: 'Bộ lọc', en: 'Filter'}, 'HEPA H13 (99.99%)'],
            [{vi: 'Khóa liên động', en: 'Interlock'}, {vi: 'Điện từ', en: 'Electronic / Magnetic'}],
            [{vi: 'Đồng hồ chênh áp', en: 'DOP Port / Gauge'}, {vi: 'Có', en: 'Included'}],
            [{vi: 'Đèn UV', en: 'UV Lamp'}, {vi: 'Tiêu chuẩn', en: 'Standard'}]
        ]
    },
    {
        id: 'air-shower', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/as.webp',

        name: {
            vi: 'Air Shower (Buồng tắm khí)',
            en: 'Air Shower'
        },
        desc: {
            vi: 'Buồng thổi khí sạch tốc độ cao để loại bỏ bụi trên người/hàng hóa.',
            en: 'High velocity air jets to remove particulate matter from personnel or cargo.'
        },
        apps: {
            vi: ['Cửa ra vào phòng sạch', 'Nhà máy điện tử, Thực phẩm'],
            en: ['Cleanroom entrance', 'Electronics, Food processing']
        },
        drawing: 'images/ban-ve/Airshower-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'SS304 / Powder Coated Steel'],
            [{vi: 'Vận tốc gió', en: 'Jet Velocity'}, '> 22 m/s'],
            [{vi: 'Số vòi phun', en: 'Nozzles'}, '12 - 36 (Tùy kích thước)'],
            [{vi: 'Bộ lọc', en: 'Filter'}, 'Pre-filter + HEPA H13'],
            [{vi: 'Thời gian thổi', en: 'Shower Duration'}, {vi: '10-99s (Điều chỉnh)', en: '10-99s (Adjustable)'}]
        ]
    },    
    {
        id: 'hepa-box', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/HB.webp',

        name: {
            vi: 'HEPA Box (Hộp lọc cửa gió)',
            en: 'HEPA Terminal Box'
        },
        desc: {
            vi: 'Hộp chứa lọc HEPA gắn trần, tích hợp mặt phân phối gió (Diffuser).',
            en: 'Ceiling mounted HEPA filter housing with integrated air diffuser.'
        },
        apps: {
            vi: ['Phòng sạch dược phẩm, Điện tử', 'Bệnh viện (Phòng mổ)'],
            en: ['Pharmaceutical, Electronics', 'Hospital Operating Theatres']
        },
        drawing: 'images/ban-ve/hepabox-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'SS304 / Powder Coated Steel'],
            [{vi: 'Kết nối', en: 'Connection'}, {vi: 'Ống gió mềm / Cổ tròn', en: 'Flexible duct / Round collar'}],
            [{vi: 'Bộ lọc', en: 'Filter'}, 'H13, H14, U15'],
            [{vi: 'Mặt khuếch tán', en: 'Diffuser'}, {vi: 'Tôn soi lỗ / Mặt Swirl', en: 'Perforated / Swirl'}],
            [{vi: 'Cổng kiểm tra', en: 'Test Port'}, {vi: 'DOP / PAO Test Port', en: 'DOP / PAO Test Port'}]
        ]
    },
    //fb
    {
        id: 'filter-box', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/FB.webp',

        name: {
            vi: 'Filter Box (Hộp lọc ống gió)',
            en: 'In-line Duct Filter Box'
        },
        desc: {
            vi: 'Hộp lọc thô và tinh lắp trực tiếp trên đường ống gió cấp hoặc hồi.',
            en: 'In-line filter housing for Pre & Fine filters, installed in supply/return ducts.'
        },
        apps: {
            vi: ['Hệ thống thông gió tòa nhà', 'Cấp khí tươi sạch'],
            en: ['Building ventilation', 'Fresh air supply systems']
        },
        drawing: 'images/ban-ve/bvftbox.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'Powder Coated Steel / SS304'],
            [{vi: 'Cấu hình lọc', en: 'Filter Stage'}, 'G4 + F8 (2 cấp)'],
            [{vi: 'Kết nối', en: 'Connection'}, {vi: 'Mặt bích (Flange)', en: 'Flange'}],
            [{vi: 'Cửa thăm', en: 'Access Door'}, {vi: 'Có (Bản lề tay khóa)', en: 'Yes (Hinged door)'}],
            [{vi: 'Đồng hồ áp', en: 'Pressure Gauge'}, {vi: 'Tùy chọn', en: 'Optional'}]
        ],
    },
        {
        id: 'laf', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/lmnaf.webp',

        name: {
            vi: 'LAF (Laminar Air Flow Unit)',
            en: 'LAF (Laminar Air Flow Unit)'
        },
        desc: {
            vi: 'Thiết bị tạo dòng khí chảy tầng (Class A) cục bộ, có thể di chuyển hoặc treo.',
            en: 'Local laminar flow unit (Class A/ISO 5), mobile or suspended type.'
        },
        apps: {
            vi: ['Dây chuyền chiết rót', 'Khu vực cân, pha chế', 'Phòng thí nghiệm'],
            en: ['Filling lines', 'Weighing/Dispensing booths', 'Laboratories']
        },
        drawing: 'images/ban-ve/LAF-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'SS304 / Powder Coated Steel'],
            [{vi: 'Màn che', en: 'Curtain'}, {vi: 'Rèm nhựa PVC chống tĩnh điện', en: 'Anti-static PVC Strip'}],
            [{vi: 'Bộ lọc', en: 'Filter'}, 'H14 / U15'],
            [{vi: 'Đèn', en: 'Lighting'}, 'LED (Tùy chọn đèn UV)'],
            [{vi: 'Nguồn điện', en: 'Power'}, '220V / 50Hz']
        ]
    },
     {
        id: 'lafc', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/lmnh.webp',

        name: {
            vi: 'LAF Ceiling (Trần khí sạch phòng mổ)',
            en: 'OT Laminar Flow Ceiling'
        },
        desc: {
            vi: 'Hệ thống trần cấp khí sạch chảy tầng chuyên dụng cho phòng mổ.',
            en: 'Laminar flow ceiling system specifically designed for Operating Theatres.'
        },
        apps: {
            vi: ['Phòng mổ (Operating Theatre)', 'Phòng hồi sức tích cực'],
            en: ['Operating Theatres', 'ICU / Recovery rooms']
        },
        drawing: 'images/ban-ve/LAFHOS-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'SS304 / SS316'],
            [{vi: 'Vận tốc gió', en: 'Air Velocity'}, '0.25 - 0.45 m/s'],
            [{vi: 'Màng căng', en: 'Diffuser'}, {vi: 'Lưới lụa khí động học (Monofilament)', en: 'Monofilament fabric / Perforated plate'}],
            [{vi: 'Bộ lọc', en: 'Filter'}, 'H14 (Gel Seal)'],
            [{vi: 'Đèn mổ', en: 'OT Light'}, {vi: 'Tương thích lỗ đèn trung tâm', en: 'Central hole compatible'}]
        ]
    },
    {
        id: 'bibo', 
        cat: 'Thiết Bị', 
        img: 'images/san-pham/bibo.webp',

        name: {
            vi: 'BIBO (Bag In Bag Out)',
            en: 'BIBO (Bag-In Bag-Out Housing)'
        },
        desc: {
            vi: 'Hệ thống thay lọc an toàn, ngăn người vận hành tiếp xúc với khí độc/mầm bệnh.',
            en: 'Safe change filter housing, prevents operator contact with hazardous contaminants.'
        },
        apps: {
            vi: ['Phòng thí nghiệm an toàn sinh học (BSL-3, BSL-4)', 'Bệnh viện truyền nhiễm', 'Nhà máy hạt nhân'],
            en: ['Bio-safety labs (BSL-3/4)', 'Isolation wards', 'Nuclear facilities']
        },
        drawing: 'images/ban-ve/BIBO-drawing.webp',
        specs: [
            [{vi: 'Vật liệu', en: 'Material'}, 'SS304 / SS316 (Kín khí)'],
            [{vi: 'Túi thay thế', en: 'Bagging System'}, {vi: 'Túi PVC kèm dây đai', en: 'PVC Bag with O-ring'}],
            [{vi: 'Hiệu suất', en: 'Efficiency'}, '99.995% @ MPPS'],
            [{vi: 'Kiểm tra', en: 'Testing'}, {vi: 'Có cổng Scan test', en: 'Integrated Scanning Port'}],
            [{vi: 'Tùy chọn', en: 'Option'}, {vi: 'Đèn UVC diệt khuẩn', en: 'UVC Germicidal Lamp'}]
        ]
    }
];

window.products = products;
