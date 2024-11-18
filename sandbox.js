const xhr = new XMLHttpRequest();
xhr.open('GET','https://api.github.com/users/shoaib92725/repos');

xhr.onreadystatechange = function(){
    console.log(this.status);
    if(this.readyState===4 && this.status===200){
        const repos = JSON.parse(this.responseText);
        const li = document.createElement('li');
        const ul = document.querySelector('ul');
        repos.forEach(repo => {
            li.innerHTML = `<strong>${repo.name}</strong>-${repo.description}`;
            ul.appendChild(li);            
        });

    }
}
xhr.send();

