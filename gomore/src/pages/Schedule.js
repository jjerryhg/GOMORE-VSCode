import React from "react";

class Schedule extends React.Component {
    render() {
        return (
            <main>
                <nav class="topnav-container">
                    <div id="toggle-topleft-sidenav" class="topleft-sidenav">
                        <div class="dropdown">
                        <button href="#" onclick="mydropFunction('myDropdown')" class="topleft-sidenav-dropbtn">Model Library
                            <i id="arrow" class="arrow"></i>
                        </button>
                        <div class="dropdown-content" id="myDropdown">
                            <a href="#">aaa</a>
                            <br />
                            <a href="#">bbb</a>
                            <br />
                            <a href="#">ccc</a>
                        </div>
                        </div>
                        <div class="dropdown">
                        <button href="#" onclick="mydropFunction('myDropdown-1')" class="topleft-sidenav-dropbtn">Fabrication Center
                            <i id="arrow" class="arrow"></i>
                        </button>
                        <div class="dropdown-content" id="myDropdown-1">
                            <a href="#">ddd</a>
                            <br />
                            <a href="#">eee</a>
                            <br />
                            <a href="#">fff</a>
                        </div>
                        </div>
                        <div class="dropdown">
                        <button href="#" onclick="mydropFunction('myDropdown-2')" class="topleft-sidenav-dropbtn">Schedule Viewer
                            <i id="arrow" class="arrow"></i>
                        </button>
                        <div class="dropdown-content" id="myDropdown-2">
                            <a href="#">ggg</a>
                            <br />
                            <a href="#">hhh</a>
                            <br />
                            <a href="#">iii</a>
                        </div>
                        </div>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" onclick="topleftNav()" style={{zIndex: "2"}}>
                        <div class="animated-icon"><span></span><span></span><span></span></div>
                    </button>
                    <div class="logo-box">
                        <a href="#" target="_blank">
                        <img src="/Model Library/ntust-logo.png" class="topnav-logo" />
                        </a>
                    </div> 
            
                    <div class="topright-sidenav" id="toggle-topright-sidenav">
                        <div class="dropdown">
                        <a href="index.html"><button class="topleft-sidenav-dropbtn">
                            Log In
                        </button></a>
                        {/* <button href="#" onclick="mydropFunction('myDropdown-6')" class="topleft-sidenav-dropbtn">Model Library
                            <i id="arrow" class="arrow"></i>
                        </button>
                        <div class="dropdown-content" id="myDropdown-6">
                            <a href="#">aaa</a>
                            <br>
                            <a href="#">bbb</a>
                            <br>
                            <a href="#">ccc</a>
                        </div>  */}
                        </div>
                    </div>
                        <button id="toggle-usermenu-btn" class="toggle-usermenu-btn" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" onclick="toprightNav()" style={{zIndex: "2"}}>
                        
                        <div class="topright-nav-closebtn"><span></span><span></span><span></span></div>
                        </button>
                        <i class="bi bi-person" id="user-icon"></i>
                </nav>

                {/* SIDENAV */}
                <aside>
                    <a id="arrow-toggle" onmouseenter="showSidenav()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </a>
                    <div class="aside-container" id="aside-container">
                        <div class="side-navbar">
                            <div class="dropup">
                                <button onclick="toggleTable('myTable')" type="button" class="dropbtn">Info</button>
                            </div>
                            <div class="dropup">
                                <button class="dropbtn" onclick="mydropFunction('myDropdown-4')">Display</button>
                                <div class="dropup-content" id="myDropdown-4">
                                    <a href="#" onclick="toggleTable('myTable')">None</a>
                                    <hr />
                                    <a href="#" onclick="toggleTable('myTable-mode-1')">Section Box</a>
                                    <hr />
                                    <a href="#" onclick="toggleTable('myTable-mode-2')">Level Plan</a>
                                    <hr />
                                    <a href="#" onclick="toggleTable('myTable-mode-3')">Elevation</a>
                                    <hr />
                                </div>
                            </div>
                            <div class="dropup" id="search">
                                <button type="button" class="dropbtn" onclick="mydropFunction('myDropdown-5')">Search</button>
                                <div class="dropup-content" id="myDropdown-5">
                                    <input type="text" class="search-input" placeholder="Search..." />
                                    <span>
                                        <button class="search-btn" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div class="dropup">
                                <button class="dropbtn">Status</button>
                            </div>
                        </div>
                    </div>
                </aside>
                {/* TABLE-INFO */}
                <div class="table-info-hidden" id="myTable">
                    <table>
                        <thead>
                            <caption>Info</caption>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{width: "100px"}} data-th="Name">Name</th>
                                <th style={{width: "150px"}} data-th="Name-value">N005</th>
                
                            </tr>
                            <tr>
                                <td data-th="Type">Type</td>
                                <td data-th="Type-value">GL</td>
                
                            </tr>
                            <tr>
                                <td data-th="Item-ID">ID</td>
                                <td data-th="Item-ID-value">00000000</td>
                
                            </tr>
                            <tr>
                                <td data-th="Locate">Locate</td>
                                <td data-th="Locate-value">2F-E-ABC</td>
                
                            </tr>
                            <tr>
                                <td data-th="Status">Status</td>
                                <td data-th="Status-value">未安裝</td>
                
                            </tr>
                        </tbody>
                        <tfoot>
                            <div>
                                <button class="table-info-closebtn" onclick="toggleTable('myTable')">Close</button>
                            </div>
                        </tfoot>
                    </table>
                </div>

                    {/* Table - 1 */}
                    <div class="table-info-hidden" id="myTable-mode-1">
                        <table>
                        <thead>
                            <caption>Info Mode</caption>
                        </thead>
                        <tbody>
                        <tr>
                            <th style={{width: "200px"}}>Mode 1</th>
                            <th style={{width: "50px"}}>ON</th>
                            <th style={{width: "50px"}}>OFF</th>
                        </tr>
                        <tr>
                            <td data-th="Name">Name</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Type">Type</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Item-ID">ID</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Locate">Locate</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Status">Status</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        </tbody>
                        <tfoot>
                                <div>
                                <button class="table-info-closebtn" onclick="toggleTable('myTable-mode-1')">Close</button>
                                </div>  
                        </tfoot>
                        </table>
                    </div>

                    {/* Table 2 */}
                    <div class="table-info-hidden" id="myTable-mode-2">
                        <table>
                        <thead>
                            <caption>Info Mode</caption>
                        </thead>
                        <tbody>
                        <tr>
                            <th style={{width: "200px"}}>Mode 2</th>
                            <th style={{width: "50px"}}>ON</th>
                            <th style={{width: "50px"}}>OFF</th>
                        </tr>
                        <tr>
                            <td data-th="Name">Name</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Type">Type</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Item-ID">ID</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Locate">Locate</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Status">Status</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        </tbody>
                        <tfoot>
                                <div>
                                <button class="table-info-closebtn" onclick="toggleTable('myTable-mode-2')">Close</button>
                                </div>  
                        </tfoot>
                        </table>
                    </div>

                    {/* Table 3 */}
                    <div class="table-info-hidden" id="myTable-mode-3">
                        <table>
                        <thead>
                            <caption>Info Mode</caption>
                        </thead>
                        <tbody>
                        <tr>
                            <th style={{width: "200px"}}>Mode 3</th>
                            <th style={{width: "50px"}}>ON</th>
                            <th style={{width: "50px"}}>OFF</th>
                        </tr>
                        <tr>
                            <td data-th="Name">Name</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Type">Type</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Item-ID">ID</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Locate">Locate</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        <tr>
                            <td data-th="Status">Status</td>
                            <td data-th="ON">v</td>
                            <td data-th="OFF">x</td>
                        </tr>
                        </tbody>
                        <tfoot>
                                <div>
                                <button class="table-info-closebtn" onclick="toggleTable('myTable-mode-3')">Close</button>
                                </div>  
                        </tfoot>
                        </table>
                    </div> 

            </main>
        )
        
    }
}

export default Schedule;