// 코스 경로 데이터
// 이 파일은 코스 경로 정보를 저장하는 전용 파일입니다.
// 경로 순서나 매장 정보를 변경할 때는 이 파일만 수정하세요.

const ROUTES = {
  bukchon_heritage_trail: {
    id: "bukchon_heritage_trail",
    type: "full",
    name: "Bukchon Heritage Trail",
    description_ko: "한국적 무드와 한옥 감성을 느낄 수 있는 코스",
    total_time_min: 80,
    stores: [
      {
        order: 1,
        store_id: "chwi_bukchon",
        stay_time_min: 15,
        move_to_next_min: 9
      },
      {
        order: 2,
        store_id: "cosmic_mansion_bukchon",
        stay_time_min: 15,
        move_to_next_min: 2
      },
      {
        order: 3,
        store_id: "le_labo_bukchon",
        stay_time_min: 15,
        move_to_next_min: 9
      },
      {
        order: 4,
        store_id: "lenezlab_gyedong",
        stay_time_min: 15,
        move_to_next_min: 0
      }
    ]
  },
  soft_daily_beginners: {
    id: "soft_daily_beginners",
    type: "full",
    name: "Soft Daily Route for Beginners",
    description_ko: "향을 처음 탐색하는 사람에게 추천하는 가벼운 코스",
    total_time_min: 75,
    stores: [
      {
        order: 1,
        store_id: "matthew_chang_anguk",
        stay_time_min: 15,
        move_to_next_min: 9
      },
      {
        order: 2,
        store_id: "granhand_sogyeok",
        stay_time_min: 15,
        move_to_next_min: 3
      },
      {
        order: 3,
        store_id: "youssoful_samcheong",
        stay_time_min: 15,
        move_to_next_min: 3
      },
      {
        order: 4,
        store_id: "nonfiction_samcheong",
        stay_time_min: 15,
        move_to_next_min: 0
      }
    ]
  },
  home_fragrance_lovers: {
    id: "home_fragrance_lovers",
    type: "full",
    name: "Home Fragrance Lovers",
    description_ko: "공간 향 애호가를 위한 대표 홈프래그런스 코스",
    total_time_min: 78,
    stores: [
      {
        order: 1,
        store_id: "hetras_anguk",
        stay_time_min: 15,
        move_to_next_min: 7
      },
      {
        order: 2,
        store_id: "granhand_sogyeok",
        stay_time_min: 15,
        move_to_next_min: 3
      },
      {
        order: 3,
        store_id: "cosmic_mansion_bukchon",
        stay_time_min: 15,
        move_to_next_min: 8
      },
      {
        order: 4,
        store_id: "villa_herbatium",
        stay_time_min: 15,
        move_to_next_min: 0
      }
    ]
  },
  heritage_short: {
    id: "heritage_short",
    type: "short",
    name: "Bukchon Short Route",
    description_ko: "한옥 감성과 한국적 향을 빠르게 체험하는 짧은 코스",
    total_time_min: 42,
    stores: [
      {
        order: 1,
        store_id: "chwi_bukchon",
        stay_time_min: 15,
        move_to_next_min: 12
      },
      {
        order: 2,
        store_id: "le_labo_bukchon",
        stay_time_min: 15,
        move_to_next_min: 0
      }
    ]
  },
  beginners_short: {
    id: "beginners_short",
    type: "short",
    name: "Beginners Short Route",
    description_ko: "입문자가 가볍게 둘러보기 좋은 2매장 데일리 코스",
    total_time_min: 33,
    stores: [
      {
        order: 1,
        store_id: "granhand_sogyeok",
        stay_time_min: 15,
        move_to_next_min: 3
      },
      {
        order: 2,
        store_id: "youssoful_samcheong",
        stay_time_min: 15,
        move_to_next_min: 0
      }
    ]
  },
  home_fragrance_short: {
    id: "home_fragrance_short",
    type: "short",
    name: "Home Fragrance Short Route",
    description_ko: "홈센트·캔들을 빠르게 둘러보는 짧은 코스",
    total_time_min: 33,
    stores: [
      {
        order: 1,
        store_id: "granhand_sogyeok",
        stay_time_min: 15,
        move_to_next_min: 3
      },
      {
        order: 2,
        store_id: "cosmic_mansion_bukchon",
        stay_time_min: 15,
        move_to_next_min: 0
      }
    ]
  }
};

