<template>
    <div>
        <SideBarComp/>
        <NavBarComp/>
        <div class="content-wrap">
            <div class="main">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <HeaderComp page="Support Members" pageDesc="list of all support members"/>                
                        <section id="main-content">
                            <div class="row ps-3 pe-3">
                                <div class="col-md-12">                               
                                    <div class="row">
                                        <div class="col text-end">
                                            <div style="max-width: 500px; float:right;">
                                                <form action="">
                                                    <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder="Search" name="SearchTerm">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Status</option>
                                                        <option value="1">Pending Approval</option>
                                                        <option value="2">Approved</option>
                                                        <option value="3">Ban</option>
                                                        <option value="3">Rejected</option>
                                                    </select>
                                                    <button class="input-group-text"><i class="fa-solid fa-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>   
                                        <div class="col-3 text-end">
                                            <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#supportMemberModal">
                                                <i class="fas fa-plus"></i> Add Member
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <div class="table-responsive table-responsive-data2">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Full Name</th>
                                                    <th scope="col">Contact</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">1</th>
                                                        <td>Mark Mantey</td>
                                                        <td>1-190-23548</td>
                                                        <td>mantemark@gmail.com</td>
                                                        <td>Pending Approval</td>
                                                        <td>
                                                            <div to="/" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i class="fa-solid fa-ellipsis position-relative"></i>
                                                            </div>
                                                            <div class="dropdown-menu text-small shadow" aria-labelledby="dropdownDependant1">
                                                                <li class="d-flex">                                                    
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-pencil"></i>
                                                                    </div>                                                  
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-trash"></i>
                                                                    </div>                                                  
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">2</th>
                                                        <td>Jacob Peniam</td>
                                                        <td>+443 245 698 7899</td>
                                                        <td>mantemark@gmail.com</td>
                                                        <td>Rejected</td>
                                                        <td>
                                                            <div to="/" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i class="fa-solid fa-ellipsis position-relative"></i>
                                                            </div>
                                                            <div class="dropdown-menu text-small shadow" aria-labelledby="dropdownDependant2">
                                                                <li class="d-flex">                                                    
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-pencil"></i>
                                                                    </div>                                                  
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-trash"></i>
                                                                    </div>                                                  
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">3</th>
                                                        <td>Rochelle Kosneich</td>
                                                        <td>00420 777 876 526</td>
                                                        <td>rochelle.kosneich@gmail.com</td>
                                                        <td>Banned</td>
                                                        <td>
                                                            <div to="/" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i class="fa-solid fa-ellipsis position-relative"></i>
                                                            </div>
                                                            <div class="dropdown-menu text-small shadow" aria-labelledby="dropdownDependant3">
                                                                <li class="d-flex">                                                    
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-pencil"></i>
                                                                    </div>                                                  
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-trash"></i>
                                                                    </div>                                                  
                                                                    <div class="btn" title="">
                                                                        <i class="fa-solid fa-check"></i>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <FooterComp/>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="supportMemberModal" tabindex="-1" aria-labelledby="supportMemberModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="supportMemberModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import SideBarComp from "@/components/SideBarComp.vue"
import NavBarComp from "@/components/NavBarComp.vue"

export default {
  name: "SupportMembersView",
  components: {
    HeaderComp, 
    FooterComp,
    SideBarComp, 
    NavBarComp,
  },
};
</script>