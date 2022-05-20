<template>
  <div class="main">
    <div class="section__content section__content--p30 mt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">                               
                    <div class="row">
                        <div class="col-3">
                            <h3 class="title-5 m-b-35">Dependants</h3>
                        </div>
                        <div class="col text-end">
                            <div style="max-width: 500px; float:right;">
                                <form action="">
                                    <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Search" name="SearchTerm">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Status</option>
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
                                    </select>
                                    <button class="input-group-text"><i class="fa-solid fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>   
                        <div class="col-2 text-end">
                            <button class="btn btn-outline-success add_dependant" data-toggle="modal" data-target="#dependantsModal">
                                <i class="fas fa-plus"></i> Add Dependant
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
                                        <td class="text-success">Active</td>
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
                                        <td class="text-danger">Inactive</td>
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
                                        <td class="text-success">Active</td>
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
        </div>
    </div>
  </div>
  
</template>


<script>
// @ is an alias to /src

export default {
  name: "DependantsView",
  components: {
  },
};
</script>