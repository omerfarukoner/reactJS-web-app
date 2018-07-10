import React from 'react';

const PasswordReset = ({onViewChange}) => (
    <div>
        <form className="form-inline">
          <div className="form-group">
            <input style={{width:"350px",marginRight : "10px"}} type="text" className="form-control" placeholder="E-Posta" />
          </div>
          
          <button type="button" className="btn btn-primary">
            Şifremi Resetle!
          </button>
          
        </form>

        <p>
         Üye girişi yapmak için{" "}
          <b>
            <u>
              <a style={{ fontSize: "18px" }} href="#" onClick={e => {
                e.preventDefault;
                onViewChange(1);
                }}>
                tıklayınız.
              </a>
            </u>
          </b>
        </p>
    </div>
)
export default PasswordReset;