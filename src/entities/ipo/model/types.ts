export interface IPOData {
  id: number;
  name: string;
  symbol: string;
  date: string;
  priceRange: string;
  exchange: string;
  status: "open" | "closed" | "upcoming";
  image: string;
  minimumInvestment: string;
  lotSize: string;
  issueDates: { start: string; end: string };
  listedOn: string;
  listedPrice: string;
  listingGains: string;
  ipoTimeline: {
    biddingStart: string;
    biddingEnd: string;
    allotmentFinalization: string;
    refundInitiation: string;
    dematTransfer: string;
    listingDate: string;
  };
  aboutCompany: string;
}