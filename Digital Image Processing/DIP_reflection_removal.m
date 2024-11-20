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

%% ���� ���� ���ϱ�, ù��° ã�� ���� �� r,g,b�� ��հ� ���ϱ�
%���� ���� ���ϱ�
bw01 = img(:,:,1) > 2*image1_mean;
bw1 = bwareafilt(bw01, 1);

figure;
imshow(bw01);

figure;
imshow(bw1);

%������ r�� ��հ� ���ϱ�
numR = nnz(bw1>0); % ã�� ������ elem ����
double_bw1 = double(bw1); 
double_image1=double(image1);
findFirstR = double_bw1.*double_image1; % ã�� ������ �����ش�
sumR=sum(findFirstR(:)); % ã�������� R������ sum total
Threshold_R = sumR/numR; % ã�������� R������ ���
%������ g�� ��հ� ���ϱ�
bw2 = bw1;
numG = nnz(bw2>0); % ã�� ������ elem ����
double_bw2 = double(bw2); double_image2=double(image2);
findFirstG = double_bw2.*double_image2; % ã�� ������ �����ش�
sumG=sum(findFirstG(:)); % ã�������� G������ sum total
Threshold_G = sumG/numG; % ã�������� G������ ���
%������ b�� ��հ� ���ϱ�
bw3 = bw1;
numB = nnz(bw3>0); % ã�� ������ elem ����
double_bw3 = double(bw3); 
double_image3=double(image3);
findFirstB = double_bw3.*double_image3; % ã�� ������ �����ش�
sumB=sum(findFirstB(:)); % ã�������� B������ sum total
Threshold_B = sumB/numB; % ã�������� B������ ���

ratio = [Threshold_R Threshold_G Threshold_B];

%% ���������� �� ä���

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
