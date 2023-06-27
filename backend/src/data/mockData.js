const mockData = {
  products: [
    {
      productId: 1,
      productName: "Product 1",
      productOwnerName: "John Doe",
      developers: {
        developer1: "Isabella Brooks",
        developer2: "Liam Patterson",
        developer3: "Ava Richardson",
        developer4: "Noah Thompson",
        developer5: "Sophia Davis"
      },
      scrumMasterName: "Elijah Ramirez",
      startDate: "2023/06/27",
      methodology: "Agile",
      location: "https://github.com/bcgov/nr-spar"
    },
    {
      productId: 2,
      productName: "Product 2",
      productOwnerName: "Jane Smith",
      developers: {
        developer1: "Mia Cooper",
        developer2: "Alexandra Wright",
        developer3: "Olivia Mitchell",
        developer4: "Benjamin Price",
        developer5: "Charlotte Morgan"
      },
      scrumMasterName: "Lucas Hughes",
      startDate: "2023/07/01",
      methodology: "Waterfall",
      location: "https://github.com/bcgov/CIOT"
    },
  ]
};

module.exports = mockData;