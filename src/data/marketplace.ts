export interface MarketplaceData {
  batteryId: string;

  estimatedValue: string;
  sellingPrice: string;

  seller: string;
  sellerRating: number;

  location: string;

  condition: string;

  listedDate: string;

  interestedBuyers: number;
  views: number;

  inspectionStatus: string;
  deliveryTime: string;

  warrantyTransfer: boolean;

  paymentMethod: string;

  serviceCenter: string;

  marketStatus: string;

  listingType: string;

  deliveryCharge: string;

  marketRecommendation: string;

  marketScore: number;

  buyerInterest: string;

  expectedSellingTime: string;
}

export const marketplaceData: MarketplaceData[] = [

{
batteryId:"RV-TM3-2026-001245",
estimatedValue:"₹4,95,000",
sellingPrice:"₹4,85,000",
seller:"GreenVolt EV Motors",
sellerRating:4.9,
location:"New Delhi",
condition:"Excellent",
listedDate:"05 Jul 2026",
interestedBuyers:12,
views:248,
inspectionStatus:"Available",
deliveryTime:"2 Days",
warrantyTransfer:true,
paymentMethod:"Secure Escrow",
serviceCenter:"Tesla Service Center - Delhi",
marketStatus:"Available",
listingType:"Premium",
deliveryCharge:"Free",
marketRecommendation:"High demand battery. Premium listing recommended.",
marketScore:97,
buyerInterest:"Very High",
expectedSellingTime:"2-3 Days"
},

{
batteryId:"RV-TMY-2026-002145",
estimatedValue:"₹5,60,000",
sellingPrice:"₹5,45,000",
seller:"Elite EV Exchange",
sellerRating:5.0,
location:"Mumbai",
condition:"Like New",
listedDate:"06 Jul 2026",
interestedBuyers:19,
views:352,
inspectionStatus:"Available",
deliveryTime:"1 Day",
warrantyTransfer:true,
paymentMethod:"Secure Escrow",
serviceCenter:"Tesla Mumbai",
marketStatus:"Trending",
listingType:"Premium+",
deliveryCharge:"Free",
marketRecommendation:"Excellent battery with extremely high demand.",
marketScore:100,
buyerInterest:"Extremely High",
expectedSellingTime:"Within 24 Hours"
},

{
batteryId:"RV-TMS-2026-003412",
estimatedValue:"₹7,20,000",
sellingPrice:"₹7,05,000",
seller:"Luxury EV Gallery",
sellerRating:4.9,
location:"Bengaluru",
condition:"Excellent",
listedDate:"04 Jul 2026",
interestedBuyers:15,
views:301,
inspectionStatus:"Available",
deliveryTime:"2 Days",
warrantyTransfer:true,
paymentMethod:"Secure Escrow",
serviceCenter:"Tesla Bengaluru",
marketStatus:"Available",
listingType:"Premium",
deliveryCharge:"Free",
marketRecommendation:"Premium battery with outstanding health score.",
marketScore:99,
buyerInterest:"Very High",
expectedSellingTime:"2 Days"
},

{
batteryId:"RV-BE6-2026-002730",
estimatedValue:"₹3,20,000",
sellingPrice:"₹3,05,000",
seller:"EcoDrive Motors",
sellerRating:4.6,
location:"Pune",
condition:"Very Good",
listedDate:"02 Jul 2026",
interestedBuyers:6,
views:118,
inspectionStatus:"Booked",
deliveryTime:"4 Days",
warrantyTransfer:true,
paymentMethod:"Escrow",
serviceCenter:"Mahindra EV Hub",
marketStatus:"Available",
listingType:"Verified",
deliveryCharge:"₹2,000",
marketRecommendation:"Competitive pricing will improve buyer response.",
marketScore:89,
buyerInterest:"High",
expectedSellingTime:"5 Days"
},

{
batteryId:"RV-FLEET-2026-009999",
estimatedValue:"₹65,000",
sellingPrice:"₹58,000",
seller:"Metro Fleet Services",
sellerRating:4.2,
location:"Delhi NCR",
condition:"Needs Replacement",
listedDate:"01 Jul 2026",
interestedBuyers:1,
views:39,
inspectionStatus:"Required",
deliveryTime:"7 Days",
warrantyTransfer:false,
paymentMethod:"Advance Payment",
serviceCenter:"Fleet Service Center",
marketStatus:"Limited Demand",
listingType:"Standard",
deliveryCharge:"₹5,000",
marketRecommendation:"Recommended for recycling or second-life energy storage.",
marketScore:48,
buyerInterest:"Low",
expectedSellingTime:"2 Weeks"
},

{
batteryId:"RV-NEXON-2026-004522",
estimatedValue:"₹2,45,000",
sellingPrice:"₹2,35,000",
seller:"EV Hub Bangalore",
sellerRating:4.7,
location:"Bengaluru",
condition:"Good",
listedDate:"03 Jul 2026",
interestedBuyers:8,
views:167,
inspectionStatus:"Scheduled",
deliveryTime:"4 Days",
warrantyTransfer:true,
paymentMethod:"Escrow",
serviceCenter:"Tata EV Service",
marketStatus:"Available",
listingType:"Verified",
deliveryCharge:"₹2,500",
marketRecommendation:"Healthy battery with good resale demand.",
marketScore:90,
buyerInterest:"High",
expectedSellingTime:"4-6 Days"
},

{
batteryId:"RV-MGZS-2026-008221",
estimatedValue:"₹2,95,000",
sellingPrice:"₹2,80,000",
seller:"Future EV Marketplace",
sellerRating:4.8,
location:"Chennai",
condition:"Good",
listedDate:"04 Jul 2026",
interestedBuyers:5,
views:104,
inspectionStatus:"Pending",
deliveryTime:"5 Days",
warrantyTransfer:true,
paymentMethod:"Secure Escrow",
serviceCenter:"MG EV Care",
marketStatus:"Negotiation",
listingType:"Featured",
deliveryCharge:"Free",
marketRecommendation:"Inspection recommended before final sale.",
marketScore:84,
buyerInterest:"Medium",
expectedSellingTime:"1 Week"
},

{
batteryId:"RV-MG4-2026-003112",
estimatedValue:"₹4,15,000",
sellingPrice:"₹4,00,000",
seller:"Prime EV Dealers",
sellerRating:4.9,
location:"Hyderabad",
condition:"Excellent",
listedDate:"07 Jul 2026",
interestedBuyers:13,
views:236,
inspectionStatus:"Available",
deliveryTime:"2 Days",
warrantyTransfer:true,
paymentMethod:"Secure Escrow",
serviceCenter:"MG Service Center",
marketStatus:"Trending",
listingType:"Premium",
deliveryCharge:"Free",
marketRecommendation:"Excellent battery. Premium listing suggested.",
marketScore:98,
buyerInterest:"Very High",
expectedSellingTime:"2 Days"
},

{
batteryId:"RV-BYD-2026-005821",
estimatedValue:"₹5,10,000",
sellingPrice:"₹4,95,000",
seller:"Future Mobility Pvt Ltd",
sellerRating:4.9,
location:"Chennai",
condition:"Excellent",
listedDate:"06 Jul 2026",
interestedBuyers:11,
views:221,
inspectionStatus:"Available",
deliveryTime:"2 Days",
warrantyTransfer:true,
paymentMethod:"Escrow",
serviceCenter:"BYD India",
marketStatus:"Available",
listingType:"Premium",
deliveryCharge:"Free",
marketRecommendation:"Strong market demand with excellent battery condition.",
marketScore:95,
buyerInterest:"Very High",
expectedSellingTime:"2-3 Days"
},

{
batteryId:"RV-XUV400-2026-007452",
estimatedValue:"₹2,70,000",
sellingPrice:"₹2,55,000",
seller:"Mahindra Certified Exchange",
sellerRating:4.5,
location:"Ahmedabad",
condition:"Fair",
listedDate:"01 Jul 2026",
interestedBuyers:4,
views:91,
inspectionStatus:"Pending",
deliveryTime:"6 Days",
warrantyTransfer:true,
paymentMethod:"Escrow",
serviceCenter:"Mahindra EV Care",
marketStatus:"Available",
listingType:"Standard",
deliveryCharge:"₹3,000",
marketRecommendation:"Lowering price slightly can attract more buyers.",
marketScore:82,
buyerInterest:"Medium",
expectedSellingTime:"8-10 Days"
},

{
batteryId:"RV-IQ5-2026-009321",
estimatedValue:"₹5,75,000",
sellingPrice:"₹5,60,000",
seller:"Hyundai EV World",
sellerRating:4.9,
location:"Hyderabad",
condition:"Excellent",
listedDate:"08 Jul 2026",
interestedBuyers:17,
views:310,
inspectionStatus:"Available",
deliveryTime:"1 Day",
warrantyTransfer:true,
paymentMethod:"Secure Escrow",
serviceCenter:"Hyundai EV Care",
marketStatus:"Trending",
listingType:"Premium",
deliveryCharge:"Free",
marketRecommendation:"Highly desirable battery with excellent resale potential.",
marketScore:98,
buyerInterest:"Very High",
expectedSellingTime:"1-2 Days"
},

{
batteryId:"RV-EC3-2026-002118",
estimatedValue:"₹2,15,000",
sellingPrice:"₹2,05,000",
seller:"EcoRide Solutions",
sellerRating:4.4,
location:"Jaipur",
condition:"Very Good",
listedDate:"05 Jul 2026",
interestedBuyers:5,
views:89,
inspectionStatus:"Available",
deliveryTime:"5 Days",
warrantyTransfer:true,
paymentMethod:"Escrow",
serviceCenter:"Citroen EV Workshop",
marketStatus:"Available",
listingType:"Verified",
deliveryCharge:"₹2,000",
marketRecommendation:"Affordable option for first-time EV buyers.",
marketScore:88,
buyerInterest:"Medium",
expectedSellingTime:"6 Days"
},

{
batteryId:"RV-KONA-2026-006742",
estimatedValue:"₹3,05,000",
sellingPrice:"₹2,90,000",
seller:"Electra Auto Exchange",
sellerRating:4.6,
location:"Kochi",
condition:"Good",
listedDate:"02 Jul 2026",
interestedBuyers:6,
views:112,
inspectionStatus:"Inspection Required",
deliveryTime:"4 Days",
warrantyTransfer:true,
paymentMethod:"Escrow",
serviceCenter:"Hyundai EV Care",
marketStatus:"Available",
listingType:"Standard",
deliveryCharge:"₹2,500",
marketRecommendation:"Battery calibration recommended before listing.",
marketScore:80,
buyerInterest:"Medium",
expectedSellingTime:"7-9 Days"
},

{
batteryId:"RV-WINDSOR-2026-001987",
estimatedValue:"₹4,60,000",
sellingPrice:"₹4,50,000",
seller:"MG Certified Marketplace",
sellerRating:5.0,
location:"Noida",
condition:"Like New",
listedDate:"08 Jul 2026",
interestedBuyers:22,
views:387,
inspectionStatus:"Available",
deliveryTime:"1 Day",
warrantyTransfer:true,
paymentMethod:"Secure Escrow",
serviceCenter:"MG EV Service Center",
marketStatus:"Trending",
listingType:"Premium+",
deliveryCharge:"Free",
marketRecommendation:"Almost new battery with exceptional demand.",
marketScore:100,
buyerInterest:"Extremely High",
expectedSellingTime:"Within 24 Hours"
}

];