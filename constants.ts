import { ProjectCategory, ProjectItem } from './types';

// Using placeholder images that mimic the aspect ratios and vibes of the prompt's images
// Added mock video URLs and detail images for the modal demonstration

const MOCK_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export const PORTFOLIO_DATA: ProjectItem[] = [
  // --- 2D Section ---
  {
    id: '2d-1',
    category: ProjectCategory.TwoD,
    title: 'Strike a Bargain',
    client: 'OPPO',
    description: 'OPPO海外',
    longDescription: `给OPPO海外部门做的一个类似砍一刀的活动，分享到达一定数量可以兑换实物奖励。 
    
    故事的出发点是情侣在用耳机听歌的时候被坏了的耳机电到，通过参加Strike a Bargain活动满足分享条件获得新的蓝牙耳机。
    
    软件：After Effects、Blender`,
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-12_1920x1080.jpeg?download=true&sign=UT7NLT1T3%2BtOhTUaeORkQs58ohR%2FnOt2SLmyS%2BnHnqc%3D%3A0',
    year: '2023',
    detailImages: [
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-1_1920x1080.jpeg?download=true&sign=%2B4dMx%2FqHm4DoB5I5da6NgCgN1DjQqdw8EH0fb25BLbA%3D%3A0', 
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-2_1920x1080.jpeg?download=true&sign=lh83KVEeOqixUJxi239v2ZEYhFcN0lEY4u%2BwSvKJMd0%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-3_1920x1080.jpeg?download=true&sign=yKEa5NW3Rr6sySzelbGJf5sEMVHgTWre6%2BNDTb6sdQA%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-4_1920x1080.jpeg?download=true&sign=OZ6nS0C4mC4sQ4jczIA6hKir%2B4mGLsIhyZNtHCrBUYM%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-5_1920x1080.jpeg?download=true&sign=M0YbnOl5pefGXrFF0BFkgkFpuEOzWVd4tsdy4EAMdMg%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-6_1920x1080.jpeg?download=true&sign=Apqcfi83KtT4xuao0tHT6oNRlXKSWZp3QFwsZSPhMPg%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-7_1920x1080.jpeg?download=true&sign=vacf6iEfR1NbfSjFZeCvwKiFP2SGc8cOeugXpz79jS8%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-8_1920x1080.jpeg?download=true&sign=O8Shf1Di6Xb8nRbpmYON17D3fObBM2EFGv1xt46YcgY%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-9_1920x1080.jpeg?download=true&sign=zZ%2B7td16iyTVslf5uq1c3R6jLZVbFyQEw7%2Floi8BdP4%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-10_1920x1080.jpeg?download=true&sign=r3pp33EfWwa3tvIwhRdKzdWO4iO4PR8ubvbVwq6iUZo%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-11_1920x1080.jpeg?download=true&sign=Sz9uDfKZOFEKeTLbplF6OXjlusk4wE%2FGVaWb15c4qIc%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-12_1920x1080.jpeg?download=true&sign=UT7NLT1T3%2BtOhTUaeORkQs58ohR%2FnOt2SLmyS%2BnHnqc%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/Strike%20a%20Bargain-13_1920x1080.jpeg?download=true&sign=AQDADbPfifXK9aD3YxA4G4oJ%2FWvdo36TASofWZS2UFg%3D%3A0'
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/Strike%20a%20Bargain.mp4?download=true&sign=1EJ8CxCB5OLZAZdVNPcpmiaHXojC%2FELBP%2Ber1EcKNp0%3D%3A0"
  },
  {
    id: '2d-2',
    category: ProjectCategory.TwoD,
    title: '刀行天下',
    client: '比亚迪BYD',
    description: '给比亚迪制作的一款汽车拟人漫画形象动态PV。',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-8_1920x1080.jpeg?download=true&sign=nLrN8bttcYt5ny1r7iYMG4xeqNqmYBMjYISivjB53hg%3D%3A0',
    year: '2023',
    detailImages: [
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-1_1920x1080.jpeg?download=true&sign=cQ4zZwEmUo7l8CIJjCszEcYNyFIK4WtoZ%2FUeh0h8CJM%3D%3A0', 
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-2_1920x1080.jpeg?download=true&sign=ryoTbyqX3mVwQo%2BIKEnOQRzlcZiMSy3CLBwJ6SCCYlU%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-3_1920x1080.jpeg?download=true&sign=DDDrck6iZDJMGlQpx0ZttTspL73mNa21M3l4S%2FEP%2FU8%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-4_1920x1080.jpeg?download=true&sign=QFkdR5rMZ6K4BaopUQEPo6W28UYbA209RQdpLy1nHnE%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-5_1920x1080.jpeg?download=true&sign=8XMzr4El5gqIBp9qZbqZUUGwRJfQPtxKdySwkQp0laM%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-6_1920x1080.jpeg?download=true&sign=X%2FAvESVtl%2Fso%2FzOSUfTGBByIuEPXVRYwmoTkPmNoPOI%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-7_1920x1080.jpeg?download=true&sign=jkdNPTGY6asdeJRaUX9%2FPf%2BXMxk0Me7UcrXcbv%2FsjQ4%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%88%80%E8%A1%8C%E5%A4%A9%E4%B8%8B-8_1920x1080.jpeg?download=true&sign=nLrN8bttcYt5ny1r7iYMG4xeqNqmYBMjYISivjB53hg%3D%3A0'
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Byd_.mp4?download=true&sign=w8JWHr4lTavwKkPOhfsJvoz5QmdthGVpuaI79WATrfI%3D%3A0"
  },
  {
    id: '2d-3',
    category: ProjectCategory.TwoD,
    title: '配音故事预告PV',
    client: '你猜哪个工作组',
    description: '第一次制作这种故事向的预告PV。',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%BD%A0%E7%8C%9C-1_1280x720.jpeg?download=true&sign=HxOQ%2FTQuiczMFsxJs55a1oZeluk5cr%2BcTdiOoI0xS2I%3D%3A0',
    year: '2022',
    detailImages: [
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%BD%A0%E7%8C%9C-2_1280x720.jpeg?download=true&sign=LIeyXvYhm%2BIILVH8w1CkxDCbaxVMrCeB1BHkSRoqSrA%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%BD%A0%E7%8C%9C-7_1280x720.jpeg?download=true&sign=w1MAOA8OEZUdQS6KsYLBPjyKf86aGDDkZ8LLzE4qH3I%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%BD%A0%E7%8C%9C-8_1280x720.jpeg?download=true&sign=X62eRqbf7xDBzEuusydgtQcZUh2dh0RehtvzKmySvhk%3D%3A0'
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/119966719-1-30064_.mp4?download=true&sign=RToAEb%2FHD5X5QrmEwT7odfoqQw86f%2B%2FJispmsi2thZM%3D%3A0"
  },

  // --- MG (Motion Graphics) Section ---
  {
    id: 'mg-1',
    category: ProjectCategory.MG,
    title: '我的华为APP',
    client: 'HUAWEI中国',
    description: '华为中国区',
    longDescription: `给我的华为APP制作的一款宣传性质的MG动画
    
    软件：illustrator、After Effects、C4D。`,
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-2_1920x1080.jpeg?download=true&sign=AthMmkPHZ7iNd%2F5ZotvJgLKFJ83lG%2Fg%2Fnh0zmur6dGQ%3D%3A0',
    year: '2023',
    detailImages: [
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-2_1920x1080.jpeg?download=true&sign=AthMmkPHZ7iNd%2F5ZotvJgLKFJ83lG%2Fg%2Fnh0zmur6dGQ%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-3_1920x1080.jpeg?download=true&sign=i7U6NSuA0KolrdbMNGfpuoAVta9ujabpyge9eiXqqPs%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-4_1920x1080.jpeg?download=true&sign=miviS5LaXIAA2mlx%2BACuJms6NfuJsUnQkOVTePBYU5M%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-5_1920x1080.jpeg?download=true&sign=TeEu0J%2ByLk20HAHFERGnw1NrTKFcOiz%2BBY%2FlBgBhFsc%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-6_1920x1080.jpeg?download=true&sign=yg7JqVHOZT%2BgeeqojraK589VSArHGaH0FQB%2B6VXc2Y0%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-7_1920x1080.jpeg?download=true&sign=uplKY8f%2FP%2B8DetfZL6Rgd1Q31JGywMfgmcgqQbY6yns%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-8_1920x1080.jpeg?download=true&sign=rg8IOpof6aoo45tKmcK0gKUCQMoG2P3OB3WGc%2FqH17I%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-9_1920x1080.jpeg?download=true&sign=LQvwCThvqrlhhn%2BNimDIIag6GJH%2BYUJ3fvPmGYWk6Ng%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%88%91%E7%9A%84%E5%8D%8E%E4%B8%BA-10_1920x1080.jpeg?download=true&sign=spMtIlRr9q41Ayxu%2FnlmBhZIm4eCXFCIiJ%2B57i2hkyI%3D%3A0'
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Myhuaweiapp_.mp4?download=true&sign=T0C2ODxX2MIJdmpuds1gYghfBFFq6pW2GpXa%2FhqT32I%3D%3A0"
  },
  {
    id: 'mg-2',
    category: ProjectCategory.MG,
    title: '上门服务',
    client: 'HUAWEI中东非',
    description: '给华为中东非区域制作的偏宣传服务的MG动画',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-13_1920x1080.jpeg?download=true&sign=%2F7HC%2BrIt0QfzEXVtMMuEcaJeN1N98B8lwwaLWVSIjGI%3D%3A0',
    year: '2023',
    detailImages: [
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-1_1920x1080.jpeg?download=true&sign=qU2HYHQFynK3VIWlpWzYGe1%2FGPSL%2B%2FZe89S4JNVx5eY%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-2_1920x1080.jpeg?download=true&sign=Jls0LnvXDPpBgI27Q95Zo6Q5Cd29kPU2tjTOS3h%2BJ08%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-3_1920x1080.jpeg?download=true&sign=y6Nc4ZOEwmTUNdA%2FcgNIecdF7XqQdSEj4zyEnWz30hU%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-4_1920x1080.jpeg?download=true&sign=AB5c8ZhEDCvZWWYOPvr%2F%2Fya8UCfOrfAX2vtx0WIXW%2Bg%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-5_1920x1080.jpeg?download=true&sign=iobiwWDeQQyR%2Fc3dSKa8oivOrXWEFVlV2w8UtxpFliw%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-6_1920x1080.jpeg?download=true&sign=iqn14SHcUDKKKrpICMbAeSuFZmmDXLHJRiYQmH5IVI4%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-7_1920x1080.jpeg?download=true&sign=Q7N3hKgBd32V7Hfig%2B0fxTZrYBgj3B0QOYIStMH%2Fz4I%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-8_1920x1080.jpeg?download=true&sign=jBNijgMY9PKyuivryT0IpUIL80MUy7GIne4xYcooB58%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-9_1920x1080.jpeg?download=true&sign=g6MiWJ72yXV4eeV1%2BGOPfNMsSbd4mdIaITeG3Y%2FQGxE%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-10_1920x1080.jpeg?download=true&sign=o3hpq3ImwqRnPfS5JAPNTBdj%2FeQGZikUza8zFet%2F9aM%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-11_1920x1080.jpeg?download=true&sign=%2FkJKKMyS4HlqKaRQ73Qg%2FdapsUxukk4BhQeh0peOxuw%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-12_1920x1080.jpeg?download=true&sign=I8L7zjNzx5ol%2FrXSnL7CIpc3MdJYCoz97fQKGHHxxMM%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-13_1920x1080.jpeg?download=true&sign=%2F7HC%2BrIt0QfzEXVtMMuEcaJeN1N98B8lwwaLWVSIjGI%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E4%B8%8A%E9%97%A8%E6%9C%8D%E5%8A%A1-14_1920x1080.jpeg?download=true&sign=HuBjcINorbfdtIbVRp%2FCAW5yQUn3k%2BD1EuLcUMY3J04%3D%3A0'
    ],    
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Smfw_.mp4?download=true&sign=Au5AzL0lzaTUOeGa%2BP07W2IJkJy6AlXAta9jYd9vc84%3D%3A0"
  },
  {
    id: 'mg-3',
    category: ProjectCategory.MG,
    title: 'HUAWEI Band B6',
    client: 'HUAWEI中东非',
    description: '给中东非市场部制作海外版B6手环宣传MG动画',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-1_1920x1080.jpeg?download=true&sign=UToK5ThpoVaG7tSyDUz73hsp6PUjpNEdkH1RTCVowcw%3D%3A0',
    year: '2023',
    detailImages: [
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-1_1920x1080.jpeg?download=true&sign=UToK5ThpoVaG7tSyDUz73hsp6PUjpNEdkH1RTCVowcw%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-2_1920x1080.jpeg?download=true&sign=qhskq%2BL5kOvmwlggISFxgLGjGPRKZEPcGBL0R8KZUsM%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-3_1920x1080.jpeg?download=true&sign=aZLugFB7DBeNTlxqvLmRzsAX1%2BLYCKBDxESzc8Js9m0%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-4_1920x1080.jpeg?download=true&sign=oVQmFNOBtRH0LctL%2BW%2FqLDcL6f29BQDQYrDz87oQasM%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-5_1920x1080.jpeg?download=true&sign=9viyz%2BYqVIltb33MVP6D%2FUzhd4AHzgpLdRSv8FKVufI%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-6_1920x1080.jpeg?download=true&sign=YJ3RKx9Cd9itXctGQ7Lz46E266B4ZXrE0ubtJaXcTqM%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-7_1920x1080.jpeg?download=true&sign=vjgylAgezvrc0KhytzGKxUakExHJlCV49%2F9LlHidV%2BQ%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-8_1920x1080.jpeg?download=true&sign=Z6X8WMVrVtJIuKKJIrcqQ0kdRXa6wCpcIXydq%2FyWHjc%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-9_1920x1080.jpeg?download=true&sign=s1l4Kmv08Gm5YfofQPZ9Su%2BeJzkGe6zwBF%2B50N7dius%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-10_1920x1080.jpeg?download=true&sign=%2FvyOVQv4pYTVxiTJjwwuzAKv6Tlq9Z5dQv2vnhqnUgM%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-11_1920x1080.jpeg?download=true&sign=swoYJ4fF%2FF%2BSxZHVdDOEx72JOyHWMuAKaY%2FmP5VyBIs%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-12_1920x1080.jpeg?download=true&sign=fHhk9K2DH3TkHDubDIAmwf12LkhfI3jFPjSrME%2FtS8Q%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-13_1920x1080.jpeg?download=true&sign=gPitKlL2QZMJcMc0m0KfoeoeJp5UZQ9ia1OwQ5GLD5c%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-14_1920x1080.jpeg?download=true&sign=vfYY9C2S7uedrqiuPEew1RqZwLI2xUOsGIZFChWGfLE%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/HuaweiBandB6-15_1920x1080.jpeg?download=true&sign=8Vnqjt5OQxwuNdfj2NAQgfxmAEQKhMzPK958QPI9ilQ%3D%3A0'    
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Huawei%20Band%20B6_.mp4?download=true&sign=b4W%2BUYfrKpYzmWx6OUiFO55P4PXD6dkpQ3xT6wk5GIU%3D%3A0"
  },

  // --- 3D Section ---
  {
    id: '3d-1',
    category: ProjectCategory.ThreeD,
    title: 'FLOOR ONE S5 Series',
    client: 'TINECO',
    description: 'TINECO海外',
    longDescription: `为添可海外售后服务部门做的Q&A 3D风格化渲染动画。
    
    软件：Blender、After Effects`,
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B7%BB%E5%8F%AF-1_2560x1440.jpeg?download=true&sign=w4FO%2FjtpMgnX124XpTwVeDnPKM5xfGRWsVy%2Bvoa2EdY%3D%3A0',
    year: '2023',  
    detailImages: [
        'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B7%BB%E5%8F%AF-1_2560x1440.jpeg?download=true&sign=w4FO%2FjtpMgnX124XpTwVeDnPKM5xfGRWsVy%2Bvoa2EdY%3D%3A0',
        'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B7%BB%E5%8F%AF-2_2560x1440.jpeg?download=true&sign=9gc4qiHGJxvITeCBSyrUjlvSn1ARKvVuljmVGBVlrB0%3D%3A0',
        'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B7%BB%E5%8F%AF-3_2560x1440.jpeg?download=true&sign=8%2FZuXHYv8ouLCr3ZZKK4szlBg5zSIHvs7iI4d6ysMw0%3D%3A0',
        'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B7%BB%E5%8F%AF-4_2560x1440.jpeg?download=true&sign=xnIJ5FZrDsr2O9xcZN66QFJo9pQsYTIyAKK7kkxEsDI%3D%3A0',
        'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B7%BB%E5%8F%AF-5_2560x1440.jpeg?download=true&sign=ecWytBOpPQhU%2B0cUYAOr72kUXGuJ4ZQhdK%2F5ESGmZfg%3D%3A0',
        'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B7%BB%E5%8F%AF-6_2560x1440.jpeg?download=true&sign=VZJ41uVPbbAYaiWzoSxLWNKyeqS7ozLjfy9667RsdlE%3D%3A0'
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Tineco_.mp4?download=true&sign=TucQuf4l2Yv6sankuphsbsBjDAFqygM%2BP7f93BvP%2BUI%3D%3A0"
  },
  {
    id: '3d-2',
    category: ProjectCategory.ThreeD,
    title: '8K芯片宣传',
    client: '海思',
    description: '官网视频',
    longDescription: `给海思8K超高清技术做的宣传视频，投放在官网8K模块上。
    
    一部分是实拍素材剪辑+后期，一部分是Blender+C4D制作的3D场景渲染。`,
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B5%B7%E6%80%9D8K-1_1920x1080.jpeg?download=true&sign=UCO03iFgnWX0%2FiRopfQQQ8aPBIWjabPElf%2Bc1EejITk%3D%3A0',
    year: '2023',
    detailImages: [
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B5%B7%E6%80%9D8K-1_1920x1080.jpeg?download=true&sign=UCO03iFgnWX0%2FiRopfQQQ8aPBIWjabPElf%2Bc1EejITk%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B5%B7%E6%80%9D8K-2_1920x1080.jpeg?download=true&sign=%2F%2FA8k7vlNlLpUc0OQE3noUCdrZ%2F0mmVopzmuNsxsL1Q%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B5%B7%E6%80%9D8K-3_1920x1080.jpeg?download=true&sign=gP2rBFLO0FWaio2dJkrmGyQfZlvRimppROxNKRq%2FdZk%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B5%B7%E6%80%9D8K-4_1920x1080.jpeg?download=true&sign=51F8IfbV2e7Tx3We4La64ZJBaUphu%2BQp87P9sL%2BsQXg%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B5%B7%E6%80%9D8K-5_1920x1080.jpeg?download=true&sign=yRUPuPviIskiYTcmhF%2FGI9HJkcjF3elXlENt1UnCG6s%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E6%B5%B7%E6%80%9D8K-6_1920x1080.jpeg?download=true&sign=q%2BHsnZHK%2BOdfmyt9Md24AnDF1Vodo6XKYfTpzmi6JnQ%3D%3A0'
    ],
    videoUrl: "https://www.hisilicon.com/-/media/hcomponent-hisilicon-techtalk-8k/0.0.1.20240509141229/component/Hisilicon2021/Images/8k-chipsets/img/8k_video_v1.mp4"
  },
  {
    id: '3d-3',
    category: ProjectCategory.ThreeD,
    title: '兰芝小蓝盾',
    client: 'AMORE PACIFIC',
    description: 'APC国际',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%85%B0%E8%8A%9D%E5%9B%BD%E9%99%85-7_3840x2160.jpeg?download=true&sign=z%2BcLfiSL3kGSy%2FG2yT9VmLew2XcFS0mn7cRCZEcu%2F0Q%3D%3A0',
    year: '2023',
    longDescription: `给爱茉莉旗下一款护肤品兰芝小蓝盾制作的3D宣传视频和电商图
    
    软件：C4D、After Effects`,
    detailImages: [
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%85%B0%E8%8A%9D%E5%9B%BD%E9%99%85-1_3840x2160.jpeg?download=true&sign=ujL8YNcZD9Ce%2BSdZMFum4kv3u0xkXI2ivEsOlBHMg%2F4%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%85%B0%E8%8A%9D%E5%9B%BD%E9%99%85-2_3840x2160.jpeg?download=true&sign=5Oa6yTry6%2FdCYXlBhKhYEnVf37dMO8uEdzJnJmXXSPs%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%85%B0%E8%8A%9D%E5%9B%BD%E9%99%85-5_3840x2160.jpeg?download=true&sign=8eqNuK4MnnpwIeLiajhV29noLfln47M2S15%2F71yQy14%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/portfolio/%E5%85%B0%E8%8A%9D%E5%9B%BD%E9%99%85-6_3840x2160.jpeg?download=true&sign=T6Nf4n4Vth3BlqlWxqzs2EBDKuGV%2Bs%2FQrhnj0YsyAB0%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/apc/Aside%20Cover_1920x1080.jpeg?download=true&sign=0ffORWC9Qhfkr484mYCm2eVdKQaexOZDRizLCuDy%2B1I%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/apc/Floating%20Cover_1080x1920.jpeg?download=true&sign=jzkI5OnEUAged5QQTf6cfErokB34%2B99oEGzhAv8ZDe4%3D%3A0'
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Apc_.mp4?download=true&sign=Xb4lBY2NeaI%2BZgDzzlaqGEyGZ7FZzcZeS2%2BtrBtQrGM%3D%3A0",
    videoUrls: [
      "https://cloudpaste.156234.xyz/api/p/images/showvideo/APC1.mp4?download=true&sign=Tn3OC1xLL19NkqRbV5nzfqhEsilKUCn68%2BAgMb7JANk%3D%3A0",
      "https://cloudpaste.156234.xyz/api/p/images/showvideo/APC2.mp4?download=true&sign=gpWlCYK9ezoHYf5QjZAg%2FyBwVjGk0ftdV4IhsLNPyes%3D%3A0"
      ]
  },
  {
    id: '3d-4',
    category: ProjectCategory.ThreeD,
    title: '官网电视图渲染',
    client: 'SKYWORTH',
    description: 'A7D PRO和Q77G',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E7%BB%86%E8%8A%82-LOGO_1920x1080.jpeg?download=true&sign=nIPS7zJtWkX7Xrmjql0154BplOCzBJiT56CB1rZhyec%3D%3A0',
    year: '2024',
    longDescription: `给创维电视A7D PRO和Q77G做的一些实机渲染图
    
    软件：Blender、C4D、Photoshop`,
    detailImages:[
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E7%BB%86%E8%8A%82-LOGO_1920x1080.jpeg?download=true&sign=nIPS7zJtWkX7Xrmjql0154BplOCzBJiT56CB1rZhyec%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E8%83%8C%E6%9D%BF%E7%88%86%E7%82%B8%E5%9B%BE_1920x1080.jpeg?download=true&sign=i1LF7rFNR2lmt73VOEXmDbY7NuRM8bmfXp2lbh41Dn8%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E4%BE%A7_1920x1080.jpeg?download=true&sign=eM%2BEba%2FQ2%2BjUcSm%2BqNvUZqTCkeUNzSbh0gUqtrNTLIQ%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E4%BE%A7%E4%B8%8B_1920x1080.jpeg?download=true&sign=t4a86IBR9DmrpfKWGmtm2PV%2BY5vSi9zPwfVcNDVFPBs%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/MidSound_1920x1080.jpeg?download=true&sign=LVRKQ%2BFcOiMOOOU9TQx9zxXqpNMMOmOi6p6t2kJ1wAE%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/SoundBoom_1920x1080.jpeg?download=true&sign=QeU6SStejs2tDY1RIuSXbtP%2Fy8XD%2F5jCyPBUqZC5rro%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E7%BB%86%E8%8A%82-%E6%8E%A5%E5%8F%A3_1920x1080.jpeg?download=true&sign=wFmuhsM6E9OCKI15WSuR7HknJR1tCUnj1G2XiPEsLOs%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E7%BB%86%E8%8A%82-harman_1920x1080.jpeg?download=true&sign=cjXfJVwG5pDdtTn8fKD%2B8oXvugT9Kl4g8%2BnnywgUDh4%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E7%BB%86%E8%8A%82-%E4%B8%AD%E9%97%B4%E9%9F%B3%E5%93%8D%E7%88%86%E7%82%B8%E7%89%B9%E5%86%99_1920x1080.jpeg?download=true&sign=%2FJJjNbh9QTOnQx47xnd8RyoL3AEg5hO1PeDLsSHGqgI%3D%3A0',
    'https://cloudpaste.156234.xyz/api/p/images/skyworth/%E5%88%9B%E7%BB%B4%E5%AE%B6%E5%B1%85_2517x1080.jpeg?download=true&sign=ZslFIFJTv4N34gaKcucbS359SlCXjzUXJ4Y9X0wUjqA%3D%3A0'
    ]
  },
  {
    id: '3d-5',
    category: ProjectCategory.ThreeD,
    title: 'Smart Fertilizer',
    client: 'YANO Agriculture',
    description: '亚农智慧农场',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/yano/YANO%E6%99%BA%E6%85%A7%E5%86%9C%E5%9C%BA-2.png?download=true&sign=4Gpet9t%2BGv559BFREcQbGw0uZX83eVrLVN3I6mCGX%2FY%3D%3A0',
    year: '2025',
    longDescription: `亚农智慧农场做的一些三维项目，一小部分已经丢失
    
    软件：Blender、Figma、After Effects`,
    detailImages: [
      'https://cloudpaste.156234.xyz/api/p/images/yano/YANO%E6%99%BA%E6%85%A7%E5%86%9C%E5%9C%BA-1.png?download=true&sign=O786BGTwPabm5LNFseX5JitW5IOLf1zzsAB9hrkeynI%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/yano/YANO%E6%99%BA%E6%85%A7%E5%86%9C%E5%9C%BA-2.png?download=true&sign=4Gpet9t%2BGv559BFREcQbGw0uZX83eVrLVN3I6mCGX%2FY%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/yano/YANO%E6%99%BA%E6%85%A7%E5%86%9C%E5%9C%BA-3.png?download=true&sign=zDAkSWn7HOxiWmONJ48pXwRKJVYhWxcSPwQOFqTpA6g%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/yano/YANO%E6%99%BA%E6%85%A7%E5%86%9C%E5%9C%BA-4.png?download=true&sign=xnDtE47guUvOu1B0UUiSWYAmHov2RhyDL%2BnBR9FxKI0%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/yano/YANOtopu.jpg?download=true&sign=9EHSx%2FWychzUDC584INgDKjvPtI5BHW5Rb3Wa%2B4Zt6k%3D%3A0'
    ],
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Yanosmart_.mp4?download=true&sign=hS%2BfTP5Ak%2BXeedoZN%2FJg35SF%2BpfOr%2FDxOKl%2Fmj2hygY%3D%3A0" 
  },
  {
    id: '3d-6',
    category: ProjectCategory.ThreeD,
    title: '全能型货到人解决方案',
    client: 'Mushiny',
    description: '卖点三维动画',
    longDescription: `给Mushiny做的全能型货到人解决方案卖点宣传3D动画
    
    软件：Blender、C4D、Photoshop、After Effects`,
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/fab/fab-1_1920x1080.jpeg?download=true&sign=DO0QePmIagRKor6hNY2ImrU3YXkfJqmQV5K9jWX2N3E%3D%3A0',
    detailImages: [
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-1_1920x1080.jpeg?download=true&sign=DO0QePmIagRKor6hNY2ImrU3YXkfJqmQV5K9jWX2N3E%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-2_1920x1080.jpeg?download=true&sign=mFl2%2B0t2U9JZ8cDk7E2SrECooZPO8p0BT2%2FHgwF3aaE%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-3_1920x1080.jpeg?download=true&sign=6%2BP1Z8o4cEKQAaEJl4dpfNsaGFNu%2F7ZeXCtzF0HwoIM%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-4_1920x1080.jpeg?download=true&sign=idNT6%2BzPzBXkVWlbFm5vYmLmWbhvHC%2BQIIq9nl3daDU%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-5_1920x1080.jpeg?download=true&sign=1fvmoASBSVIR%2BiqI56iIqUkocI9vsyYP6lrHa5nfBbw%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-6_1920x1080.jpeg?download=true&sign=C%2BAG18XxkufV0fcUwb0wV7Nd7YPt1P41OzNEM5TC%2BGo%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-7_1920x1080.jpeg?download=true&sign=HdRDAnCnCM%2B3P8I7PJvR%2BCho5%2FwlZ2kYqoMtYSzRB90%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-8_1920x1080.jpeg?download=true&sign=SwvS1Mj0On0VD6GuMM4EQAhez8FgSlqJWqH9aJ18bAc%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-9_1920x1080.jpeg?download=true&sign=OfDVe7T1cAg6fb1Yf1Y%2Bbr1V6y8UW4I6PDI7ZNGGURs%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-10_1920x1080.jpeg?download=true&sign=4Lg82oHm6X922tOfC74%2BVlnq0%2FY%2B1oNjBBmvzbjC9WA%3D%3A0',
      'https://cloudpaste.156234.xyz/api/p/images/fab/fab-11_1920x1080.jpeg?download=true&sign=Gtzd3NHkcaiXlfa5EAiD7kQ24ypo2Dvdw58gKnT8g%2B8%3D%3A0'
    ],
    year: '2025',
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Mushiny_.mp4?download=true&sign=VbSKJccNfr4wAQV07rnrD25%2FCQpQDbkm0YA%2BJwtW6%2BM%3D%3A0"
  },


  // --- Web Motion Section (New) ---
  {
    id: 'web-1',
    category: ProjectCategory.Web,
    title: 'Q41Pro',
    client: 'SKYWORTH',
    description: '给Q41Pro官网页面制作的动效',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/webmotion/Q41-1_1920x1000.jpeg?download=true&sign=fcZ2FUY4iMOHFOF3mrfqVBykKV0vkqJN7jl3ehZujDM%3D%3A0',
    year: '2024',
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Q41%20Pro%20Part1_.mp4?download=true&sign=K0rSTKlsG94zxmlO6kVTwBIVfcljo3381Ke69m5Oubw%3D%3A0"
  },
  {
    id: 'web-2',
    category: ProjectCategory.Web,
    title: 'CHCNAV华测',
    client: 'CHCNAV海外',
    description: '官网页面动效.',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/webmotion/CHCNAV-1_1920x1080.jpeg?download=true&sign=qb94gO1KbT9m3L7UdKAfUolxbRZOt1ZbfvdXP25bpTU%3D%3A0',
    year: '2024',
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Chcnav_.mp4?download=true&sign=hOMG93mwphpQ1u3bN8GgbF8l6Qy86v2KRWNIgLoGxAg%3D%3A0"
  },
  {
    id: 'web-3',
    category: ProjectCategory.Web,
    title: '仰望',
    client: '仰望汽车',
    description: '给仰望汽车官网改版制作的动效演示',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/webmotion/%E4%BB%B0%E6%9C%9B-1_1920x1000.jpeg?download=true&sign=sy1WcBkhqsYfgT7slYy%2BxVxIdcpArRpM9zYUH6RNYlI%3D%3A0',
    year: '2024',
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Yangwang_.mp4?download=true&sign=mXuxzrQ%2BJy6ieZhF%2FIps1tMgiYDMu2Mj7UVNumLWqbk%3D%3A0"
  },
  {
    id: 'web-4',
    category: ProjectCategory.Web,
    title: 'Trinasolar天合光能',
    client: '天合光能国际',
    description: '天合光能国际站官网动效',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/webmotion/tianhe-1_1920x1000.jpeg?download=true&sign=iUF1OPKWe8VnkV%2BkKY%2Fy9ngeERx4G0PS57rD8gCf2JM%3D%3A0',
    year: '2024',
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/Tianhe_.mp4?download=true&sign=Pcgd16xZ9QIpp%2BBWUrx4MoZdtJ97q4Qlrnluw%2F2fMOQ%3D%3A0"
  },

  // --- Practice Section ---
  {
    id: 'prac-1',
    category: ProjectCategory.Practice,
    title: 'Fly me to the moon',
    client: '个人练习',
    description: 'Octane月球渲染',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/prac/moon_1920x1080.jpeg?download=true&sign=bQ2CWwR%2B4FRtyt4SH29VUZ6B5KTaCCdraeZTUkwgwqI%3D%3A0',
    year: '2023',
    detailImages: ['https://cloudpaste.156234.xyz/api/p/images/prac/moon_1920x1080.jpeg?download=true&sign=bQ2CWwR%2B4FRtyt4SH29VUZ6B5KTaCCdraeZTUkwgwqI%3D%3A0']
  },
  {
    id: 'prac-2',
    category: ProjectCategory.Practice,
    title: 'BlackHole',
    client: '个人练习',
    description: 'Blender黑洞渲染',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/prac/blackhole.jpg?download=true&sign=b0Geim%2FB5RAImh%2FHJvL%2FSuldxkYnnqK2LVcgNzCeR98%3D%3A0',
    year: '2025',
    detailImages: ['https://cloudpaste.156234.xyz/api/p/images/prac/blackhole-p_1920x1080.jpeg?download=true&sign=TfFf2m0YRLVSVKiNBRlww6cBd0LGUWvLNG6d2v0AXh8%3D%3A0','https://cloudpaste.156234.xyz/api/p/images/prac/blackhole.jpg?download=true&sign=b0Geim%2FB5RAImh%2FHJvL%2FSuldxkYnnqK2LVcgNzCeR98%3D%3A0']
  },
  {
    id: 'prac-3',
    category: ProjectCategory.Practice,
    title: '瑕蝶',
    client: '个人练习',
    description: 'Blender NPR角色渲染',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/prac/butterfly_1920x1080.jpeg?download=true&sign=zNJlPV03vIt0Vq4Uk84G33zymCPu4kOFTqtgbUED0Is%3D%3A0',
    year: '2025',
    detailImages: ['https://cloudpaste.156234.xyz/api/p/images/prac/butterfly-p_1920x1080.jpeg?download=true&sign=gjLuMbrMVv9pssD9V3c6qTSQX0mqNY213XWUsNNXkSg%3D%3A0','https://cloudpaste.156234.xyz/api/p/images/prac/butterfly_1920x1080.jpeg?download=true&sign=zNJlPV03vIt0Vq4Uk84G33zymCPu4kOFTqtgbUED0Is%3D%3A0']
  },
   {
    id: 'prac-4',
    category: ProjectCategory.Practice,
    title: '水墨山',
    client: '个人练习',
    description: '在Blender程序化Shader',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/prac/2Ddepth-p_1920x1080.jpeg?download=true&sign=TtQW182GaP7aITTXA7xjax9Fm52YwVjtsK9zbe%2F8vFs%3D%3A0',
    year: '2026',
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/2Ddepth_.mp4?download=true&sign=Hg3ITsciMifkit8e3gHerL2qyJbTW9XvsjlEHrMN674%3D%3A0"
  },
    {
    id: 'prac-5',
    category: ProjectCategory.Practice,
    title: '角色立绘排版和动态',
    client: '个人练习',
    description: 'Study of light paths through glass objects.',
    imageUrl: 'https://cloudpaste.156234.xyz/api/p/images/prac/yiji-1_1920x1080.jpeg?download=true&sign=xC1H5K1%2FQaPGuRtHPlHJTlLqi%2BMnUeesFzxisbRbMYg%3D%3A0',
    year: '2023',
    videoUrl: "https://cloudpaste.156234.xyz/api/p/images/showvideo/yiji.mp4?download=true&sign=%2BzzVusa%2FnJxUlPWQMjthpOmgJK%2FNbJpH3RPsY%2FZx7Y8%3D%3A0"
  },
];