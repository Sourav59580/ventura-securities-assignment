import { IPOData } from "../../entities/ipo/model/types";

const dummyIPOList: IPOData[] = [
  {
    id: 1,
    name: "Tech Innovations Inc.",
    symbol: "TECH",
    date: "2024-11-01",
    priceRange: "$30 - $35",
    exchange: "NASDAQ",
    status: "open",
    image: "https://techinnovations.com/wp-content/uploads/2021/09/cropped-TechInnovationsfavicon-removebg-preview-32x32.png",
    minimumInvestment: "$1000",
    lotSize: "100 shares",
    issueDates: { start: "2024-10-28", end: "2024-10-31" },
    listedOn: "NASDAQ",
    listedPrice: "$33",
    listingGains: "5%",
    ipoTimeline: {
      biddingStart: "2024-10-28",
      biddingEnd: "2024-10-31",
      allotmentFinalization: "2024-11-02",
      refundInitiation: "2024-11-03",
      dematTransfer: "2024-11-04",
      listingDate: "2024-11-01",
    },
    aboutCompany:
      "Tech Innovations Inc. focuses on developing AI-driven software solutions for various industries.",
  },
  {
    id: 2,
    name: "Green Future Corp.",
    symbol: "GREEN",
    date: "2024-11-05",
    priceRange: "$25 - $30",
    exchange: "NYSE",
    status: "open",
    image: "http://greenfuture.in/wp-content/uploads/2019/11/Logo-copy.jpg",
    minimumInvestment: "$750",
    lotSize: "75 shares",
    issueDates: { start: "2024-11-01", end: "2024-11-04" },
    listedOn: "NYSE",
    listedPrice: "$28",
    listingGains: "7%",
    ipoTimeline: {
      biddingStart: "2024-11-01",
      biddingEnd: "2024-11-04",
      allotmentFinalization: "2024-11-06",
      refundInitiation: "2024-11-07",
      dematTransfer: "2024-11-08",
      listingDate: "2024-11-05",
    },
    aboutCompany:
      "Green Future Corp. specializes in renewable energy solutions, focusing on solar and wind technologies.",
  },
  {
    id: 3,
    name: "Health Plus Ltd.",
    symbol: "HPLS",
    date: "2024-10-25",
    priceRange: "$20 - $25",
    exchange: "NASDAQ",
    status: "closed",
    image: "https://www.healthplus.co.uk/images/simplecms/favicon.ico",
    minimumInvestment: "$500",
    lotSize: "50 shares",
    issueDates: { start: "2024-10-20", end: "2024-10-24" },
    listedOn: "NASDAQ",
    listedPrice: "$22",
    listingGains: "-2%",
    ipoTimeline: {
      biddingStart: "2024-10-20",
      biddingEnd: "2024-10-24",
      allotmentFinalization: "2024-10-26",
      refundInitiation: "2024-10-27",
      dematTransfer: "2024-10-28",
      listingDate: "2024-10-25",
    },
    aboutCompany:
      "Health Plus Ltd. offers innovative healthcare products and services aimed at improving quality of life.",
  },
  {
    id: 4,
    name: "Retail Giants Inc.",
    symbol: "RGI",
    date: "2024-11-10",
    priceRange: "$40 - $45",
    exchange: "NYSE",
    status: "upcoming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNt0SUNhesP-nDXdMHCBMtpjMoXOOpguV4w&s",
    minimumInvestment: "$2000",
    lotSize: "200 shares",
    issueDates: { start: "2024-11-06", end: "2024-11-09" },
    listedOn: "NYSE",
    listedPrice: "$43",
    listingGains: "8%",
    ipoTimeline: {
      biddingStart: "2024-11-06",
      biddingEnd: "2024-11-09",
      allotmentFinalization: "2024-11-11",
      refundInitiation: "2024-11-12",
      dematTransfer: "2024-11-13",
      listingDate: "2024-11-10",
    },
    aboutCompany:
      "Retail Giants Inc. is one of the largest retail companies, with stores across multiple continents.",
  },
  {
    id: 5,
    name: "NextGen Energy",
    symbol: "NGEN",
    date: "2024-11-15",
    priceRange: "$35 - $40",
    exchange: "NASDAQ",
    status: "upcoming",
    image: "https://pbs.twimg.com/profile_images/1118270032247701505/Bf3owJQb_400x400.png",
    minimumInvestment: "$1500",
    lotSize: "150 shares",
    issueDates: { start: "2024-11-11", end: "2024-11-14" },
    listedOn: "NASDAQ",
    listedPrice: "$38",
    listingGains: "4%",
    ipoTimeline: {
      biddingStart: "2024-11-11",
      biddingEnd: "2024-11-14",
      allotmentFinalization: "2024-11-16",
      refundInitiation: "2024-11-17",
      dematTransfer: "2024-11-18",
      listingDate: "2024-11-15",
    },
    aboutCompany:
      "NextGen Energy develops sustainable energy solutions with a focus on environmental conservation.",
  },
];

export default dummyIPOList;
