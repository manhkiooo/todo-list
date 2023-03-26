# Sử dụng image node phiên bản v14.16.0
FROM node:14.16.0

# Đặt thư mục làm thư mục làm việc cho ứng dụng
WORKDIR /app

# Sao chép file package.json và package-lock.json vào image
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép các tệp trong thư mục hiện tại vào thư mục làm việc của image
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Thiết lập các biến môi trường
ENV PORT 3000

# Mở cổng 3000 trên container
EXPOSE 3000

# Khởi động ứng dụng với web server
CMD ["npm", "start"]
Bạn đã gửi
# Lấy thời gian hiện tại dưới dạng yyyy-mm-dd_HH-MM-SS
#$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
timestamp=$(date +%s)

# Build image
 docker build -t to-do-app-$timestamp .
#login nexus
docker login -u admin -p Abcd@1234 http://localhost:8082

 # Tạo tag với tên image và timestamp
 docker tag to-do-app-$timestamp localhost:8082/repository/docker-hosted:to-do-ap_$timestamp
 # Pushbash build.sh
 docker push localhost:8082/repository/docker-hosted:to-do-ap_$timestamp
