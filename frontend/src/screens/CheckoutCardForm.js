import React from 'react'

function CheckoutCardForm() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="card shadow p-4" style={{ width: '100%', maxWidth: '300px', backgroundColor: '#3C345D', color: 'white', borderRadius: '12px' }}>
            <div className="d-flex align-items-center mb-4">
              <div style={{ width: 30, height: 30, backgroundColor: '#F24E6E', borderRadius: '50%' }} />
              <div style={{ width: 30, height: 30, backgroundColor: '#F2C94C', borderRadius: '50%', marginLeft: '-15px' }} />
              <h5 className="ms-3 mb-0 fw-bold">The Card</h5>
            </div>
            <div className="mb-3 fs-5">1234 5678 9012 3456</div>
            <div className="mb-2">01 / 2018</div>
            <div>John Doe</div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow p-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
              </div>

              <div className="mb-3">
                <label className="form-label">Card Holder</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" placeholder="Address" rows="2" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiration Date</label>
                  <div className="d-flex gap-2">
                    <select className="form-select">
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                    </select>
                    <select className="form-select">
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">CVC</label>
                  <input type="text" className="form-control" placeholder="123" />
                  <small className="text-muted">Three or four digits, usually found on the back of the card</small>
                </div>
              </div>

              <button className="btn btn-success w-100">Proceed</button>
            </form>

            <div className="text-center mt-4">
              <img
                src="https://img.icons8.com/color/48/000000/visa.png"
                alt="Visa"
                className="me-2"
              />
              <img
                src="https://img.icons8.com/color/48/000000/mastercard.png"
                alt="Mastercard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCardForm
