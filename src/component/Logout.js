import React, { Component } from 'react';

class Logout extends Component {
 render() {
  return (
    <div classname="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div classname="modal-dialog" role="document">
            <div classname="modal-content">
                <div classname="modal-header">
                <h5 classname="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button classname="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div classname="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div classname="modal-footer">
                <button classname="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a classname="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
  );
 }
}

export default Logout;