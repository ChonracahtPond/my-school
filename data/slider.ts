export const sliderItem = [
    { name: { EN: "Home", TH: "หน้าแรก" }, pathLink: "/", headMenu: [] },
    {
        name: { EN: "News", TH: "ข่าวสาร" }, pathLink: "/news", headMenu: [
            { name: { EN: "Activity", TH: "กิจกรรมองค์กร" }, pathLink: "/activity", headLink: '/news' },
        ]
    },
    {
        name: { EN: "About US", TH: "เกี่ยวกับเรา" }, pathLink: "/about", headMenu: [
            { name: { EN: "Team", TH: "ทีมงาน" }, pathLink: "/teams", headLink: '/about' },
            { name: { EN: "Our Services", TH: "บริการด้านอื่น" }, pathLink: "/our-services", headLink: '/about' },
        ]
    },
    { name: { EN: "Our Work", TH: "ผลงาน" }, pathLink: "/our-work", headMenu: [] },
    { name: { EN: "Contact", TH: "ติดต่อเรา" }, pathLink: "/contact", headMenu: [] },
];