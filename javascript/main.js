  // Simulador: Calcular pago en cuotas de un producto seleccionado por el cliente
  // Efrain Alvarado
  
  //const
  const precioTv = 80000;
  const precioHe = 120000;
  const precioTo = 4575;
  const precioCo = 25399;
  const precioLa = 90000;
  //strings
  const textoValorCuotas = "EL VALOR MENSUAL DE LA CUOTA ES: ";
  const textD0 = "VUELVE PRONTO, GRACIAS POR VISITARNOS";
  const textD1 = "VUELVE PRONTO, GRACIAS POR COMPRAR TU ";
  const textD2 = " ($ ";
  const textD3 = ") EN ";
  const textD4 = " CUOTA(S)";
  //vars
  let finCiclo = false;
  let prod="F";
  let nCuo=0;
  let pre=0;

	    function calculaCuotas (precioProducto,cantCoutas,letraProducto) {
	    	alert(textoValorCuotas + precioProducto/cantCoutas);
	    	console.log ("precio producto", precioProducto," - cantidad cuotas: ",cantCoutas, "valor de la cota: ",precioProducto/cantCoutas);
	    	pre=(precioProducto);
	    	nCuo=(cantCoutas);
	    	prod=(letraProducto);
	    }
	    function chao (electro,nCuo2,pre3) {
	    	alert(textD1+electro+textD2+pre3+textD3+nCuo+textD4);
	    	console.log(textD1+electro+textD2+pre3+textD3+nCuo+textD4);
	    	console.log("==============================================================");
	    }
	    function despedida (prod,nCuo) {
	    	if (prod ==="F") {
	    		alert(textD0);
		    	console.log(textD0);
		    	console.log("==============================================================");
	    	}
	    	else if(prod === "A") {
	    		alert("prod A")
	    		chao("TV",nCuo,pre);
	    	}
	    	else if(prod === "B") {
	    		chao("HELADERA",nCuo,pre);
	    	}
	    	else if(prod === "C"){
	    		chao("TOSTADORA",nCuo,pre);
	    	}
	    	else if(prod === "D") {
	    		chao("COLCHON",nCuo,pre);
	    	}
	    	else if(prod === "E") {
	    		chao("LAVADORA",nCuo,pre);
	    	}	
	    }

  while (finCiclo==false)
  {
	  let producto = prompt(`SELECCIONA LA LETRA DEL PRODUCTO QUE DESEAS CALCULAR: 
	                            (A) TV        :  80.000$
	                            (B) HELADERA  : 120.000$ 
	                            (C) TOSTADORA :   4.575$
	                            (D) COLCHON   :  25.399$
	                            (E) LAVADORA  :  90.000$
	                            (F) FIN`);

	    producto = producto.toUpperCase();

	    if(producto==="A" 
	        || producto ==="B"
	        || producto ==="C"
	        || producto ==="D"
	        || producto ==="E"
	        || producto ==="F")
	    {
   
	        if (producto ==="F")
	        {
				console.log("==============================================================");
			    despedida(prod,nCuo);
	        	finCiclo=true;
	        }
			else
			{
		        let numCuotas = Number(prompt("INTRODUCE EL NUMERO DE CUOTAS:"));  
				if(isNaN(numCuotas)||numCuotas==0)
		        {
		            alert("NO PUEDE UTILIZAR EL CERO NI LETRAS")
		        }

		        else
		        {
					console.log("==============================================================");
					console.log("producto",prod);
		            if(producto === "A")
		            {
		            	calculaCuotas(precioTv,numCuotas,producto);
		            }
		            else if(producto === "B")
		            {
		            	calculaCuotas(precioHe,numCuotas,producto);
		            }
		            else if(producto === "C")
		            {
		                calculaCuotas(precioTo,numCuotas,producto);
		            }
		            else if(producto === "D")
		            {
		                calculaCuotas(precioCo,numCuotas,producto);
		            }
		            else if(producto === "E")
		            {
		                calculaCuotas(precioLa,numCuotas,producto);
		            }
			    }
			}
		}
	    else 
		    {
		        alert("OPCION INVALIDA");
		    }
	}