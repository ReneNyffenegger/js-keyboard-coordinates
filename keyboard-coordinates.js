var tq84 = tq84 || {};

tq84.keyboard_coordinates = {};

tq84.keyboard_coordinates.fill = function(/* callback for key   */ k,
                                          /* callback for enter */ enter) {

  var l  = 14;
  var l_ = 10;

  var x =  0;
  var y =100;

  var y_r;


  // First row  {

     y_r = y  - 0*l;

     k('esc'          , x+ 0  *l,  y_r , l_, l_);
                              
     k('f1'           , x+ 2  *l , y_r , l_, l_);
     k('f2'           , x+ 3  *l , y_r , l_, l_);
     k('f3'           , x+ 4  *l , y_r , l_, l_);
     k('f4'           , x+ 5  *l , y_r , l_, l_);
                              
     k('f5'           , x+ 6.5*l , y_r , l_, l_);
     k('f6'           , x+ 7.5*l , y_r , l_, l_);
     k('f7'           , x+ 8.5*l , y_r , l_, l_);
     k('f8'           , x+ 9.5*l , y_r , l_, l_);
                              
     k('f9'           , x+11  *l , y_r , l_, l_);
     k('f10'          , x+12  *l , y_r , l_, l_);
     k('f11'          , x+13  *l , y_r , l_, l_);
     k('f12'          , x+14  *l , y_r , l_, l_);
                              
     k('print screen' , x+15.5*l , y_r , l_, l_);
     k('scroll lock'  , x+16.5*l , y_r , l_, l_);
     k('pause'        , x+17.5*l , y_r , l_, l_);

  // }
  // Second Row {

     y_r = y - 2*l;

     k('TL'           , x + 0*l , y_r, l_, l_); 
     k('1'            , x + 1*l , y_r, l_, l_); 
     k('2'            , x + 2*l , y_r, l_, l_); 
     k('3'            , x + 3*l , y_r, l_, l_); 
     k('4'            , x + 4*l , y_r, l_, l_); 
     k('5'            , x + 5*l , y_r, l_, l_); 
     k('6'            , x + 6*l , y_r, l_, l_); 
     k('7'            , x + 7*l , y_r, l_, l_); 
     k('8'            , x + 8*l , y_r, l_, l_); 
     k('9'            , x + 9*l , y_r, l_, l_); 
     k('0'            , x +10*l , y_r, l_, l_); 
     k('-'            , x +11*l , y_r, l_, l_); 
     k('='            , x +12*l , y_r, l_, l_);

     k('back space'   , x +13*l , y_r, 2*l_, l_);

     k('insert'       , x +15.5*l , y_r, l_, l_);
     k('home'         , x +16.5*l , y_r, l_, l_);
     k('page up'      , x +17.5*l , y_r, l_, l_);

  // }
  // Third Row {
  
     y_r = y - 3*l;

     k('tab'          , x             , y_r , (l*.5)+l_, l_); // tab
     k('q'            , x + (0+1.5)*l , y_r ,  l_, l_); 
     k('w'            , x + (1+1.5)*l , y_r ,  l_, l_); 
     k('e'            , x + (2+1.5)*l , y_r ,  l_, l_); 
     k('r'            , x + (3+1.5)*l , y_r ,  l_, l_); 
     k('t'            , x + (4+1.5)*l , y_r ,  l_, l_); 
     k('y'            , x + (5+1.5)*l , y_r ,  l_, l_); 
     k('u'            , x + (6+1.5)*l , y_r ,  l_, l_); 
     k('i'            , x + (7+1.5)*l , y_r ,  l_, l_); 
     k('o'            , x + (8+1.5)*l , y_r ,  l_, l_); 
     k('p'            , x + (9+1.5)*l , y_r ,  l_, l_); 
     k('['            , x +(10+1.5)*l , y_r ,  l_, l_); 
     k(']'            , x +(11+1.5)*l , y_r ,  l_, l_); 

     enter (
       /* tl: */ x + (12+1.5 )*l, y_r     , /* tr: */ x +  14.45*l   , y_r     ,
       /* ml: */ x + (12+1.5 )*l, y_r - l_, /* mr: */ x + (12+1.75)*l, y_r - l_,
       /* bl: */ x + (12+1.75)*l, y-4*l-l_, /* br: */ x +  14.45*l   , y-4*l-l_
     );

     k('delete'       , x +15.5*l , y_r, l_, l_);
     k('end'          , x +16.5*l , y_r, l_, l_);
     k('page down'    , x +17.5*l , y_r, l_, l_);


  // }
  // Fourth Row {
     y_r = y - 4*l;

     k('caps lock'    , x, y_r , (l*.75)+l_, l_);
     k('a'            , x + (0+1.75)*l , y_r ,  l_, l_); 
     k('s'            , x + (1+1.75)*l , y_r ,  l_, l_); 
     k('d'            , x + (2+1.75)*l , y_r ,  l_, l_); 
     k('f'            , x + (3+1.75)*l , y_r ,  l_, l_); 
     k('g'            , x + (4+1.75)*l , y_r ,  l_, l_); 
     k('h'            , x + (5+1.75)*l , y_r ,  l_, l_); 
     k('j'            , x + (6+1.75)*l , y_r ,  l_, l_); 
     k('k'            , x + (7+1.75)*l , y_r ,  l_, l_); 
     k('l'            , x + (8+1.75)*l , y_r ,  l_, l_); 
     k(';'            , x + (9+1.75)*l , y_r ,  l_, l_); 
     k('\''           , x +(10+1.75)*l , y_r ,  l_, l_); 
     k('\\'           , x +(11+1.75)*l , y_r ,  l_, l_); 


     
  // }
  // Fifth Row {
     
     y_r = y - 5*l;
     k('shift left'    , x,               y_r, (l*.35)+l_, l_);

     k('<'             , x+( 0 +1.35)*l , y_r, l_, l_); 
     k('z'             , x+( 1 +1.35)*l , y_r, l_, l_); 
     k('x'             , x+( 2 +1.35)*l , y_r, l_, l_); 
     k('c'             , x+( 3 +1.35)*l , y_r, l_, l_); 
     k('v'             , x+( 4 +1.35)*l , y_r, l_, l_); 
     k('b'             , x+( 5 +1.35)*l , y_r, l_, l_); 
     k('n'             , x+( 6 +1.35)*l , y_r, l_, l_); 
     k('m'             , x+( 7 +1.35)*l , y_r, l_, l_); 
     k(','             , x+( 8 +1.35)*l , y_r, l_, l_); 
     k('.'             , x+( 9 +1.35)*l , y_r, l_, l_); 
     k('/'             , x+(10 +1.35)*l , y_r, l_, l_); 

     k('shift right'   , x+12.35*l, y_r , (l*1.35)+l_, l_);

     k('arrow up'      , x+16.5*l , y_r , l_, l_);
  //
  //}
  // Sixth Row {
     y_r = y - 6*l;

     k('ctrl left'     , x        , y_r  , (l*0.5 )+l_, l_);
     k('windows'       , x+ 1.5 *l, y_r  , (l*0.35)+l_, l_);
     k('alt left'      , x+ 2.85*l, y_r  , (l*0.35)+l_, l_);
     k(' '             , x+ 4.2 *l, y_r  , (l*4.25)+l_, l_);
     k('alt right'     , x+ 9.45*l, y_r  , (l*0.35)+l_, l_);
     k('windows right' , x+10.8 *l, y_r  , (l*0.35)+l_, l_);
     k('?'             , x+12.15*l, y_r  , (l*0.25)+l_, l_);
     k('ctrl right'    , x+13.4 *l, y_r  , (l*0.35)+l_, l_);

     k('arrow left'    , x+15.5*l , y_r , l_, l_);
     k('arrow down'    , x+16.5*l , y_r , l_, l_);
     k('arrow right'   , x+17.5*l , y_r , l_, l_);

  // }

};
