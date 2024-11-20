a = imread('see.jpg');
im = imresize(a, [NaN 512]);
imwrite(im,'see.tif');
img = imread('see.tif');

%% Average light of whole image %%
image1=img(:,:,1);% Red component
image1_mean=mean(image1(:)); % Average of Red

image2=img(:,:,2);% Green component
image2_mean = mean(image2(:)); % Average of Green

image3=img(:,:,3);% Blue component
image3_mean = mean(image3(:)); % Average of Blue

%% 리젼 구역 정하기, 첫번째 찾은 구역 의 r,g,b의 평균값 구하기
%리젼 구역 정하기
bw01 = img(:,:,1) > 2*image1_mean;
bw1 = bwareafilt(bw01, 1);

figure;
imshow(bw01);

figure;
imshow(bw1);

%구역의 r의 평균값 구하기
numR = nnz(bw1>0); % 찾은 구역의 elem 개수
double_bw1 = double(bw1); 
double_image1=double(image1);
findFirstR = double_bw1.*double_image1; % 찾은 구역만 보여준다
sumR=sum(findFirstR(:)); % 찾은구역의 R값들의 sum total
Threshold_R = sumR/numR; % 찾은구역의 R값들의 평균
%구역의 g의 평균값 구하기
bw2 = bw1;
numG = nnz(bw2>0); % 찾은 구역의 elem 개수
double_bw2 = double(bw2); double_image2=double(image2);
findFirstG = double_bw2.*double_image2; % 찾은 구역만 보여준다
sumG=sum(findFirstG(:)); % 찾은구역의 G값들의 sum total
Threshold_G = sumG/numG; % 찾은구역의 G값들의 평균
%구역의 b의 평균값 구하기
bw3 = bw1;
numB = nnz(bw3>0); % 찾은 구역의 elem 개수
double_bw3 = double(bw3); 
double_image3=double(image3);
findFirstB = double_bw3.*double_image3; % 찾은 구역만 보여준다
sumB=sum(findFirstB(:)); % 찾은구역의 B값들의 sum total
Threshold_B = sumB/numB; % 찾은구역의 B값들의 평균

ratio = [Threshold_R Threshold_G Threshold_B];

%% 리젼구역에 색 채우기

sp1 = image1 > Threshold_R-10;
sp2 = image2 > Threshold_G-10;
sp3 = image3 > Threshold_B-10;
newsp=sp1.*sp2.*sp3;
figure;
imshow(newsp);

gaussian_filt = imgaussfilt(double(newsp),2);

J1 = regionfill( image1, gaussian_filt );
J2 = regionfill( image2, gaussian_filt );
J3 = regionfill( image3, gaussian_filt );

newsp_mask = imdilate( newsp, ones( 5 ) );

J1_test = regionfill( image1, newsp_mask );
J2_test = regionfill( image2, newsp_mask );
J3_test = regionfill( image3, newsp_mask );


figure;
imshow(J1);
figure;
imshow(J2);
figure;
imshow(J3);


figure;
imshow(J1_test);
figure;
imshow(J2_test);
figure;
imshow(J3_test);

result_image(:,:,1)=J1;
result_image(:,:,2)=J2;
result_image(:,:,3)=J3;

result_image_test(:,:,1)=J1_test;
result_image_test(:,:,2)=J2_test;
result_image_test(:,:,3)=J3_test;
figure;
imshow(result_image);
figure;
imshow(result_image_test);
