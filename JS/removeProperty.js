function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
      
        delete obj[prop];
      
        return true;
    }
    return false;
  }
  
  const objeto = {nome: 'wesley', address: 'Rua dos Iconfidentes'};
  
  console.log(removeProperty(objeto, 'nome'));