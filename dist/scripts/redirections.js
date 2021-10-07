const redirectMainPage = (page)=>{
    const objList = url2obj(window.location.search);

    if(objList.page == "productPage1")
      // window.location = "index.html?#anim3" //+ objList.page;
      window.location = "index.html" //+ objList.page;
    else if(objList.page == "productPage2")
      window.location = "index.html" //+ objList.page;
  }

const redirectGallery = (name, page) =>{
    window.location = "gallery.html?type="+ name + "&page=" + page;
}

const redirectProduct = (name, serie) =>{
    window.location = "./product.html?collection_name="+ name + "&serie="+serie;
}