if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/zlist.nut'] = function () { 


gvZList =  {  }  ; 
drawSpriteZ =  function ( z , sprite , frame , x , y , angle = 0 , flip = 0 , xscale = 1.0 , yscale = 1.0 , alpha = 1.0 , color = 0xffffffff ) {  if (  ! gvZList . rawin ( z )  ) gvZList [ z ] = array ( 0 )  ; 
 
 gvZList [ z ]  . push (  [ sprite , frame , x , y , angle , flip , xscale , yscale , alpha , color ]  )  ; 
 }  ; 
drawSpriteExZ =  function ( z , sprite , frame , x , y , angle , flip , xscale , yscale , alpha , color ) {  if (  ! gvZList . rawin ( z )  ) gvZList [ z ] = array ( 0 )  ; 
 
 gvZList [ z ]  . push (  [ sprite , frame , x , y , angle , flip , xscale , yscale , alpha , color ]  )  ; 
 }  ; 
drawZList =  function ( layers ) {  for (  var i = 0 ;
 i <= layers ; i ++  )  { 
  if (  ! gvZList . rawin ( i )  ) continue ; 
 
  var n = gvZList [ i ]  . len (  )  ;
  if ( n == 0 ) continue ; 
 
  for (  var j = 0 ;
 j < n ; j ++  )  { 
  var s = gvZList [ i ]  [ j ]  ;
 drawSprite ( s [ 0 ]  , s [ 1 ]  , s [ 2 ]  , s [ 3 ]  , s [ 4 ]  , s [ 5 ]  , s [ 6 ]  , s [ 7 ]  , s [ 8 ]  , s [ 9 ]  )  ; 
 } 
  } 
 gvZList . clear (  )  ; 
 }  ; 



}; 
