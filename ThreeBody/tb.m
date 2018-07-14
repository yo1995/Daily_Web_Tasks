% three body problem :)

clear all
clc
close all

% 8 shaped
% x1=-0.97;
% y1=0.243;
% vx1=-0.466;
% vy1=-0.433;
% 
% x2=0.97;
% y2=-0.243;
% vx2=-0.466;
% vy2=-0.433;
% 
% x3=0;
% y3=0;
% vx3=0.9324;
% vy3=0.8646;
% c=1;

% circular shaped
x1=-1;
y1=0;
vx1=10;
vy1=-10*sqrt(3);

x2=0;
y2=1.732;
vx2=-20;
vy2=0;

x3=1;
y3=0;
vx3=10;
vy3=10*sqrt(3);

c=800;
dt=.001;
i=1;
zbea=0;

hold on
box on
axis equal;

for i=1:3000
 
   
    
%1
r12=sqrt((x2-x1)^2+(y2-y1)^2);
r13=sqrt((x3-x1)^2+(y3-y1)^2);

dv12=c/r12.^2*dt;
dv13=c/r13.^2*dt;

vx1=vx1+dv12*(x2-x1)/r12+dv13*(x3-x1)/r13;
vy1=vy1+dv12*(y2-y1)/r12+dv13*(y3-y1)/r13;

x1=x1+vx1*dt;
y1=y1+vy1*dt;



%2
r23=sqrt((x3-x2)^2+(y3-y2)^2);

dv21=c/r12.^2*dt;
dv23=c/r23.^2*dt;

vx2=vx2+dv21*(x1-x2)/r12+dv23*(x3-x2)/r23;
vy2=vy2+dv21*(y1-y2)/r12+dv23*(y3-y2)/r23;

x2=x2+vx2*dt;
y2=y2+vy2*dt;



%3

dv31=c/r13.^2*dt;
dv32=c/r23.^2*dt;

vx3=vx3+dv31*(x1-x3)/r13+dv32*(x2-x3)/r23;
vy3=vy3+dv31*(y1-y3)/r13+dv32*(y2-y3)/r23;

x3=x3+vx3*dt;
y3=y3+vy3*dt;

if mod(i,5)==0
    plot(x1,y1,'.r',x2,y2,'.b',x3,y3,'.g')
end

% trans1=makehgtform('translate',[x1 y1 0]);
% rotz1=makehgtform('zrotate',zbea);
% 
% trans2=makehgtform('translate',[x2 y2 0]);
% rotz2=makehgtform('zrotate',zbea);
% 
% trans3=makehgtform('translate',[x3 y3 0]);
% rotz3=makehgtform('zrotate',zbea);
% 
% 
% set(t1,'matrix',trans1*rotz1);
% set(t2,'matrix',trans2*rotz2);
% set(t3,'matrix',trans3*rotz3);

pause(.01)

end