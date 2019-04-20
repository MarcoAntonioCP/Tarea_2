var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pre1', function(req, res, next){
var vector=req.query.params;
console.log(req.query);
vector=vector.split('-');
var par=0;
var impar=0;
for(var i=0;i<vector.length;i++)
  if(i%2==0)
    par+=parseInt(vector[i]);
  else{
    impar+=parseInt(vector[i]);
  }
  var resul=new Array(par,impar);
  res.status(200).json({
    result:resul
  });
  return;
});


router.post('/pre2',function(req,res, next){
  var rest=new Array();
  var aux="";
  var InputArray=req.query.params.split('-');

  for(var i=0;i<InputArray[0].length+2;i++)
    aux=aux+"*";
  rest[0]=aux;
  rest[InputArray.length+1]=aux;
  for(var i=1;i<InputArray.length+1;i++ )
    rest[i]="*"+InputArray[i-1]+'*';
  res.status(200).json({
    result:rest
  });
  return;
});

router.get('/pre3',function(req, res, next){

  var param1=req.query.param1.split('-');
  var param2=req.query.param2.split('-');
  if(param1.length==param2.length){
    var cont=0;
    var p=new Array ();
    for(var i=0;i<param1.length;i++)
      if(param1[i]!=param2[i]){
        if(cont==2)
          res.status(200).json({
            resul:false
          });
        p[cont++]=i;
      }
      res.status(200).json({
        resul:(((cont==2&&param2[p[0]]==param1[p[1]]&&param1[p[0]]==param2[p[1]])||cont==0)? true:false)
      });
  }
  else {
    res.status(200).json({
      resul:false
    });
  }
  return;
});

router.get('/pre4',function(req,res, next){
  var InputArray=req.query.params.split('*');
  for(var i=0;i<InputArray.length;i++)
    InputArray[i]=parseInt(InputArray[i]);

    var cont=0;
    for(var i=1;i<InputArray.length;i++)
      while(InputArray[i]<=InputArray[i-1]){
        InputArray[i]++;
        cont++;
      }
      res.status(200).json({
        result:cont
      });
      return;
})

module.exports = router;
