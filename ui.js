class UI {
  constructor() {
    this.divProfile = document.getElementById("profile");
    this.divRepos = document.getElementById("repos");
    // this.divLastSearch = document.getElementById("lastSearch");
    this.divError = document.querySelector(".cardBody");
    this.githubName = document.getElementById("githubname");
    this.searchHistory = document.getElementById("last-users")
  }

  clearInputAfterEnterance() {
    this.githubName.value = "";
  }

  getUserInfo(user) {
    this.divProfile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong> ${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Followers  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Following  <span class="badge badge-light">${user.followig}</span>
                  </button>
                <button class="btn btn-danger">
                    Repos  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="company">${user.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>
        `;
  }

  getUserRepos(repo) {
    this.divRepos.innerHTML = `
    <h3 class="page-heading mb-3">Last Repos</h3>
    <div class="mb-2 card-body">
        <div class="row">
            <div class="col-md-2">
            <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <button class="btn btn-secondary">
                    Stars  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                </button>

                <button class="btn btn-info">
                    Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                </button>
        
            </div>
    </div>

    </div>
        `;
  }

  addUsernamesUIfromStorage(username){
      let users = Storage.getSearchHistoryfromStorage()

    this.searchHistory.innerHTML+=`
    <li class="list-group-item">${username}</li>`
  }

  clearSearchedHistoryFromUI(){
      this.searchHistory.innerHTML = ""
  }

  errorMessage(error) {
    this.divError.innerHTML = `
    <div class="alert alert-danger" role="alert">${error}</div>
    `;

    setTimeout(()=>{
        this.divError.innerHTML = ""
    },2500)
  }
}
