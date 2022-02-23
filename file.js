var s_Fill = "no";
selectData();
function manageData(){
    document.getElementById('message').innerHTML='';
    let name = document.getElementById('fullName').value;
    if(name==''){
        document.getElementById('message').innerHTML='plase enter the full name';
    }else{
        if(s_Fill=='no'){
            let array = JSON.parse(localStorage.getItem('detail'));
            console.log(array);
            if(array==null){
                let data=[name];
                localStorage.setItem('detail',JSON.stringify(data));
            }else{
                array.push(name);
                localStorage.setItem('detail',JSON.stringify(array));
            }
            document.getElementById('message').innerHTML='Data added';  
        }else{
            let array = JSON.parse(localStorage.getItem('detail'));
            array[s_Fill]=name;
            localStorage.setItem('detail',JSON.stringify(array));
            document.getElementById('message').innerHTML='Data updated';  
        }
        document.getElementById('fullName').value='';
        selectData();
    }
    
}
function selectData(data){
    let array = JSON.parse(localStorage.getItem('detail'));
    if(array!=null){
        let html=''
        let s_no=1;
        for(let k in array){
            html=html+`<tr><td>${s_no}</td><td>${array[k]}</td><td><button><a href="javascript:void(0)" onclick="editData(${k})">Edit</a></button> 
            &nbsp;<button><a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></button></td></tr>`
            s_no++;
        }
        document.getElementById('root').innerHTML=html;
    }
}
function editData(r_data){
    s_Fill=r_data;
    let array = JSON.parse(localStorage.getItem('detail'));
    document.getElementById('fullName').value=array[r_data];
}
function deleteData(r_data){
    let array = JSON.parse(localStorage.getItem('detail'));
    array.splice(r_data,1);
    localStorage.setItem('detail',JSON.stringify(array));
    selectData();
}
