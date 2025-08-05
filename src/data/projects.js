
const projects = [
    {
        id: 3,
        title: 'tripmate-web',
        description: '일정 공유 및 관리가 가능한 여행 메이트 플랫폼 웹 버전입니다.',
        image: '/images/tripmate-web.png',
        github: 'https://github.com/TAEYEN02/TripMate_Project  → 아이디 : kty2331 / 비밀번호 : patty2331@',
        demo: 'https://www.tripmateweb.store',
        techStack: ['React', 'Node.js', 'MySQL', 'Spring Boot'],
        features: ['일정 등록 및 공유', '지도 기반 일정 보기', '자동 일정 추천 기능', '공유 일정에 대한 로그인 사용자들의 좋아요/댓글 기능', '장소 추천 기능'],
        period: '2025.06.30 ~ 2025.07.19',
        role: '백엔드 메인 개발자. UI 설계, 일정 공유 기능 구현, 지도 기반 위치 기능 및 댓글 시스템 구현 담당.',
        learnings: `사용자 간 실시간 소통 및 협업 기능을 고려해 인터페이스를 구성하고, 외부 API(Kakao Maps API 등)를 적극 활용해 사용자 맞춤형 기능을 구현했습니다. 
여러 사용자 시나리오에 따라 예외 처리를 유연하게 구성하면서 사용자 경험을 최우선으로 고려한 기능 구현 능력을 기를 수 있었습니다.
또한 Node.js 서버와 Spring Boot 백엔드 구조를 분리 구성하며 모듈화된 아키텍처 설계 경험도 쌓았습니다.`

    },
    {
        id: 4,
        title: 'tripmate-app',
        description: '여행 중 실시간 일정 확인이 가능한 모바일 앱입니다.',
        image: '/images/tripmate-app.png',
        github: 'https://github.com/TAEYEN02/TripMate_App',
        demo: '',
        techStack: ['React Native', 'Expo', 'MySQL'],
        features: ['실시간 일정 조회', '일정 공유',],
        period: '2025.07.20 ~ 2025.07.25',
        role: '모바일 UI/UX 최적화 작업 수행, 댓댓글 백엔드 추가',
        learnings: `웹에서 개발한 기능을 모바일로 확장하면서 반응형 UI/UX 설계 및 성능 최적화의 중요성을 실감했습니다. 
Firebase 인증 및 실시간 데이터베이스 연동을 통해 사용자 간 데이터 공유 및 상태 동기화 구현 경험을 쌓았습니다. 
웹 백엔드와의 연동을 통해 플랫폼 간 데이터 일관성을 유지하면서도, 앱 환경에 맞는 기능을 조율하는 역량을 기를 수 있었습니다.`

    },
    {
        id: 2,
        title: 'board-web',
        description: '자유게시판 기능이 포함된 커뮤니티 웹사이트입니다.',
        image: '/images/board-web.png',
        github: 'https://github.com/TAEYEN02/BoardWeb → 아이디 : kty2331 / 비밀번호 : patty2331@',
        demo: 'https://www.taeyeon02.store',
        techStack: ['React', 'Spring Boot', 'MySQL', 'AWS(EB)', 'Node.js'],
        features: ['회원가입/로그인', '글 작성/수정/삭제', '댓글 기능'],
        period: '2025.06.20 - 2025.07.18',
        role: '프론트엔드/백엔드 전체 구현. React 기반 UI, Spring Boot REST API 설계, AWS Elastic Beanstalk로 배포까지 (개인프로젝트)',
        learnings: `React와 Spring Boot 간의 RESTful 통신 구조를 직접 설계하며 클라이언트와 서버 간 데이터 흐름을 깊이 있게 이해할 수 있었습니다. 
JWT 인증 처리, 예외 핸들링, 요청-응답 구조를 명확히 정리하면서 백엔드의 견고한 아키텍처 설계의 중요성을 체득했습니다.
또한 AWS 환경에서의 배포 및 오류 대응 과정을 통해 운영 환경에서도 안정적인 서비스를 제공하는 능력을 키웠습니다.`

    },
    {
        id: 5,
        title: '간단한 쇼핑몰 API 서버 구축',
        description: 'Spring Boot와 JWT로 사용자 인증, 상품 관리, 장바구니, 주문 기능을 구현한 RESTful 쇼핑몰 API 서버입니다.',
        image: '/images/swagger.jpg',
        github: 'https://github.com/TAEYEN02/Shopping_mall_backendAPI',
        demo: 'https://shoppingmallbackendapi-production.up.railway.app/swagger-ui/index.html → cicd 오류 해결' ,
        techStack: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Swagger'],
        features: [
            '회원가입 및 JWT 기반 로그인/인증',
            '상품 CRUD 및 카테고리 필터링',
            '장바구니 기능 (추가, 수정, 삭제)',
            '주문 생성 및 주문 상태 관리',
            'Swagger 기반 API 문서 자동화',
        ],
        period: '2025.07.26 ~ (현재 배포중)',
        role: '백엔드 전반 설계 및 개발 (100%)',
        learnings: `
        JWT 기반 인증과 Spring Security 설정을 공부하며 보안 흐름을 점차 이해하고 있고, 
        Swagger와 Postman을 통해 API 문서화와 테스트 자동화를 배우고 있습니다. 
        계층 분리, 예외 처리, 응답 일관성 같은 백엔드 구조 설계도 차근차근 경험하며 RESTful API 설계 원칙을 익혀가는 중입니다.
        `
    },
    {
        id: 1,
        title: '애듀테인먼트 앱',
        description: '영유아 언어 지연을 돕는 발음 분석 기반 학습 앱입니다.',
        image: '/images/edutainment.png',
        github: 'https://github.com/TAEYEN02/Edutainment',
        demo: '',
        techStack: ['Android Studio', 'Firebase', 'Google Speech API(STT,TTS)', 'SQLite'],
        features: ['발음 인식 및 분석', '반복 학습 기능', '데이터 기록 저장', '간단한 게임 학습'],
        period: '2023.09 - 2024.06',
        role: '팀장 및 Android 개발 전담. Firebase, Google Speech API 연동, 발음 분석 알고리즘 설계 및 UI 구현 담당.',
        learnings: `실제 사용자(영유아)를 고려한 UX 설계와 음성 데이터를 활용한 기능 구현 과정에서 사용자 친화적 인터페이스의 중요성을 체감했습니다. 
Firebase 및 STT/TTS API 통합 중 발생한 예외 상황을 해결하며 모바일 환경에서의 실시간 데이터 처리 및 안정성 확보 경험을 쌓았습니다. 
또한 팀장 역할을 수행하며 기획부터 개발, 배포까지의 전체 사이클을 리딩하며 프로젝트 관리 및 커뮤니케이션 능력을 향상시켰습니다.`
    },
];

export default projects;
