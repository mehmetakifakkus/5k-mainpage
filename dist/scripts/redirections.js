const redirectMainPage = ()=>{
    const collection_name = new URLSearchParams(window.location.search).get('type');

    if(collection_name == "LamiStone" || collection_name == "LamiArt" || collection_name == "LamiWood")
      window.location = "index.html#productPage2";
    else if(collection_name == "LamiPan" || collection_name == "LamiFloor" || collection_name == "LamiFeel")
      window.location = "index.html#productPage3";
    else
      window.location = "index.html#presentation-mark";
  }

const redirectGallery = (name) =>{
    window.location = "gallery.html?type="+ name;
}

const redirectProduct = (name, serie) =>{
    window.location = "./product.html?collection_name="+ name + "&serie="+serie;
}