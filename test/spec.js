const expect = require('chai').expect;
const GenerateCustomerSalesMap = require('../acmeSales');
describe('GenerateCustomerSalesMap function', () => {
  it('check if it exists', () => {
    expect(GenerateCustomerSalesMap).to.be.ok;
  });
  const salesData = [
    {
      customerId: 1,
      orderId: 1,
      total: 3,
    },
    {
      customerId: 2,
      orderId: 2,
      total: 4,
    },
    {
      customerId: 1,
      orderId: 3,
      total: 10,
    },
    {
      customerId: 2,
      orderId: 4,
      total: 15,
    },
    {
      customerId: 3,
      orderId: 5,
      total: 20,
    },
    {
      customerId: 3,
      orderId: 6,
      total: 7,
    },
  ];
  const customerData = [
    {
      id: 1,
      name: 'Moe',
    },
    {
      id: 2,
      name: 'Larry',
    },
    {
      id: 3,
      name: 'Gary',
    },
  ];

  it('function return an object, not an array', () => {
    expect(typeof GenerateCustomerSalesMap(salesData, customerData)).to.eq(
      'object'
    );
    expect(
      Array.isArray(GenerateCustomerSalesMap(salesData, customerData))
    ).to.eq(false);
  });

  it('works with empty arrays passed as an argument', () => {
    expect(GenerateCustomerSalesMap([], [])).to.deep.eq({});
  });

  it('function return an object with names and total quantities', () => {
    expect(GenerateCustomerSalesMap(salesData, customerData)).to.deep.eq({
      Moe: 13,
      Larry: 19,
      Gary: 27,
    });
  });

  const newCustomerData = [
    {
      id: 1,
      name: 'Moe',
    },
    {
      id: 2,
      name: 'Larry',
    },
  ];
  it('function will not include if there is no name matching id', () => {
    expect(GenerateCustomerSalesMap(salesData, newCustomerData)).to.deep.eq({
      Moe: 13,
      Larry: 19,
    });
  });
});
