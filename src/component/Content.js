import React, { Component } from 'react';

class Content extends Component {
 render() {
  return (
    <div id="content-wrapper" classname="d-flex flex-column">

    <div id="content">

      <nav classname="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        <button id="sidebarToggleTop" classname="btn btn-link d-md-none rounded-circle mr-3">
          <i classname="fa fa-bars"></i>
        </button>

        <form classname="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div classname="input-group">
            <input type="text" classname="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
            <div classname="input-group-append">
              <button classname="btn btn-primary" type="button">
                <i classname="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <ul classname="navbar-nav ml-auto">

          <li classname="nav-item dropdown no-arrow d-sm-none">
            <a classname="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i classname="fas fa-search fa-fw"></i>
            </a>
            <div classname="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form classname="form-inline mr-auto w-100 navbar-search">
                <div classname="input-group">
                  <input type="text" classname="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                  <div classname="input-group-append">
                    <button classname="btn btn-primary" type="button">
                      <i classname="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li classname="nav-item dropdown no-arrow mx-1">
            <a classname="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i classname="fas fa-bell fa-fw"></i>
              <span classname="badge badge-danger badge-counter">3+</span>
            </a>
            <div classname="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 classname="dropdown-header">
                Alerts Center
              </h6>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="mr-3">
                  <div classname="icon-circle bg-primary">
                    <i classname="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div classname="small text-gray-500">December 12, 2019</div>
                  <span classname="font-weight-bold">A new monthly report is ready to download!</span>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="mr-3">
                  <div classname="icon-circle bg-success">
                    <i classname="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div classname="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="mr-3">
                  <div classname="icon-circle bg-warning">
                    <i classname="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div classname="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div>
              </a>
              <a classname="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
            </div>
          </li>

          <li classname="nav-item dropdown no-arrow mx-1">
            <a classname="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i classname="fas fa-envelope fa-fw"></i>
              <span classname="badge badge-danger badge-counter">7</span>
            </a>
            <div classname="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
              <h6 classname="dropdown-header">
                Message Center
              </h6>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img classname="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt=""/>
                  <div classname="status-indicator bg-success"></div>
                </div>
                <div classname="font-weight-bold">
                  <div classname="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                  <div classname="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img classname="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt=""/>
                  <div classname="status-indicator"></div>
                </div>
                <div>
                  <div classname="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                  <div classname="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img classname="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt=""/>
                  <div classname="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div classname="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                  <div classname="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img classname="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt=""/>
                  <div classname="status-indicator bg-success"></div>
                </div>
                <div>
                  <div classname="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                  <div classname="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a classname="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
            </div>
          </li>

          <div classname="topbar-divider d-none d-sm-block"></div>

          <li classname="nav-item dropdown no-arrow">
            <a classname="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span classname="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
              <img classname="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
            </a>
            <div classname="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a classname="dropdown-item" href="#">
                <i classname="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a classname="dropdown-item" href="#">
                <i classname="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a classname="dropdown-item" href="#">
                <i classname="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div classname="dropdown-divider"></div>
              <a classname="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i classname="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>

        </ul>

      </nav>
      <div classname="container-fluid">

        <div classname="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 classname="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" classname="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i classname="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <div classname="row">

          <div classname="col-xl-3 col-md-6 mb-4">
            <div classname="card border-left-primary shadow h-100 py-2">
              <div classname="card-body">
                <div classname="row no-gutters align-items-center">
                  <div classname="col mr-2">
                    <div classname="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                    <div classname="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                  </div>
                  <div classname="col-auto">
                    <i classname="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div classname="col-xl-3 col-md-6 mb-4">
            <div classname="card border-left-success shadow h-100 py-2">
              <div classname="card-body">
                <div classname="row no-gutters align-items-center">
                  <div classname="col mr-2">
                    <div classname="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                    <div classname="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                  </div>
                  <div classname="col-auto">
                    <i classname="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div classname="col-xl-3 col-md-6 mb-4">
            <div classname="card border-left-info shadow h-100 py-2">
              <div classname="card-body">
                <div classname="row no-gutters align-items-center">
                  <div classname="col mr-2">
                    <div classname="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                    <div classname="row no-gutters align-items-center">
                      <div classname="col-auto">
                        <div classname="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                      </div>
                      <div classname="col">
                        <div classname="progress progress-sm mr-2">
                          <div classname="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classname="col-auto">
                    <i classname="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div classname="col-xl-3 col-md-6 mb-4">
            <div classname="card border-left-warning shadow h-100 py-2">
              <div classname="card-body">
                <div classname="row no-gutters align-items-center">
                  <div classname="col mr-2">
                    <div classname="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                    <div classname="h5 mb-0 font-weight-bold text-gray-800">18</div>
                  </div>
                  <div classname="col-auto">
                    <i classname="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classname="row">

          <div classname="col-xl-8 col-lg-7">
            <div classname="card shadow mb-4">
              <div classname="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 classname="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                <div classname="dropdown no-arrow">
                  <a classname="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i classname="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div classname="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div classname="dropdown-header">Dropdown Header:</div>
                    <a classname="dropdown-item" href="#">Action</a>
                    <a classname="dropdown-item" href="#">Another action</a>
                    <div classname="dropdown-divider"></div>
                    <a classname="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div classname="card-body">
                <div classname="chart-area">
                  <canvas id="myAreaChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          <div classname="col-xl-4 col-lg-5">
            <div classname="card shadow mb-4">
              <div classname="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 classname="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                <div classname="dropdown no-arrow">
                  <a classname="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i classname="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div classname="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div classname="dropdown-header">Dropdown Header:</div>
                    <a classname="dropdown-item" href="#">Action</a>
                    <a classname="dropdown-item" href="#">Another action</a>
                    <div classname="dropdown-divider"></div>
                    <a classname="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div classname="card-body">
                <div classname="chart-pie pt-4 pb-2">
                  <canvas id="myPieChart"></canvas>
                </div>
                <div classname="mt-4 text-center small">
                  <span classname="mr-2">
                    <i classname="fas fa-circle text-primary"></i> Direct
                  </span>
                  <span classname="mr-2">
                    <i classname="fas fa-circle text-success"></i> Social
                  </span>
                  <span classname="mr-2">
                    <i classname="fas fa-circle text-info"></i> Referral
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classname="row">

          <div classname="col-lg-6 mb-4">

            <div classname="card shadow mb-4">
              <div classname="card-header py-3">
                <h6 classname="m-0 font-weight-bold text-primary">Projects</h6>
              </div>
              <div classname="card-body">
                <h4 classname="small font-weight-bold">Server Migration <span classname="float-right">20%</span></h4>
                <div classname="progress mb-4">
                  <div classname="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 classname="small font-weight-bold">Sales Tracking <span classname="float-right">40%</span></h4>
                <div classname="progress mb-4">
                  <div classname="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 classname="small font-weight-bold">Customer Database <span classname="float-right">60%</span></h4>
                <div classname="progress mb-4">
                  <div classname="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 classname="small font-weight-bold">Payout Details <span classname="float-right">80%</span></h4>
                <div classname="progress mb-4">
                  <div classname="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4 classname="small font-weight-bold">Account Setup <span classname="float-right">Complete!</span></h4>
                <div classname="progress">
                  <div classname="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div classname="row">
              <div classname="col-lg-6 mb-4">
                <div classname="card bg-primary text-white shadow">
                  <div classname="card-body">
                    Primary
                    <div classname="text-white-50 small">#4e73df</div>
                  </div>
                </div>
              </div>
              <div classname="col-lg-6 mb-4">
                <div classname="card bg-success text-white shadow">
                  <div classname="card-body">
                    Success
                    <div classname="text-white-50 small">#1cc88a</div>
                  </div>
                </div>
              </div>
              <div classname="col-lg-6 mb-4">
                <div classname="card bg-info text-white shadow">
                  <div classname="card-body">
                    Info
                    <div classname="text-white-50 small">#36b9cc</div>
                  </div>
                </div>
              </div>
              <div classname="col-lg-6 mb-4">
                <div classname="card bg-warning text-white shadow">
                  <div classname="card-body">
                    Warning
                    <div classname="text-white-50 small">#f6c23e</div>
                  </div>
                </div>
              </div>
              <div classname="col-lg-6 mb-4">
                <div classname="card bg-danger text-white shadow">
                  <div classname="card-body">
                    Danger
                    <div classname="text-white-50 small">#e74a3b</div>
                  </div>
                </div>
              </div>
              <div classname="col-lg-6 mb-4">
                <div classname="card bg-secondary text-white shadow">
                  <div classname="card-body">
                    Secondary
                    <div classname="text-white-50 small">#858796</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div classname="col-lg-6 mb-4">

            <div classname="card shadow mb-4">
              <div classname="card-header py-3">
                <h6 classname="m-0 font-weight-bold text-primary">Illustrations</h6>
              </div>
              <div classname="card-body">
                <div classname="text-center">
                  <img classname="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt=""/>
                </div>
                <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw &rarr;</a>
              </div>
            </div>

            <div classname="card shadow mb-4">
              <div classname="card-header py-3">
                <h6 classname="m-0 font-weight-bold text-primary">Development Approach</h6>
              </div>
              <div classname="card-body">
                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                <p classname="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </div>
    <footer classname="sticky-footer bg-white">
      <div classname="container my-auto">
        <div classname="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2019</span>
        </div>
      </div>
    </footer>
    
  </div>
  );
 }
}

export default Content;