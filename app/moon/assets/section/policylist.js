$(function () {
var policylist = [
    { //국정목표
        "policyname": "국민이 주인인 정부", //목표명
        "strategies": [
            { // 전략
                "strategyname": "전략 1 - 국민주권의 촛불민주주의 실현",
                "task": [
                    {
                        "name": "1: 적폐의 철저하고 완전한 청산",
                        "department": ["법무부"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "국정농단 조사 부처별 TFT 구성",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "형사판결 확정 시 최순실 부정축재 국내외 재산 환수 추진",
                                "status": "결과 대기",
                                "statuscode": "await"
                            },
                            {
                                "name": "'17년부터 문화행정의 혁신을 주도하는 민관 협의체 설치 및 운영, 백서 발간, 재발 방지책 마련",
                                "status": "진행중",
                                "statusdesc": "지난 정부 국정농단과 블랙리스트 여파로 추락한 신뢰를 회복하고 침체된 조직의 분위기를 쇄신하기 위해 외부위원 8인과 내부위원 7인으로 구성된 조직문화혁신위원회를 발족함",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841466&pageIndex=11&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }
                        ],
                        "keywords": ["국정농단", "최순실", "블랙리스트", "최순실재산환수"]
                    },
                    {
                        "name": "2: 반부패 개혁으로 청렴한국 실현",
                        "department": ["권익위", "법무부"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "'17년 반부패 협의회 설치ᆞ운영, '18년 독립적 반부패 총괄기구 '국가청렴위원회' 설치",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년부터 공익신고자 보호 강화, ’18년부터 국민 소송제도 도입ᆞ시행",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 5대 중대 부패범죄(뇌물, 알선수재, 알선수뢰, 배임, 횡령) 처벌기준 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 국민중심 반부패 청렴정책 수립을 위한 민관협의체 구성",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년부터 민관이 공동 참여하는 시민공익위원회 설치",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }
                        ],
                        "keywords": ["반부패", "국가청렴위원회", "공익신고자", "부패범죄", "시민공익위원회"]
                    },
                    {
                        "name": "3:  국민 눈높이에 맞는 과거사 문제 해결",
                        "department": ["행자부"],
                        "category": ["과거사"],
                        "description": [
                            {
                                "name": "5.18광주민주화운동 진상 규명 관련법 제정, 독립적 진상규명위원회 설치",
                                "status": "법안 발의 (7/11, 국민의당 최경환 의원)",
                                "statuscode": "congress",
                                "statuslink": "http://news.mk.co.kr/newsRead.php?year=2017&no=465683"
                            }, 
                            {
                                "name": "제주4.3 완전 해결 암매장 유해 발굴", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 상반기 중 진실화해위원회 활동 재개", 
                                "status": "법안 계류중 (민주/국민 발의)",
                                "statuscode": "congress",
                                "statuslink": "http://www.hani.co.kr/arti/politics/politics_general/803724.html"
                            }, 
                            {
                                "name": "'19년에 과거사 통합재단 설립 기본계획 수립",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["5.18", "광주민주화운동", "진상규명위원회", "제주4.3", "진실화해위원회", "과거사"]
                    },
                    {
                        "name": "4: 표현의 자유와 언론의 독립성 신장",
                        "department": ["방통위"],
                        "category": ["언론"],
                        "description": [
                            {
                                "name": "공영방송 지배구조의 합리적 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "보도ᆞ제작ᆞ편성 자율성 확보를 위해 ’17년 지상파 재허가 시 관련 사항을 엄격하게 심사하고 ’18년 ‘편성규약 가이드라인’ 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 언론인 해직 관련 재발 방지 방안 마련, ’18년까지 해직언론인 복직ᆞ명예회복 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년까지 온라인 게시물 임시조치 제도 개선",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["공영방송", "지배구조", "지상파", "재허가", "언론인", "해직", "임시조치"]
                    }
                ]
            }, 
            {
                "strategyname": "전략 2 - 소통으로 통합하는 광화문 대통령",
                "task": [
                    {
                        "name": "5: 365일 국민과 소통하는 광화문 대통령",
                        "department": ["행자부"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "‘광화문대통령시대위원회(가칭)’를 구성하여 대통령 집무실 이전 계획 수립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "대통령의 24시 등 정부 주요인사 일정 공개 추진 - ’17년 하반기부터 정보공개포털(open.go.kr)을 통해 실시간 통합 공개",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 인사추천의 투명성 제고, 고위공직자 검증기준 구체화",
                                "status": "1기 인사 이후 적용 예정",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=008&aid=0003895213"
                            }],
                        "keywords": ["광화문", "집무실", "주요인사 일정", "인사추천", "고위공직자"]
                    },
                    {
                        "name": "6: 국민인권을 우선하는 민주주의 회복과 강화",
                        "department": ["법무부", "행자부", "인권위", "개헌"],
                        "category": ["인권"],
                        "description": [
                            {
                                "name": "’09년 조직 축소 이전 수준으로 인권위 인원ᆞ조직 등 확대 - 개헌을 통한 헌법기관화", 
                                "status": "추진중",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "인권기본법 제정", 
                                "status": "인권위 헌법기관화 연동 과제",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "군인권 보호관 신설", 
                                "status": "인권위 헌법기관화 연동 과제",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 긴급통신제한조치 사후허가 필수화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년부터 형사공공변호인 제도 단계적 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 개인정보 보호 거버넌스 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "‘시민사회발전위원회’ 설치",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년부터 전국 단위 민간 자원봉사 인프라 확충",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["인권", "인권위", "긴급통신제한조치", "형사공공변호인", "개인정보", "시민사회발전위원회"]
                    },
                    {
                        "name": "7: 국민주권적 개헌 및 국민참여 정치개혁",
                        "department": ["국조실"],
                        "category": ["개헌", "정치/정부"],
                        "description": [
                            {
                                "name": "국회 개헌특위 논의 참여 및 지원", 
                                "status": "국회 2017년 8월 공개토론 개시",
                                "statuscode": "none",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=016&aid=0001271336"
                            }, 
                            {
                                "name": "국민투표 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국민발안제와 국회의원에 대한 국민소환제 도입", 
                                "status": "법안 발의 (국민소환제: 민주-박주민)",
                                "statuscode": "congress",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=014&aid=0003833797"
                            }, 
                            {
                                "name": "18세로 선거연령 하향", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "투표시간 연장", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국회의원 권역별 정당명부 비례대표제 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "대통령 결선투표제 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "정당 가입 연령제한 폐지", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "공무원ᆞ교사의 정치 참여 보장", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "장애인ᆞ노령자 투표편의 제공 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["개헌", "국민투표", "국민발안제", "국민소환제", "선거연령", "투표시간", "비례대표제", "결선투표제","정치참여"]
                    }
                ]
            },
            {
                "strategyname": "전략 3 - 투명하고 유능한 정부",
                "task": [
                    {
                        "name": "8: 열린 혁신 정부, 서비스하는 행정",
                        "department": ["행자부"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "’17년 하반기 정부혁신플랫폼 ‘광화문 1번가’ 오픈", 
                                "status": "완료/플랫폼 개시",
                                "statuscode": "done",
                                "statuslink": "https://www.gwanghwamoon1st.go.kr"
                            }, 
                            {
                                "name": "’18년까지 정보공개ᆞ기록관리제도 전면 개편", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 사회혁신 관련 기본법(가칭) 제정", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년까지 사회혁신기금 및 사회투자재단 설치", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 온라인서비스ᆞ정책정보를 한곳에서 제공하는 ‘정부24’ 개통", 
                                "status": "완료/서비스 개시",
                                "statuscode": "done",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=081&aid=0002840894"
                            }, 
                            {
                                "name": "’19년부터 인공지능 활용 스마트 서비스 제공", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 Active-X 완전 제거 및 공인인증절차 폐지", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년부터 공공빅데이터센터 설치ᆞ운영",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["정부혁신플랫폼", "정보공개", "사회혁신", "정부24", "인공지능", "ActiveX","공인인증", "공공빅데이터"]
                    },
                    {
                        "name": "9: 적재적소, 공정한 인사로 신뢰받는 공직사회 구현",
                        "department": ["인사처"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "’17년부터 5대 비리 관련 고위직 임용기준 강화 및 인사청문제도 개선",
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=277&aid=0004006960"
                            },  
                            {
                                "name": "’18년까지 인사고충 심사구제와 위법 명령ᆞ지시 복종 거부 근거 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년까지 재산 공개ᆞ심사 강화, 퇴직자 접촉 등 행위제한 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년까지 공직자윤리위원회 위원 구성 및 심사 결과 공개범위 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 여성ᆞ이공계 관리자 임용목표 달성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년까지 공직 내 비정규직에 대한 인사ᆞ보수상 불합리한 차별 해소", 
                                "status": "가이드라인 발표",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=056&aid=0010483766"
                            }, 
                            {
                                "name": "’18년부터 민간인만 임용 가능한 경력개방형직위 단계적 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "전문직공무원제도 적용대상 부처ᆞ계급 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년까지 육아시간ᆞ휴직수당 및 대체공휴일 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["5대비리", "고위직", "인사청문", "인사고충", "재산공개", "공직자윤리위원회", "여성", "비정규직", "경력개방형직위", "전문직공무원제도", "육아시간", "휴직수당", "대체공휴일"]
                    },
                    {
                        "name": "10: 해외 체류 국민 보호 강화 및 재외동포 지원 확대",
                        "department": ["외교부"],
                        "category": ["정치/정부", "외교"],
                        "description": [
                            {
                                "name": "안전정보 적시 제공을 통한 재외국민 사건사고 예방", 
                                "status": "완료",
                                "statusdesc": "해외를 방문 또는 체류 예정인 우리 국민에게 국가별 해외안전여행 정보를 제공하는 카카오톡 플러스친구 ‘해외안전여행’ 서비스를 23일부터 실시. 카카오톡 플러스친구 서비스를 이용해 방문하고자 하는 국가명을 입력할 경우 해당 국가의 ▲여행경보단계 ▲공관 긴급연락처 ▲주요 유의사항 등의 정보를 확인할 수 있다. 플러스 친구 서비스는 규칙에 따라 일정한 정보를 찾아주는 ‘채팅봇’을 활용, 채팅창에 국가명 입력 시 자동적으로 해외안전여행정보 답변을 제공한다.",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841461&pageIndex=11&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "재외동포 대상 한국 언어ᆞ역사ᆞ문화 교육 및 모국 초청 교류 등 정체성 함양 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 재외국민을 위한 통합전자행정시스템(G4K) 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 보안성이 강화된 차세대 전자여권 도입",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["재외국민", "재외동포", "전자여권"]
                    },
                    {
                        "name": "11: 국가를 위한 헌신을 잊지 않고 보답하는 나라",
                        "department": ["보훈처"],
                        "category": ["복지"],
                        "description": [
                            {
                                "name": "국가유공자에 대한 보상금ᆞ수당 인상 및 의료ᆞ 복지ᆞ안장시설 확충 등으로 영예로운 삶 보장", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년 4.19혁명 60주년 및 5.18광주민주화운동 40주년 기념사업 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "독립유공자에 대한 예우 확대 및 독립운동 관련 시설물 관리 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "2019년 3.1운동 및 임시정부 수립 100주년 기념사업 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "제대군인 지원 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "위험직무 공상경찰관 특별위로금 지급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "순직ᆞ공상소방관 유가족 지원 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년 6‧25전쟁 70주년 계기 UN참전용사에 대한 감사행사 개최",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["국가유공자", "419혁명", "5.18", "광주민주화운동", "독립유공자", "3.1운동", "임시정부", "제대군인", "경찰관", "소방관","6.25", "참전용사"]
                    },
                    {
                        "name": "12: 사회적 가치 실현을 선도하는 공공기관",
                        "department": ["기재부"],
                        "category": ["일자리", "정치/정부"],
                        "description": [
                            {
                                "name": "’17년부터 단계적으로 공공기관 비정규직의 정규직 전환", 
                                "status": "진행중",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=056&aid=0010483766"
                            }, 
                            {
                                "name": "’17년에 공공기관 성과연봉제 관련 조치 폐기", 
                                "status": "완료",
                                "statuscode": "done",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=018&aid=0003886476"
                            }, 
                            {
                                "name": "’19년까지 공공기관 공시시스템의 정보제공 내용을 대폭 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 편람 수정을 통해 고용친화적 평가를 실현", 
                                "status": "진행중/내년 편람 개정시 반영 예정",
                                "statuscode": "done",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=018&aid=0003886476"
                            }, 
                            {
                                "name": "공공기관 운영에 관한 법률 개정 등을 통해 ’18년부터 공공기관 감사 독립성 강화 및 노동이사제 도입",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["공공기관", "비정규직", "정규직", "성과연봉제", "노동이사제"]
                    }
                ]
            },
            {
                "strategyname": "전략 4 - 권력기관의 민주적 개혁",
                "task": [
                    {
                        "name": "13: 국민의, 국민을 위한 권력기관 개혁",
                        "department": ["법무부", "경찰청", "감사원", "국정원"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "’17년까지 고위공직자비리수사처 설치 등 관련 법령 제정", 
                                "status": "논의중",
                                "statuscode": "discussing"
                            }, 
                            {
                                "name": "’17년까지 경찰권 분산 및 인권친화적 경찰 확립 실행 방안 등과 연계하여 수사권 조정안 마련", 
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=057&aid=0001156058"
                            }, 
                            {
                                "name": "’18년부터 수사권 조정안 시행", 
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=057&aid=0001156058"
                            }, 
                            {
                                "name": "’17년부터 검사의 이의제기권 행사 절차 구체화 및 내부 조직문화 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 검찰총장후보추천위원회와 검찰인사위원회의 중립성・독립성 확보를 위한 제도 정비", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "법무부 탈검찰화", 
                                "status": "진행중",
                                "statusdesc": "법무부는 확고하고 신속하게 ‘법무부 탈검찰화’를 추진하기 위해 외부 인사로 구성된 법무부 ‘법무·검찰개혁위원회’에서 심도있게 논의해 마련할 권고안을 토대로 공수처 법안에 대한 법무부의 입장을 마련하고, 관련 법안의 국회 논의를 적극 지원해 법안의 신속한 통과와 시행을 추진한다. 또한 직제를 개정해 실·국·본부장 7개 직위 중 검찰국장을 제외한 모든 직위에 검사 외에 고위공무원단에 속하는 일반직 공무원도 보할 수 있도록 했다.",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841624&pageIndex=3&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "’17년부터 자치경찰 관련 법률을 제・개정", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 경찰위원회 실질화를 통한 민주적 통제 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 경찰진압장비 사용 요건 법규화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’17년부터 수시보고 개선, 감사위원회의 의결 공개 등 투명성 강화를 위한 감사원법 개정", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국정원을 해외안보정보원으로 개편",
                                "status": "입법 필요",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=421&aid=0002855830"
                            }],
                        "keywords": ["고위공직자비리수사처", "경찰권", "수사권", "이의제기권", "검찰총장후보추천위원회", "검찰인사위원회", "경찰위원회", "경찰진압장비", "감사원법", "국정원", "해외안보정보원"]
                    },
                    {
                        "name": "14: 민생치안 역량 강화 및 사회적 약자 보호",
                        "department": ["경찰청"],
                        "category": ["생활"],
                        "description": [
                            {
                                "name": "’17년부터 파출소 증설 및 탄력순찰제 등 주민밀착ᆞ 참여형 치안 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "범죄예방 환경 디자인(CPTED) 등 예방 시스템 개선과 인프라 확충", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 ‘사회적 약자 보호 3대 치안대책’* 수립 총력 대응", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 치안 R&D 활성화(육안 미확인 법광원, CCTV 영상 검색 고도화 등)로 스마트 폴리스 구현", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국과수 미설치 지역(제주 등 11곳) 합동 감정체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "의무경찰 단계적(5년) 감축 및 경찰 인력 증원",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["파출소", "치안", "범죄예방", "사회적약자", "국과수", "의무경찰", "경찰"]
                    },
                    {
                        "name": "15: 과세형평 제고 및 납세자 친화적 세무행정 구축",
                        "department": ["기재부"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "’17년에 국민의견을 토대로 조세ᆞ재정을 포괄적으로 개혁할 수 있는 기구 설치",
                                "status": "2018년 예정 ('조세·재정개혁 특별위원회')",
                                "statuscode": "none",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=008&aid=0003906241"
                            },  
                            {
                                "name": "’18년에 개혁보고서 작성 및 대통령ᆞ국회 보고", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 자산소득ᆞ초고소득 및 탈루소득 과세는 강화하고 대기업 과세 정상화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "중산층ᆞ서민 등의 세제 지원은 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대주주 주식양도차익 등 자본이득ᆞ초고소득ᆞ금융소득 과세 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "상속ᆞ증여세 신고세액 공제율은 축소", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "상속ᆞ증여세 과세체계 개편 등도 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대기업 비과세ᆞ감면 지속 정비", 
                                "status": "당정 협의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=011&aid=0003077071"
                            },  
                            {
                                "name": "대기업 일감몰아주기 과세 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "부가가치세 대리납부제 단계적 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "해외금융계좌 신고대상 확대 추진", 
                                "status": "완료 (신고기준 금액 5억원 초과로 확대)",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840555&pageIndex=7&startDate=1997-01-01&endDate=2017-08-08&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "근로소득증대세제 지원 및 월세세액공제율(현행 10%) 확대", 
                                "status": "개정안 발표 (중소기업 특별감면제도 중복적용 허용)",
                                "statuscode": "congress",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840551&pageIndex=8&startDate=1997-01-01&endDate=2017-08-08&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "폐업한 자영업자 사업 재개 및 취업 시 소액체납 면제 추진", 
                                "status": "개정안 발표 (1인당 3000만원까지 면제)",
                                "statuscode": "congress",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840551&pageIndex=8&startDate=1997-01-01&endDate=2017-08-08&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "’17년부터 국세청 납세자보호위원회 신설 및 독립성 강화", 
                                "status": "완료",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840555&pageIndex=7&startDate=1997-01-01&endDate=2017-08-08&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "세무조사 남용 방지 장치 보완 및 조세통계 정보공개 획기적 확대 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["조세", "재정", "자산소득", "초고소득", "탈루소득", "과세", "대기업", "중산층", "서민", "세제지원", "상속세", "증여세", "과세체계", "비과세", "일감몰아주기", "부가가치세", "해외금융계좌", "근로소득중대세제", "월세세액공제율", "자영업자", "납세자보호위원회", "국세청", "세무조사"]
                    }
                ]
            }
        ]
    },
    { //국정목표
        "policyname": "더불어 잘사는 경제", //목표명
        "strategies": [
            { // 전략
                "strategyname": "전략 1 - 소득 주도 성장을 위한 일자리경제",
                "task": [
                    {
                        "name": "16: 국민의 눈높이에 맞는 좋은 일자리 창출",
                        "department": ["고용부"],
                        "category": ["일자리"],
                        "description": [
                            {
                                "name": "대통령 직속 일자리위원회 설치 및 범정부적 국가 일자리 정책 집중 관리", 
                                "status": "완료",
                                "statuscode": "done"
                            }, 
                            {
                                "name": "일자리상황판 설치ᆞ운영으로 일자리 정책 및 현황 점검ᆞ관리", 
                                "status": "완료/2017년 7월 31일 갱신",
                                "statuscode": "done",
                                "statuslink": "http://www1.president.go.kr/news/job.php"
                            }, 
                            {
                                "name": "고용영향평가 확대 및 재정지원 일자리사업 개편으로 재정효율성 제고", 
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=081&aid=0002840521"
                            }, 
                            {
                                "name": "공공부문 일자리 충원 로드맵을 마련, ’22년까지 공공부문 일자리 81만개 창출",
                                "status": "일부 진행중 (2017 추경)",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=001&aid=0009425793"
                            }, 
                            {
                                "name": "사회적 대화를 통한 지역ᆞ산업 맞춤형 일자리 창출 - 노사상생형 일자리 모델(예 : 광주, 담양 등) 전국적 확산, 고용영향평가 등과 연계하여 산업ᆞ지역 중심의 고용정책 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["일자리위원회", "대통령직속", "일자리", "일자리상황판", "고용영향평가", "재정효율성", "공공부문", "81만개", "노사상생형"]
                    },
                    {
                        "name": "17: 사회서비스 공공인프라 구축과 일자리 확충",
                        "department": ["복지부"],
                        "category": ["일자리", "복지"],
                        "description": [
                            {
                                "name": "사회서비스 공공인프라 확충", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "보장성 확대를 통해 ’22년까지 양질의 사회서비스 일자리 34만개 창출", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "사회서비스공단 설립을 통해 공공사회서비스 일자리 창출 및 사회서비스 제공인력 처우 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국공립 어린이집, 국공립요양시설, 공공병원 등 공공보건복지인프라 확충을 통한 일자리 창출", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "사회서비스 제공인력 보수 인상, 근로시간 단축 등 처우 개선을 통해 사회서비스의 안정적 제공 및 품질 향상", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "읍면동 주민센터의 ‘찾아가는 보건ᆞ복지서비스’ 강화 및 지자체 사회 복지전담공무원 대폭 확충",
                                "status": "일부 진행중",
                                "statusdesc": "올해 행정안전부 주관으로 20개 읍·면·동에 임팩트 사업을 실시하고, 그 성과를 분석해 2018년에는 추진을 희망하는 200개 읍·면·동에 시범사업 실시 예정",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841071&pageIndex=26&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "방문건강관리를 수행하는 간호직 공무원 등을 ’21년까지 확충하고, 0세아와 노인가구를 대상으로 보편적 방문건강관리서비스 제공",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["사회서비스", "공공인프라", "일자리", "사회서비스공단", "공공사회서비스", "국공립", "어린이집", "요양시설", "공공병원", "공공보건복지인프라", "근로시간", "주민센터", "사회복지전담공무원", "방문건강관리", "간호직공무원", "노인가구"]
                    },
                    {
                        "name": "18: 성별ᆞ연령별 맞춤형 일자리 지원 강화",
                        "department": ["고용부"],
                        "category": ["일자리", "청년"],
                        "description": [
                            {
                                "name": "’18년부터 공공기관 청년고용 의무비율 상향(매년 정원의 3% → 5%)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "민간부문 청년 신규채용 권고(인센티브 검토)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "중소기업이 청년 3명 정규직 채용 시 1명분 임금 지원(’17년 5천명, ’18년~’20년은 매년 신규 2만명)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "취성패 3단계와 연계한 구직촉진수당(30만원, 3개월) 신설ᆞ지급(’17년~’18년)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년부터 훈련참여ᆞ구직활동 청년에게 구직촉진수당(50만원, 6개월) 지급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’20년부터 저소득 근로빈곤층을 포함한 한국형 실업부조로 발전", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "희망퇴직 남용 방지, 경영상 해고제도 개선방안 등 근로계약 종료 전반에 관한 개선방안 마련(’17년)으로 정년제도 실효성 제고", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "‘재직-전직ᆞ재취업-은퇴’ 단계별 재취업 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "적극적 고용개선조치 등 적용사업장 확대, 남녀고용평등법 전 사업장 적용", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "새일센터 확대(150→175개소), 창업지원ᆞ직업훈련ᆞ취업 장려금 등 일자리 연계기능 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["공공기관", "청년고용", "신규채용", "중소기업", "정규직", "구직촉진수당", "저소득근로빈곤층", "희망퇴직","해고제도", "근로계약", "재취업", "은퇴", "고용개선조치", "남녀고용평등법", "새일센터", "창업지원", "직업훈련", "취업장려금"]
                    },
                    {
                        "name": "19: 실직과 은퇴에 대비하는 일자리 안전망 강화",
                        "department": ["고용부"],
                        "category": ["일자리", "청년", "노인"],
                        "description": [
                            {
                                "name": "고용보험 가입대상 확대 예술인, 산재보험 적용대상 특고부터 단계적 적용(’18년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "65세 이상 어르신, 자영업자 고용보험 가입요건 완화 및 사회보험료 지원(’18년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 실업급여 지급수준 및 수급기간 상향으로 실업급여 보장성 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "초단시간근로자 및 자발적 이직자(장기 실직) 실업급여 수급자격 인정 방안 마련 및 중소 영세기업 근로자 공적퇴직연금 도입 검토", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "고용복지+센터 확충", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "취업상담인력 충원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "전문성 강화 및 처우개선 등을 통해 구직자가 만족하는 취업지원 서비스 제공(’18년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년 국가일자리정보플랫폼 구축을 통해 수요자 맞춤형 서비스 제공 및 일자리 공약이행을 위한 핵심정보 생산", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "미래 유망분야 고급인력 양성 지속 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 재직자 직업능력개발 혁신방안 수립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 영세자영업자ᆞ신중년 등에 대한 특화훈련 실시", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "산업별로 자격-교육ᆞ 훈련-경력이 연계되는 역량체계(SQF) 설계",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["공영방송", "지배구조", "지상파", "재허가", "언론인", "해직", "임시조치"]
                    },
                    {
                        "name": "20: 좋은 일자리 창출을 위한 서비스 산업 혁신",
                        "department": ["고용부"],
                        "category": ["일자리", "경제"],
                        "description": [
                            {
                                "name": "제도개선.정책지원을 통해 공유경제 등  신성장.유망서비스 시장 활성화 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 실태조사를 실시하고, ’18년 공유경제 종합계획 수립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "신유형 서비스 창출 및 업종 간 융합 활성화를 위한 규제개선 등 맞춤형 지원 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "서비스 체계 혁신으로 영세 서비스업 생산성 제고 및 저임금 근로자 처우 개선을 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "저임금 영세 서비스업종 생산성 혁신을 위해 ICT 활용 등을 지원하고, ’18년까지 저임금 근로자 처우 개선을 위한 중장기계획 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "좋은 일자리를 창출할 수 있는 업종을 중심으로 국가적 차원의 전략 마련 - ’17년 중 서비스산업 혁신 로드맵을 수립, 서비스 투자 활성화 및 서비스기업의 해외진출을 적극 지원",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["공유경제", "신성장", "유망서비스", "규제개선", "영세서비스업", "생산성", "저임금근로자", "처우개선", "중장기계획", "일자리", "서비스산업", "서비스투자", "서비스기업"]
                    },
                    {
                        "name": "21: 소득 주도 성장을 위한 가계부채 위험 해소",
                        "department": ["금융위"],
                        "category": ["경제", "주택/부동산"],
                        "description": [
                            {
                                "name": "주택 담보 대출 비율(LTV) 및 소득 대비 부채 비율(DTI) 합리적 개선", 
                                "status": "일부 완료 (2017.8.2 투기과열지구에서 40%로 강화)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=025&aid=0002741751"
                            }, 
                            {
                                "name": "’17년부터 총체적 상환능력 심사(DSR)의 단계적 도입으로 가계부채 연착륙 유도",
                                "status": "진행중 (2019년까지 단계적 시행 예정)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=421&aid=0002856998"
                            }, 
                            {
                                "name": "’17년에 대부업법과 이자제한법상의 최고금리를 일원화 하고, 단계적으로 20%로 인하", 
                                "status": "진행중 (2018.1월 대부업법/이자제한법 최고금리 24%로 인하)",
                                "statuscode": "congress",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840768&pageIndex=1"
                            },  
                            {
                                "name": "국민행복기금 및 공공기관 보유 잔여채권 등에 대해 ’17년 중 적극적인 정리방안 마련ᆞ추진", 
                                "status": "진행중 (2017년 8월말까지 소각 예정)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=032&aid=0002807032"
                            }, 
                            {
                                "name": "’17년부터 소멸시효 완성채권 추심ᆞ매각 금지 법제화(채권추심법 개정) 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 중 금융소비자보호법 제정으로 동일기능-동일 규제 체계 도입, 피해구제 실효성 제고 등 금융소비자 보호 강화 노력", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "취약계층 보호를 위해 집값만큼만 상환하는 비소구 주택담보대출은 정책모기지부터 민간으로 단계적 확대(’19년)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["주택담보대출비율", "소득대비부채비율", "LTV", "DTI","가계부채", "총체적상환능력심사", "DSR", "대부업법", "이자제한법", "최고금리", "국민행복기금", "공공기관", "보유잔여채권", "소멸시효완성채권", "채권추심법", "금융소비자보호법", "금융소비자", "취약계층", "비소구주택담보대출"]
                    },
                    {
                        "name": "22: 금융산업 구조 선진화",
                        "department": ["금융위"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "’17년부터 진입규제 등 사전규제를 획기적으로 완화하고, 대신 사후규제를 강화하여 금융업의 경쟁과 혁신을 유도", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "징벌적 과징금 도입, 금융감독원의 검사ᆞ감독체계 등도 개편",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 금융위원회 조직을 기능별로 개편하고, 향후 정부조직개편과 연계하여 정책과 감독 분리 검토", 
                                "status": "준비중 (7월 23일 조직혁신기획단 출범)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=421&aid=0002853917"
                            },  
                            {
                                "name": "’17년부터 정책실명제 확대",
                                "status": "준비중 (7월 23일 조직혁신기획단 출범)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=421&aid=0002853917"
                            },
                            {
                                "name": "전문직공무원 제도 내실화 등을 통해 금융행정 인프라 선진화 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’17년에 금융권의 단기성과 중심의 고액성과급 지급 관행 해소 및 내부통제의 질 향상 등 투명성 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 중 제2금융권 최대주주에 대한 주기적 적격성심사 제도 개선",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 이후 법ᆞ제도 정비를 통해 빅데이터ᆞ핀테크 등 혁신적 금융서비스 개발ᆞ유통 여건 마련",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["진입규제", "사전규제", "사후규제", "금융업", "징벌적과징금", "금융감독원", "금융위원회", "정부조직개편", "정책실명제", "전문직공무원", "금융행정", "금융권", "고액성과급", "제2금융권", "최대주주", "빅데이터", "핀테크"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 2 - 활력이 넘치는 공정경제",
                "task": [
                    {
                        "name": "23: 공정한 시장질서 확립",
                        "department": ["공정위"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "국가적 차원에서 갑을문제 개선ᆞ해소를 위한 대통령 직속 ‘을지로위원회’ 설치 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년 중 하도급ᆞ가맹ᆞ유통ᆞ대리점 분야 불공정행위 근절을 위한 제도 개선 및 법집행 강화", 
                                "status": "일부 진행중 (암행 감시 예정)",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=016&aid=0001270192"
                            },
                            {
                                "name": "징벌적 손해배상제 확대", 
                                "status": "진행중 (2017년 8월 법개정안 제출 예정)",
                                "statuscode": "congress",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=004&oid=374&aid=0000136666"
                            },
                            {
                                "name": "’17년 중 자본시장법상 불공정거래 행위에 대한 제재 강화 및 기업회계 규율 정비", 
                                "status": "일부 진행중 (담합 벌금 인상 예정)",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=079&aid=0002993165"
                            },
                            {
                                "name": "금감원 감리주기 단축(25→10년) 및 분식회계·부실감사에 대한 제재 강화(형벌 : 5~7년 → 10년, 과징금한도 : 20억 → 폐지)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["갑을","을지로위원회", "하도급", "가맹", "불공정행위", "자본시장법", "불공정거래", "기업회계" ,"금감원"]
                    },
                    {
                        "name": "24: 재벌 총수 일가 전횡 방지 및 소유ᆞ지배구조 개선",
                        "department": ["공정위"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "’18년까지 다중대표소송제ᆞ전자투표제 도입, 집중투표제 의무화 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년~’18년 기간 중 지주회사 행위제한 규제 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "인적분할 시 자사주 의결권 부활 방지", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "기존 순환출자 단계적 해소 방안 마련 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년까지 총수 일가 사익편취 규제의 적용대상 확대, 사익편취 행위 상시 감시",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년까지 금융보험사의 계열사에 대한 의결권 제한 강화, ’18년부터는 금융그룹 통합감독도 시행",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["재벌", "총수", "순환출자", "지주회사", "금융보험사", "금융그룹", "의결권"]
                    },
                    {
                        "name": "25: 공정거래 감시 역량 및 소비자 피해구제 강화",
                        "department": ["공정위"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "‘공정거래 법집행체계 개선 TFT’를 구성ᆞ운영하여 의무고발요청기관 확대, 공정위 소관 일부 법률에서 전속고발제 폐지 등 종합적 개선 방안 마련ᆞ추진", 
                                "status": "방침 변화 (전속고발제 단계적 폐지)",
                                "statuscode": "question",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=421&aid=0002861052"
                            },
                            {
                                "name": "’18년까지 법위반 조사권 일부를 광역지자체와 분담", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년에 소비자분야에 집단소송제를 도입하고, 소비자 피해구제 지원 등 소비자권익증진사업을 안정적으로 수행하기 위한 재원 조성ᆞ추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["공정거래", "법집행체계", "의무고발요청기관", "공정위", "전속고발제", "소비자", "집단소송제", "피해구제"]
                    },
                    {
                        "name": "26: 사회적경제 활성화",
                        "department": ["기재부"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "’17년 사회적경제기본법 등 정부 대안 마련, 사회적경제 정책 조정ᆞ 시행을 위한 전담조직 (사회적경제발전위원회 구성, 5개년 사회적경제발전 기본계획 수립, 사회적경제 발전위원회 사무처 설치 등) 구축 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년부터 사회혁신기금, 사회투자펀드 조성, 신용보증 심사기준 및 한도 완화 등 사회적경제의 특성이 반영된 금융시스템 구축 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년부터 공공조달 과정에서 사회적 가치 반영 등 사회책임조달 체계 구축",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년 인력 양성 로드맵 수립, 사회적경제 학습체계 구축 등 사회적 경제에 대한 인력 양성 체계 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 유휴 국ᆞ공유 시설 등의 사회적경제기업의 활용을 촉진토록 제도를 개선하는 등 공유경제 실현", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년부터 도시재생 분야 등의 진출을 지원하고, ’18년부터 지역 일자리 사업 등과의 연계 강화 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["사회적경제기본법", "사회적경제", "사회적경제발전위원회", "사회적경제발전", "사회혁신기금", "사회투자펀드", "금융시스템", "공공조달", "사회적가치", "사회적경제기업", "도시재생"]
                    },
                    {
                        "name": "27: 더불어 발전하는 대ᆞ중소기업 상생 협력",
                        "department": ["중기부"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "’18년부터 적합업종 해제 품목 중 민생에 영향이 큰 업종을 생계형 적합업종으로 지정(’17년 중 특별법 제정)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년부터 복합쇼핑몰에 대하여 대형마트 수준의 영업제한 등을 통해 골목상권을 보호", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "중소기업단체 ‘불공정행위 신고센터’ 설치ᆞ운영 지원 및 단계별 확대*", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년에 대ᆞ중소기업이 이익을 공유하는 협력이익배분제 모델 개발, ’22년까지 200개 기업으로 확산",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["적합업종", "중소기업", "복합쇼핑몰", "대형마트", "골목상권", "불공정행위", "대기업", "협력이익배분제"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 3 - 서민과 중산층을 위한 민생경제",
                "task": [
                    {
                        "name": "28: 소상공인ᆞ자영업자 역량 강화",
                        "department": ["중기부"],
                        "category": ["경제", "생활"],
                        "description": [
                            {
                                "name": "전통시장 신규 도입 복지수당과 복지포인트의 30%를 온누리상품권 등으로 지급",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 모든 전통시장 화재감지시설 설치 및 주차장 보급률 제고", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "소상공인 조직화ᆞ협업화 지원을 강화하고, ’17년 신용카드 우대수수료 적용 가맹점 확대 및 ’19년 카드수수료 인하 등 비용 절감, 성실사업자 의료비ᆞ교육비 세액공제 지원 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 1인 소상공인 고용보험료 30% 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "노란우산공제 가입자를 ’22년까지 160만명으로 확대(’17년 105만명)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "골목상권 ’17년에 지역상권 내몰림 방지 및 생계형 적합업종 법제화, 임차인 지위 강화를 위한 상가임대차 보호법 개정 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["전통시장", "복지수당", "복지포인트", "온누리상품권", "소상공인", "화재감지시설", "신용카드", "세액공제", "노란우산공제", "골목상권", "상가임대차보호법", "임차인"]
                    },
                    {
                        "name": "29: 서민 재산형성 및 금융지원 강화",
                        "department": ["금융위"],
                        "category": ["경제", "생활"],
                        "description": [
                            {
                                "name": "’17년부터 개인종합자산관리계좌(Ko-ISA) 비과세 한도 확대 및 부분인출ᆞ중도해지 허용 범위 확대", 
                                "status": "당정 협의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=057&aid=0001154512"
                            }, 
                            {
                                "name": "자금지원과 채무조정의 원스톱 서민금융 지원 체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "중ᆞ저금리 대출 공급능력 확보를 위해 ’18년부터 서민금융진흥원 신용보증계정 재원의 안정적 조달 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 사잇돌 대출 공급규모 및 공급기관을 확대하여 중금리 시장 활성화 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 지역에서 예금을 수취하는 금융기관의 영업구역 내 개인ᆞ중소기업 대출의무 등을 부여하는 지역재투자 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "서민의 가정경제 파탄 방지를 위해 민영 장발장은행 운영비용 및 개인회생ᆞ파산 신청 시 소요되는 비용 지원 검토",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["서민", "개인종합자산관리계좌", "서민금융", "중금리", "저금리", "대출", "서민금융진흥원", "신용보증계정", "사잇돌대출", "금융기관", "민영장발장은행", "개인회생"]
                    },
                    {
                        "name": "30: 민생과 혁신을 위한 규제 재설계",
                        "department": ["국조실"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "’17년부터 단속보다는 사전예방 중심의 규제 행정 도입, 소상공인 등의 부담 경감을 위한 규제차등화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국민 생활 불편ᆞ부조리 개선 및 불합리한 행정조사 정비 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 생명ᆞ안전ᆞ환경 관련 주요규제 완화 시 심사절차 도입 및 규제 도입 시 사회적 비용 ᆞ편익 분석 강화, 과태료ᆞ과징금의 규제심사 대상 제외 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 ‘원칙허용- 예외금지’의 네거티브 규제 전환, 신기술ᆞ신산업 분야 규제 개선방안 마련 및 미래지향적 규제지도 구축 추진, 일자리 창출을 저해하는 규제 개선 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["사전예방", "소상공인", "규제차등화", "행정조사", "규제", "네거티브규제", "신기술", "신산업"]
                    },
                    {
                        "name": "31: 교통ᆞ통신비 절감으로 국민 생활비 절감",
                        "department": ["국토부", "미래부"],
                        "category": ["통신", "생활", "교통"],
                        "description": [
                            {
                                "name": "광역알뜰교통카드 도입 등 제도 개선을 통해 싸고 편안한 대중교통 서비스 제공",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "법 개정을 통해 ’18년 광역교통청 신설", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "광역버스 노선 추가 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 수도권 광역급행철도 단계적 착공, 기존 전철망 단계적 급행열차 도입 및 시설 개선", 
                                "status": "일부 완료/진행중 (경인선, 경의선, 안산선, 수인선 특급/급행 도입)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=103&oid=421&aid=0002857952"
                            }, 
                            {
                                "name": "어르신(기초연금수급자) 월 11,000원 신규 감면, 저소득층 월 11,000원 추가 감면, 요금할인율을 현행 20%에서 25%로 상향", 
                                "status": "입법예고 (2017년 9월 11일까지)",
                                "statuscode": "congress",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=105&oid=030&aid=0002629644"
                            }, 
                            {
                                "name": "공공 와이파이(Wi-Fi) 확대 구축, 알뜰폰 경쟁력 강화 대책 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "단말기 지원금 상한제 조기 폐지, 분리공시제도 도입 등 고가 단말기 가격 투명화 유도, 위법행위 조사ᆞ시정 등을 통해 통신시장 투명화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["교통비", "통신비", "광역알뜰교통카드", "대중교통", "광역교통청", "광역버스", "광역급행철도", "전철", "급행열차", "수도권", "어르신", "기초연급수급자", "요금할인율", "공용와이파이", "알뜰폰", "단말기지원금상한제", "분리공시제도", "통신시장"]
                    },
                    {
                        "name": "32: 국가기간교통망 공공성 강화 및 국토교통산업 경쟁력 강화",
                        "department": ["국토부"],
                        "category": ["교통"],
                        "description": [
                            {
                                "name": "건설산업 경쟁력 강화: 간접비 지급방식 개선, 임금지급보증제 도입 등 불공정 해소 및 유망분야 육성, 해외진출 지원 통한 일자리 창출", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "화물운송 종사자 보호강화: ’18년 화물자동차법 개정, ’20년 표준운임 산정위원회 구성ᆞ운영 등을 통해 ’21년부터 표준운임제 본격 시행", 
                                "status": "일부 완료/진행중 (근로기준법 개정 추진)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=003&aid=0008093633"
                            }, 
                            {
                                "name": "도로통행료 인하, 벽지노선 운영, 일반철도 서비스 개선 등을 통해 공공성 강화, 간선망 구축 등 교통 네트워크 효율화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 노후 철도차량ᆞ시설 개선을 위한 중장기 개량 계획 수립, 성능기반의 철도시설 관리체계 마련 및 노후도로 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 공공형 택시를 시ᆞ군에 보급",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국가기간교통망", "건설산업", "간접비", "임금지급보증제", "해외진출", "화물운송", "화물자동차법", "표준운임산정위원회", "표준운임제", "도료통행료", "벽지노선", "일반철도", "간선망", "교통네트워크", "노후철도차량", "노후철도시설", "철도시설", "공공형택시"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 4 - 과학기술 발전이 선도하는 4차 산업혁명",
                "task": [
                    {
                        "name": "33: 소프트웨어 강국, ICT 르네상스로 4차 산업혁명 선도 기반 구축",
                        "department": ["과기부"],
                        "category": ["통신", "4차산업혁명"],
                        "description": [
                            {
                                "name": "대통령 직속 4차 산업혁명위원회 신설(’17년 8월) 및 범부처 4차 산업혁명 대응 추진계획 수립(’17년 3분기)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "지능정보 핵심기술 R&D, 인재양성 등에 집중투자하고, ICT 신기술ᆞ서비스 시장진입이 원활하도록 규제 개선 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’17년 IoT 전용망 구축", 
                                "status": "일부 완료 (민간사업자 SKT)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=105&oid=031&aid=0000417744"
                            }, 
                            {
                                "name": "’18년 10기가 인터넷서비스 상용화", 
                                "status": "진행중 (민간사업자 SKT)",
                                "statuscode": "wip",
                                "statuslink": "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170803091522"
                            }, 
                            {
                                "name": "’19년 5G 조기 상용화", 
                                "status": "진행중 (민간이통사업자 중심/KT 2018년 세계최초 시범서비스)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=105&oid=003&aid=0008099268"
                            }, 
                            {
                                "name": "소프트웨어 법체계 및 공공시장 혁신, 인재ᆞ 기술 역량 강화 등을 통해, 소프트웨어를 가장 잘하는 나라, 소프트웨어 기업하기 좋은 나라 실현",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "AI 기반 사이버 보안 위협 대응체계 구축",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "신정보격차 해소 계획 수립ᆞ시행",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "통신분쟁조정제도 도입 등 이용자 보호 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["4차산업혁명위원회", "4차산업혁명", "R&D", "지능정보", "인재양성", "인터넷","소프트웨어", "공공시장", "사이버보안", "보안위협", "신정보격차", "통신분쟁조정제도" ,"5G", "IoT","10기가"]
                    },
                    {
                        "name": "34: 고부가가치 창출 미래형 신산업 발굴ᆞ육성",
                        "department": ["산업부", "과기부", "국토부", "복지부"],
                        "category": ["4차산업혁명", "과학", "교통"],
                        "description": [
                            {
                                "name": "전기차ᆞ수소차 충전 인프라 확충", 
                                "status": "진행중 (2017년 말까지 급속충전소 2배 증가)",
                                "statusdesc": "환경부는 ‘전기차 충전 인프라 설치·운영 지침’을 개정해 18일부터 공용 완속 충전기 설치를 대폭 확대하며 신청은 전기차 충전소 홈페이지(www.ev.or.kr)에서 할 수 있다. 기존의 완속충전기 설치는 주차면 100면 이상인 공동주택·사업장 등으로 제한됐으나 이번 지침 개정으로 공용 충전기 설치공간이 있고 관리인력이 있으면 누구나 설치 신청을 할 수 있다.",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841262&pageIndex=17&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "자율차ᆞ전기차ᆞ수소차 안전기준 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "지능형 로봇, 3D프린팅, ARᆞVR, IoT가전, 스마트선박, 나노ᆞ바이오, 항공ᆞ우주 등 첨단기술 산업 육성을 위해 R&D 및 실증ᆞ인프라 구축 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "핵심기술 개발, 인력양성, 사업화 및 해외진출 지원 등을 통해 제약ᆞ바이오ᆞ마이크로의료로봇 등 의료기기 산업 성장 생태계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "자율주행차 테스트베드ᆞ인프라, 자율협력주행 커넥티드 서비스, 스마트도로 등을 구축하고 ’20년 준자율주행차 조기 상용화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "드론산업 활성화 지원 로드맵 마련(’17년) 및 인프라 구축, 제도 개선, 기술개발, 융합생태계 조성 등 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "신속인증제 운영 활성화, 범부처 TBT대응지원 센터 운영, 신속표준제도* 도입 등 신산업 표준ᆞ인증제도 혁신",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["전기차", "수소차", "충전인프라", "자율차", "자율주행", "로봇", "나노", "바이오", "항공", "우주", "첨단기술", "해외진출", "의료기기", "인프라", "자율협력주행", "스마트도로", "준자율주행차", "드론산업", "신속인증제", "신속표준제도", "AR","VR", "IoT","3D프린팅"]
                    },
                    {
                        "name": "35: 자율과 책임의 과학기술 혁신 생태계 조성",
                        "department": ["과기부"],
                        "category": ["과학", "4차산업혁명", "북한"],
                        "description": [
                            {
                                "name": "’17년 국가과학기술정책 자문ᆞ조정 기구통합", 
                                "status": "세부계획 미정 (과학기술기본법 개정 필요)",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "과학기술총괄부처의 연구개발 관련 예산권한 강화 및 정책-예산-평가간 연계 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "각종 R&D 관리규정 및 시스템ᆞ서식 일원화와 간소화 추진, ’19년부터 연구비 통합관리시스템 본격 운영", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "정부R&D 정보 제공 체계 개선으로 관련정보*의 개방 확대, 국민참여 기반의 국민생활문제 해결 R&D 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "재외 동포 및 북한 과학기술인 교류 확대, 인류 공동 문제해결에 기여하는 과학연구로 글로벌사회 국가 지위 향상",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국가과학기술정책", "자문", "과학기술총괄부처" ,"연구개발", "예산", "연구비통합관리시스템", "재외동포", "북한과학기술인", "과학", "R&D"]
                    },
                    {
                        "name": "36: 청년과학자와 기초연구 지원으로 과학기술 미래역량 확충",
                        "department": ["과기부"],
                        "category": ["청년", "과학", "4차산업혁명", "여성"],
                        "description": [
                            {
                                "name": "기초연구 지원 확대 - 연구자 주도 기초연구 예산 2배 확대(’17년 1.2조원), 연구과제 관리・평가제도 등의 개선을 통해 연구자 자율성 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "박사후 연구원 등에 근로계약 체결 및 4대 보험 보장 의무화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "중소기업 R&D 부서에 취업하는 청년 과학기술인 연금 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "미취업 석ᆞ박사의 기업 연구과제 참여 지원, 과제기반 테뉴어 제도 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "경력단절 여성 과학기술인과 산‧학‧연 기관 매칭, 대체인력 지원 등으로 여성과학기술인의 경력 단절 방지", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["기초연구", "과학", "연구자", "연구과제", "박사후연구원", "근로계약", "4대보험", "중소기업", "과학기술인", "청년", "석박사", "경력단절" ,"여성", "R&D"]
                    },
                    {
                        "name": "37:  친환경 미래 에너지 발굴ᆞ육성",
                        "department": ["산업부"],
                        "category": ["환경/안전"],
                        "description": [
                            {
                                "name": "재생에너지 소규모 사업자의 참여 여건 및 기업투자 여건 개선 등을 통해 ’30년 재생에너지 발전량 비중 20% 달성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 공공기관에 ESS 설치 의무화 및 지능형 계량 시스템 전국 설치 완료", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년에 주요 산업기기 에너지 최저효율제 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년에 공공부문 제로에너지건축물 인증 의무화 및 국가 열지도 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년에 에너지바우처 지원대상에 중증희귀질환자 가구 추가 등 에너지 소외계층 복지 지원 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["재생에너지", "소규모사업자", "기업투자", "공공기관", "지능형계량시스템", "산업기기", "에너지", "최저효율제", "공공부문", "제로에너지건축물", "국가열지도" ,"에너지바우처", "중증희귀질환자", "소외계층", "ESS"]
                    },
                    {
                        "name": "38: 주력산업 경쟁력 제고로 산업경제의 활력 회복",
                        "department": ["산업부"],
                        "category": ["4차산업혁명", "경제"],
                        "description": [
                            {
                                "name": "’17년에 4차 산업혁명 대응을 위한 제조업 부흥전략 수립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년까지 스마트 공장 인증제도 도입 및 금융지원 등 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "매년 50개 기업 사업재편 지원, 사업재편 기업에 대한 인센티브 강화로 ’19년까지 산업 전반으로 선제적 구조조정 확산", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년까지 국가 브랜드 전략과 산업ᆞ무역정책을 연계한 ‘Korean-Made 전략’ 수립 및 맞춤형 지원 등 강화*로 수출기업화 촉진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "신산업 및 고용창출 효과가 높은 외국인투자ᆞ유턴기업을 중점 유치하는 방향으로 ’18년까지 관련 지원제도 개편",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["4차산업혁명", "제조업", "스마트공장", "금융지원" ,"사업재편", "국가브랜드전략" ,"무역정책", "수출기업화" ,"신산업", "고용창출" ,"외국인투자", "유턴기업", "Korean-Made"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 5 - 중소벤처가 주도하는 창업과 혁신성장",
                "task": [
                    {
                        "name": "39: 혁신을 응원하는 창업국가 조성",
                        "department": ["중기부"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "기업투자촉진법(가칭) 제정",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "엔젤투자 활성화 및 펀드조성 확대 등을 통해 ’22년 신규 벤처펀드 5조원 돌파", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’22년까지 기술창업자 5.6만명 육성 및 성장단계별 정책자금 확충으로 기술인력 혁신창업 촉진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년에 창업기업 부담금 면제범위 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "공공 조달 의무구매제도 도입, 벤처기업 확인제도 개편 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 정책금융 연대보증 면제대상 확대(창업 7년 이내) 및 사업 실패자의 소액체납세금 한시적 면제",
                                "status": "완료",
                                "statusdesc": "17년 하반기 은행 대출심사시 기술력, 특허권 등 기업가치를 정교하게 반영할 수 있는 기반을 강화하고 실패에 대한 두려움 없이 창업할 수 있도록 연대보증을 폐지하기로 했다. 정책금융을 중심으로 17년 8월 중 연대보증 폐지대상을 확대하고 18년 상반기 책임경영심사 등을 통한 전면 폐지를 추진하기로 했다.",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841571&pageIndex=7&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            },
                            {
                                "name": "’18년 정책금융 부실채권 채무조정 범위 확대 등 창업 실패 부담 완화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "성실실패 재창업자를 대상으로 맞춤형 교육, 사업화, 자금 등 패키지식 지원 확대(’22년까지 5.5천명)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["성실실패재창업자", "정책금융", "창업실패", "창업", "연대보증", "부실채권", "사업실패자", "소액체납세금", "공공조달" ,"의무구매제도", "벤처기업", "창업기업","기술창업자", "혁신창업", "엔젤투자", "벤처펀드", "창업"]
                    },
                    {
                        "name": "40: 중소기업의 튼튼한 성장 환경 구축",
                        "department": ["중기부"],
                        "category": ["경제"],
                        "description": [
                            {
                                "name": "중소벤처기업부 신설로 중소기업 정책 일원화 및 지원사업 유사중복 등 조정기능 강화", 
                                "status": "완료",
                                "statuscode": "done"
                            }, 
                            {
                                "name": "정부 중소기업 전용 R&D 2배 확대 및 R&D 지원체계를 수요자 중심으로 재설계*", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "약속어음제도 단계적 폐지(’22년)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국가계약법에 공동사업제품 조합추천제도 근거 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "해외직접판매 지원체계 마련, 온라인 수출 통합지원을 위한 온라인수출 통합플랫폼 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 글로벌 강소기업 및 히든챔피언 1200개 육성",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "정부 법령ᆞ지원제도 조사 후 중소기업 성장걸림돌 발굴ᆞ개선",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["중소벤처기업부", "중소기업", "약속어음제도", "국가계약법", "해외직접판매", "온라인수출", "글로벌강소기업"]
                    },
                    {
                        "name": "41: 대ᆞ중소기업 임금 격차 축소 등을 통한 중소기업 인력난 해소",
                        "department": ["중기부"],
                        "category": ["청년", "일자리", "경제"],
                        "description": [
                            {
                                "name": "’17년부터 청년추가고용장려금 운영, 중소기업이 청년 3명 정규직 채용 시 1명분 임금 지원", 
                                "status": "준비중 (2017년 3000명, 2018년 2만명 예정)",
                                "statuscode": "await",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=008&aid=0003909010"
                            }, 
                            {
                                "name": "중소기업 인재 유입을 촉진하고 재교육 확산을 위해 ’22년까지 ICT융합 등 4차 산업혁명 관련 계약학과 대폭 확충 - 마이스터고ᆞ특성화고 우수 학생을 기초R&D 전문인력 등으로 양성하는 ‘영마이스터 육성 과정’을 신설ᆞ운영", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 기업 성장 후 주식ᆞ이익 일부를 근로자와 공유하도록 사전 약정하는 미래성과공유제 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["청년추가고용장려금", "중소기업", "정규직", "청년", "4차산업혁명", "마이스터고", "특성화고", "영마이스터", "미래성과공유제"]
                    }
                ]
            }
        ]
    },
    { //국정목표
        "policyname": "내 삶을 책임지는 국가", //목표명
        "strategies": [
            { // 전략
                "strategyname": "전략 1 - 모두가 누리는 포용적 복지국가",
                "task": [
                    {
                        "name": "42: 국민의 기본생활을 보장하는 맞춤형 사회보장",
                        "department": ["복지부"],
                        "category": ["복지", "청년","노인", "아동", "보육"],
                        "description": [
                            {
                                "name": "기초생활보장 주거급여는 ’18년부터 부양의무자 기준 폐지, 생계ᆞ의료급여는 소득재산 하위 70% 중 노인ᆞ중증장애인이 포함된 가구에 대한 부양의무자 기준 적용 제외(’19년부터 단계적 확대)", 
                                "status": "진행중 (2017년 11월부터 기준완화)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=020&aid=0003084039"
                            }, 
                            {
                                "name": "’18년부터 0~5세 아동수당 월 10만원 지급", 
                                "status": "입법예고",
                                "statusdesc": "18년 7월부터 지급키로 하고 아동수당법 제정안에 대해 17년 9월 4일까지 입법예고",
                                "statuscode": "congress",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841150&pageIndex=22&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "’17년부터 미취업 청년에 대해 청년구직촉진수당(30만원, 3개월) 지급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년에 기초연금ᆞ장애인연금(기초급여)을 25만원으로 인상",
                                "status": "입법예고",
                                "statuscode": "congress",
                                "statusdesc": "기존에 기초연금을 수급하는 어르신들은 내년 4월부터 현행 20만 6050원에서 약 5만 원 가량 인상된 25만원을 기초연금으로 받을 수 있음",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841333&pageIndex=15&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "국민연금ᆞ고용보험 등 사회보험 사각지대를 해소하고, 두루누리 사회보험료 지원사업에 건강보험료 추가 지원(신규가입자)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "장애등급제 단계적 폐지 및 종합지원체계 도입 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["기초생활보장", "주거급여", "부양의무자", "생계급여", "의료급여", "소득재산", "노인", "중증장애인", "아동수당", "청년구직촉진수당", "기초연금", "장애인연금", "국민연금", "고용보험", "건강보험료", "장애등급제"]
                    },
                    {
                        "name": "43: 고령사회 대비, 건강하고 품위 있는 노후생활 보장",
                        "department": ["복지부"],
                        "category": ["노인", "복지", "여성"],
                        "description": [
                            {
                                "name": "국민연금 소득대체율 인상을 ’18년 국민연금 재정계산과 연계하여 사회적 합의하에 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "기초연금액을 ’18년 25만원, ’21년 30만원으로 상향지급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "단시간ᆞ일용근로자, 경력단절 여성 등의 국민연금 가입 지원 확대 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "두루누리 건강보험 지원 확대, 건강보험 임의 계속 가입기간ᆞ대상 확대 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 전국 252개 치매안심센터 확충 및 치매 안심병원 확충 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 중증치매 환자 본인부담률 인하 및 고비용 진단검사 급여화, 장기요양 치매수급자 본인부담 경감 확대",
                                "status": "진행중",
                                "statuscode": "wip",
                                "statusdesc": "17년 10월부터 중증치매 환자는 건강보험 의료비의 10%만 부담. 중증 치매환자 가운데 정도가 심한 경우엔 일수 제한 없이, 통원치료가 가능한 경우에는 연간 최대 120일의 산정 특례적용.",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841328&pageIndex=16&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "노인 일자리수 ’17년 43.7만개에서 ’22년 80만개로 확대하고, 공익활동 참여수당을 ’20년까지 40만원으로 인상(일자리 유형에 따라 차등)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국민연금기금운용위원회의 상설화, 기금투자운용 의사결정과정 및 투자내역ᆞ자산내역 공시 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["국민연금", "기초연금", "소득대체율", "두루누리", "건강보험", "치매안심센터", "중증치매환자", "노인일자리", "국민연금기금운용위원회"]
                    },
                    {
                        "name": "44: 건강보험 보장성 강화 및 예방 중심 건강관리 지원",
                        "department": ["복지부"],
                        "category": ["복지", "아동", "노인"],
                        "description": [
                            {
                                "name": "건강보험 선별급여 적용항목 확대 및 신포괄수가 확대 등의 추진으로 비급여 풍선효과 해소", 
                                "status": "진행중 (2017. 8.9 강화대책 대통령발표)",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840920&pageIndex=1"
                            }, 
                            {
                                "name": "선택진료 폐지, 상급병실 단계적 급여화, 간호ᆞ간병통합서비스 확대(간호인력 확충 병행) 등 3대 비급여 부담 지속 경감", 
                                "status": "진행중 (2017. 8.9 강화대책 대통령발표)",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840920&pageIndex=1"
                            }, 
                            {
                                "name": "저소득층 의료비 부담 완화를 위해 소득수준을 고려하여 본인부담상한액 설정", 
                                "status": "진행중 (2017. 8.9 강화대책 대통령발표)",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840920&pageIndex=1"
                            }, 
                            {
                                "name": "’17년부터 15세 이하 아동 입원진료비 본인부담률을 5%로 인하하고, 민간실손보험 관리 강화로 건강보험 재정건전성 제고",
                                "status": "진행중 (2017. 8.9 강화대책 대통령발표)",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840920&pageIndex=1"
                            }, 
                            {
                                "name": "40대 이상 진단 바우처 도입 등 건강검진 사후관리 강화, 초ᆞ중ᆞ고생 독감 예방접종 국가 지원 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "정신건강 관련 서비스 전달체계 개편 및 전문인력 충원과 근무조건 개선, 자살예방 및 생명존중 문화 확산", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "건강보험료 부과체계 개편 - 평가소득 폐지, 보수 외 고소득 직장인 보험료 부담 강화, 피부양자 단계적 축소 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["건강보험", "선별급여", "신포괄수가", "비급여", "본인부담상한액", "진단바우처", "건강검진", "정신건강", "평가소득", "고소득직장인", "건감보험료"]
                    },
                    {
                        "name": "45: 의료공공성 확보 및 환자 중심 의료서비스 제공",
                        "department": ["복지부"],
                        "category": ["복지"],
                        "description": [
                            {
                                "name": "’20년까지 1차의료기관과 대형병원의 역할* 정립을 유도할 수 있는 건강보험 수가구조 개편방안 마련", 
                                "status": "진행중 (2017. 8.9 강화대책 대통령발표)",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840920&pageIndex=1"
                            }, 
                            {
                                "name": "’19년부터 환자 의뢰-회송 본 사업 시행 및 진료권역별 정보교류시스템 구축을 통해 국가적 진료정보 교류 인프라 연계", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 의료 취약지에 300병상 이상 거점 종합병원 확충으로 취약지 의료 수준 제고 - ’19년에 공중보건장학제도 시범사업 실시 및 취약지 공공의료기관 의사 파견지원 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 응급의료전용헬기, 소아 전문응급센터 및 재활병원 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "전국에 권역외상센터 확대 및 심혈관센터 지정ᆞ설립 등으로 환자 중심 응급의료체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 고위험 감염병 및 원인미상 질환 대응을 위한 시설ᆞ장비ᆞ인력을 갖춘 중앙ᆞ권역별 감염병 전문병원 설치", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["1차의료기관", "대형병원", "건강보험수가구조", "진료정보", "의료취약지", "응급의료전용헬기" ,"소아전문응급센터", "재활병원", "권역외상센터", "심혈관센터", "감염병"]
                    },
                    {
                        "name": "46: 서민이 안심하고 사는 주거 환경 조성",
                        "department": ["국토부"],
                        "category": ["생활", "주택/부동산"],
                        "description": [
                            {
                                "name": "공공임대주택 연평균 13만호 공급 및 공공지원 임대주택 연평균 4만호 공급 등 공적임대주택 연평균 17만호 공급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "임대주택 입주 시기 예측을 위해 대기자 명부제도를 도입하고, 복잡한 임대주택 유형을 통합하여 관리 효율성 제고", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "주거급여 지원대상 지속 확대 및 지원금액 단계적 현실화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "주거약자용 주택 입주자 선정 시 중증장애인 우선 공급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "사회통합형 주택정책 - 자발적 임대주택의 등록 확대를 위한 인센티브 강화, 임대차계약갱신청구권 등의 단계적 제도화 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["공공임대주택", "공공지원임대주택", "임대주택", "대기자명부제도", "주거급여", "중증장애인", "자발적임대주택", "임대차계약갱신청구권"]
                    },
                    {
                        "name": "47: 청년과 신혼부부 주거 부담 경감",
                        "department": ["국토부"],
                        "category": ["주택/부동산","청년"],
                        "description": [
                            {
                                "name": "’22년까지 20만호(전체의 30%) 임대주택 신혼부부 공급(준공기준) - 신혼부부 특화주택 건설 및 공공임대주택 입주자 선정 시 신혼부부 특별공급 비율 상향", 
                                "status": "진행중",
                                "statusdesc": "청년/신혼부부 전세임대주택 3200채, 시세 30% 수준의 청년매입임대주택 1500호 2017년 내 공급",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840953&pageIndex=28&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "’18년에 신혼부부 전용 전세자금 및 구입자금 대출 상품 출시 및 저소득 신혼부부 대상 주거비 경감 지원 실시",
                                "status": "세부계획 발표/준비중",
                                "statuscode": "await",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=421&aid=0002865860"
                            }, 
                            {
                                "name": "임대료가 저렴한 셰어형 임대주택(5만실) 및 역세권 등 주변 청년주택(20만실) 공급, 기숙사 확대(5만명) 등", 
                                "status": "진행중",
                                "statusdesc": "청년/신혼부부 전세임대주택 3200채, 시세 30% 수준의 청년매입임대주택 1500호 2017년 내 공급",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840953&pageIndex=28&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }],
                        "keywords": ["신혼부부", "임대주택", "공공임대주택", "전세자금", "저소득신혼부부", "셰어형임대주택", "청년주택", "기숙사확대"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 2 - 국가가 책임지는 보육과 교육",
                "task": [
                    {
                        "name": "48: 미래세대 투자를 통한 저출산 극복",
                        "department": ["복지부"],
                        "category": ["주택/부동산", "복지", "보육","아동", "여성"],
                        "description": [
                            {
                                "name": "’22년까지 공공임대주택의 30% 신혼부부 우선 공급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "17년부터 난임시술비 등 건강보험 적용", 
                                "status": "진행중 (2017년 10월 실시)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=018&aid=0003885557"
                            },
                            {
                                "name": "출산지원금 도입방안 검토", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년부터 아동수당 지급(0~5세, 월 10만원)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "매년 어린이집 대폭 확충하여 ’22년 국공립 어린이집 이용률 40% 달성",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년부터 첫 3개월 육아휴직급여 2배 인상, ’18년부터 아빠 육아휴직 보너스 제도 도입 및 육아로 인한 근로시간 단축 지원(10to4 더불어 돌봄)", 
                                "status": "완료",
                                "statusdesc": "다음달 1일부터 육아휴직때 첫 3개월의 육아휴직급여는 통상임금의 80%(상한 150만원, 하한 70만원)로 상향 지급.",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841344&pageIndex=15&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            },
                            {
                                "name": "저출산 대책에 대한 컨트롤타워 기능 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년부터 빅데이터 활용 위기아동 조기 발견 시스템 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["공공임대주택", "신혼부부", "난임시술비", "출산지원금", "아동수당", "국공립어린이집", "육아휴직급여", "육아휴직", "저출산","위기아동조기발견시스템"]
                    },
                    {
                        "name": "49: 유아에서 대학까지 교육의 공공성 강화",
                        "department": ["교육부"],
                        "category": ["청년","아동","교육","복지","보육"],
                        "description": [
                            {
                                "name": "’18년 어린이집 누리과정 전액 국고지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국ᆞ공립유치원 취학률 확대(’17년 25% → ’22년 40%)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "교사자질 향상과 교사처우 개선(’18년), 전문교육과정 운영, 자격체계 개편 추진(교육부ᆞ복지부)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "온종일 돌봄교실을 초등학교 전 학년으로 점차 확대하고 내실화방안 병행 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’20년부터 고등학교 무상교육 단계적 실시(’22년 완성)를 통해 고등학생 입학금ᆞ수업료ᆞ학교운영지원비ᆞ교과서비 지원",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년부터 대학생이 체감할 수 있는 등록금 부담 경감, 학자금 대출이자 부담 경감 및 입학금 단계적 폐지 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["누리과정", "어린이집", "국공립유치원", "교사처우", "돌봄교실", "무상교육", "고등학교", "등록금", "입학금", "학자금대출이자", "대학생"]
                    },
                    {
                        "name": "50: 교실혁명을 통한 공교육 혁신",
                        "department": ["교육부"],
                        "category": ["교육", "복지", "아동", "보육"],
                        "description": [
                            {
                                "name": "유아ᆞ초등학생 적정 학습시간 및 휴식시간 보장 법제화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "초중고교 필수교과 축소 및 선택과목 확대, 문예체 교육 활성화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년 고교학점제 도입ᆞ확대, 국가교육회의 (’17년 설치)에서 의견수렴을 통해 단계적 고교체제 개편 추진",
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=003&aid=0008083961"
                            },
                            {
                                "name": " ’17년 기초학력 보장법 제정을 통해 국가 차원의 기초 학력 보장체제 구축, ’18년 1수업 2교사제 등 단위학교 지원 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년 국가수준학업성취도 평가 표집평가로 전환, ’18년부터 초ᆞ중학교 학생 평가제도 개선, 혁신학교(지구)의 성과 일반 학교 확산, 자유학기제의 내실화 및 자유학년제 확산 등 추진", 
                                "status": "진행중 (학업성취도평가 표집평가 전환완료)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=003&aid=0008019382"
                            },
                            {
                                "name": "교장공모제 확대(’18년)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "성과제도 개선 등 교원인 사제도 개선",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "교ᆞ사대 교육과정(교직과정) 개선방안 마련(’18년)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "복잡한 대입전형 단순화 추진ᆞ적용(’18년~), 중장기 대입 제도 개선* 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["유아", "초등학생", "학습시간", "휴식시간", "필수교과", "고교학점제", "기초학력보장법", "국가수준학업성취도", "교장공모제", "교원인사제도", "대입전형"]
                    },
                    {
                        "name": "51: 교육의 희망사다리 복원",
                        "department": ["교육부"],
                        "category": ["교육", "복지"],
                        "description": [
                            {
                                "name": "사회적 배려 대상자 기회균형 선발 의무화(’21학년도), 선발비율 확대 대학 인센티브 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "저소득층ᆞ지방고 졸업생 지방대 의약학 계열 입학 기회 확대*, 법학전문대학원 블라인드 면접 의무화 및 취약계층 학생선발**과 장학금 지원 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "특수교사ᆞ학교(급) 확대, 통합교육 지원교사 (순회교사) 배치, 장애대학생 진로ᆞ취업교육 강화 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국가직 지역인재 9급 채용 단계적 확대 및 공공기관ᆞ민간기업의 고졸채용 유도(’17년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "고졸기술인재 국비유학 및 글로벌 인턴 확대, 직업계고 취업처 발굴(’17년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대입에서 출신 고교 블라인드 면접 도입",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "공공기관ᆞ지방공기업 블라인드 채용 의무화 및 민간기업 확산 유도",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["사회적배려대상자", "기회균형", "대입", "저소득층", "지방고", "블라인드", "취약계층", "특수교사", "특수학급", "국가직지역인재", "공공기관"]
                    },
                    {
                        "name": "52: 고등교육의 질 제고 및 평생ᆞ직업교육 혁신",
                        "department": ["교육부"],
                        "category": ["교육", "복지", "4차산업혁명"],
                        "description": [
                            {
                                "name": "지자체와의 연계 강화를 통한 거점 국립대 집중육성 및 지역 강소대학 지원 확대(’18년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대학 재정지원사업 전면 개편(일반과 특수목적 구분) 및 순수 기초연구 예산 약 2배 증액, 도전적 연구 지원 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년 직업교육 마스터플랜 마련 및 직업계고 재정지원 확대, 직업계고 학점제 단계적 운영(’18년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년 전문대학에 지원 확대 방안 마련 및 ’19년 공영형 전문대 운영을 통해 전문대를 직업교육 지역거점으로 육성",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년 4차 산업분야를 우선으로 분야별 ‘한국형 나노디그리’ 모델 개발ᆞ운영, 성인 비문해자 교육기회 확대, 한국형 무크(K-MOOC) 강좌 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대학-공공기관-지자체가 연계된 산학협력 클러스터 조성, 대학 내 기업ᆞ연구소 등 입주로 상시적 산학협력 촉진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국립대", "지역강소대학", "기초연구", "대학재정지원사업", "직업교육", "전문대학", "나노디그리", "한국형무크", "산학협력"]
                    },
                    {
                        "name": "53: 아동ᆞ청소년의 안전하고 건강한 성장 지원",
                        "department": ["여가부"],
                        "category": ["아동","복지","보육","청년"],
                        "description": [
                            {
                                "name": "’21년까지 학교밖청소년지원센터 전체 시군구 확대로 접근성ᆞ지원기능 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "생애주기별 각종 위기에서 예방부터 보호·치료까지 종합적 지원체계 마련, 가족정책과 아동ᆞ청소년 업무 연계ᆞ통합 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "시설 퇴소 아동에게 실질적 도움이 될 수 있는 소득ᆞ주거ᆞ자립지원 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "시도 등에 청소년 육성 전담공무원 배치 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "청소년 활동 및 자원봉사 운영 내실화, 방과후아카데미 운영 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["학교밖청소년지원센터", "생애주기", "시설퇴소아동", "청소년육성전담공무원"]
                    },
                    {
                        "name": "54: 미래 교육 환경 조성 및 안전한 학교 구현",
                        "department": ["교육부"],
                        "category": ["교육", "복지", "아동"],
                        "description": [
                            {
                                "name": "디지털 인문학적 소양을 갖추도록 소프트웨어 교육 내실화 및 선도 핵심교원 육성(’21년, 1만명)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "지능형 학습분석 서비스 제공(’20년) 및 교육용 오픈마켓 구축ᆞ운영(’18년~)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "교사 1인당 학생 수를 OECD 평균 수준으로 개선, 초ᆞ중등 교과교사와 비교과교사(유아ᆞ특수 등) 확충, 학교 비정규직 정규직화 및 처우 개선", 
                                "status": "진행중 (2017년 추경 반영, 비교과 압도적 확충)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=020&aid=0003083801"
                            },
                            {
                                "name": "석면 제거, 내진 보강, 분필칠판 및 노후 냉난방기 교체 등 낡은 학교 환경 개선, 공기정화장치 설치 등 학교미세먼지대책 마련(’18년)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년 아동학대 조기 발견을 위한 시스템 간 연계, 교육환경보호구역 인근 도박시설에 대한 합리적 규제조치 마련(’18년)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["소프트웨어교육", "지능형학습분석", "교과교사", "학교비정규직", "학교시설", "아동학대", "학교미세먼지대책"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 3 - 국민안전과 생명을 지키는 안심사회",
                "task": [
                    {
                        "name": "55: 안전사고 예방 및 재난 안전관리의 국가책임체제 구축",
                        "department": ["안전처"],
                        "category": ["생활","교통","환경/안전"],
                        "description": [
                            {
                                "name": "헌법 개정 시 국민안전권 명시",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년까지 안전취약계층 지원 법적근거 마련 및 취약계층 안전서비스 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "범정부 교통안전 추진체계 구축 - ’17년에 스마트 철도안전 기본계획 수립, ’22년까지 항공안전 빅데이터 플랫폼 구축 등 철도와 항공기 안전 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "보행자 우선 및 교통약자 보호, 취약계층 배려 중심의 교통정책 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "승강기・건설・지하안전 등 부문별 위협요소 제거", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "지진 조기경보체계 개선, 내진설계・보강, 활성단층 조사 실시, 지진 대비 교육・훈련 확대 등 ’20년까지 선진국 수준 지진 대응체계 마련 - ’18년까지 지진 조기경보시간 7초~25초로 단축(’16년 50초)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "소방특별조사 인력・대상 확대 및 위험특성별 맞춤형 안전대책 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 전문예보관 양성", 
                                "status": "준비/진행중",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=103&oid=020&aid=0003082757"
                            }, 
                            {
                                "name": "수치예보기술 개발(’19년) 및 ’21년까지 한국형 날씨 예측모델 운영 등을 통해 맞춤형 스마트 기상정보 제공", 
                                "status": "진행중",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=103&oid=020&aid=0003082757"
                            } ],
                        "keywords": ["헌법", "국민안전권", "안전취약계층", "교통안전", "철도","항공기", "안전위험요소", "지진", "조기경보체계" ,"내진설계", "활성단층", "화재예방", "전문예보관", "수치예보기술", "한국형날씨예측모델"]
                    },
                    {
                        "name": "56: 통합적 재난관리체계 구축 및 현장 즉시대응 역량 강화",
                        "department": ["안전처"],
                        "category": ["환경/안전", "생활"],
                        "description": [
                            {
                                "name": "국가위기관리센터 역할 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "자치단체ᆞ경찰ᆞ소방ᆞ해경을 유기적으로 연계하여 국가재난관리 역량 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 소방청 독립 및 소방인력과 장비 확충, 119구급서비스 인프라 확충을 통한 현장 중심 육상재난 대비ᆞ대응역량 강화", 
                                "status": "진행중 (소방청 독립)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=003&aid=0008095212"
                            }, 
                            {
                                "name": "소방공무원의 근속승진 단축 및 국가직화 검토, 소방복합치유센터 설립 등 처우 개선과 치료 지원 확대", 
                                "status": "법안 계류중",
                                "statuscode": "congress",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=022&aid=0003195623"
                            }, 
                            {
                                "name": "’17년에 해경청 독립 및 수사・정보기능 정상화를 통한 해경의 역할 재정립", 
                                "status": "완료",
                                "statuscode": "done",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=001&aid=0009480297"
                            }, 
                            {
                                "name": "불법 조업 중국어선 근절을 통한 해양영토주권 수호",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대국민 재난정보 전달체계 전면 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 재난 안전통신망 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "지진해일 분석ᆞ예측ᆞ정보전달 체계 고도화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년에 독립적인 재난사고 조사위원회 설립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 까지 대국민 재난트라우마 극복 지원을 위한 총괄 지원체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["국가위기관리센터", "국가재난관리", "소방청", "소방인력", "소방장비", "119", "소방공무원", "해경청", "중국어선", "재난정보", "재난안전통신망", "지진해일", "재난사고조사위원회", "재난트라우마"]
                    },
                    {
                        "name": "57: 국민 건강을 지키는 생활안전 강화",
                        "department": ["환경부", "식약처"],
                        "category": ["환경/안전", "생활"],
                        "description": [
                            {
                                "name": "가습기 살균제 피해구제 및 재발방지 - 특별피해구제계정 설치(1,250억원) 등 전향적인 지원대책 마련(’17년, 구제재원ᆞ피해인정범위 확대 및 사후관리 등)", 
                                "status": "완료 (시행령 통과/2017년 8월 9일부터)",
                                "statuscode": "done",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=056&aid=0010488330"
                            }, 
                            {
                                "name": "화학물질 유해정보 확보 공개 - 1톤 이상 모든 기존 화학물질(7천종)의 정부 등록(~’30년) 의무화 및 영업비밀 남용 차단을 위한 사전승인제 도입(’18년)", 
                                "status": "완료 ('2018. 7.1 / 2019. 1.1 관련법 순차 발효)",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840812&pageIndex=5&startDate=1997-01-01&endDate=2017-08-10&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "층간소음ᆞ빛공해 등 생활불편 해소 및 지반침하ᆞ환경오염 물질, 방사선 등 생활환경안전 확보", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "인체직접적용제품 독성DB 구축(3천건), 인체위해성 평가 및 공산품에 대한 안전관리 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "생산(잔류물질 관리 강화 등), 수입(무검사 억류제 도입 등), 제조ᆞ유통(HACCP 의무적용 확산), 소비(식품표시 강화) 등 전 주기적 먹거리 안전관리 강화 및 범정부적 기본계획 수립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "공공급식지원센터 설치로 영양사가 없는 급식시설의 안전과 영양을 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "식품사고 피해구제 집단소송제 도입 등 식품안전 소비자 권리 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["가습기살균제", "특별피해구제계정", "화학물질", "유해정보", "층간소음", "빛공해", "지반침하", "환경오염물질", "방사선", "인체직접적용제품", "독성데이터베이스", "먹거리안전", "공공급식지원센터", "영양사", "식품사고피해구제집단소송제"]
                    },
                    {
                        "name": "58: 미세먼지 걱정 없는 쾌적한 대기환경 조성",
                        "department": ["환경부"],
                        "category": ["환경/안전", "생활", "경제"],
                        "description": [
                            {
                                "name": "환경위성 발사(’20년), 측정망 확충, 한중 공동 연구('17년5월∼'20년) 등을 통해 미세먼지 발생원인 규명",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 도심 측정소 대폭 확충 및 고농도 시 예보정확도 74% 달성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’17년부터 봄철 노후 석탄발전소(8기) 일시 가동중단 및 신규 건설 불허", 
                                "status": "진행중",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=055&aid=0000552374"
                            }, 
                            {
                                "name": "’18년 사업장 먼지총량제 시행 및 배출허용기준 20% 이상 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "임기 내(’22년) 30년 이상된 노후 화력발전소(10기) 전면 폐쇄", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "노후경유차 운행제한 확대(서울→수도권), 조기폐차 사업 확대 등 경유차 비중 축소", 
                                "status": "진행중 (정부-서울시 정책공조)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=003&aid=0008101291"
                            }, 
                            {
                                "name": "’18년 저공해 건설기계 사용 의무화 및 디젤기관차 배출기준 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’22년까지 전기차 등 친환경차 보급 획기적 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년 배출원이 밀집한 충청ᆞ동남ᆞ광양만권 특별관리지역 지정", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년까지 한중 협력의지를 담은 미세먼지 공동선언문 발표", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["미세먼지", "석탄발전소", "먼지총량제", "화력발전소", "노후경유차", "저공해건설기계", "디젤기관차", "전기차", "배출원", "한중정상회담"]
                    },
                    {
                        "name": "59: 지속가능한 국토환경 조성",
                        "department": ["환경부"],
                        "category": ["환경/안전", "생활"],
                        "description": [
                            {
                                "name": "’18년부터 환경영향평가 비용 공탁제* 등 평가제도 혁신", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "보전총량 설정(’19년) 및 훼손가치만큼 복원ᆞ대체 의무화(’18년)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "반려동물지원센터 설치, 유기동물 입양 활성화, 길고양이 중성화사업 지원(’18년~) 등으로 동물 보호수준 제고", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "6개 보 상시 개방 후 ’18년 10개 보 개방방안 등을 포함한 4대강 16개보 처리방안 확정", 
                                "status": "진행중 (일부 개방)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=437&aid=0000157553"
                            }, 
                            {
                                "name": "’19년부터 4대강 재자연화 대책에 따라 자연성 회복ᆞ복원사업 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "물관리 일원화(’17년), 유역관리위 설치 등 유역 거버넌스 구축(’19년)", 
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=003&aid=0008098450"
                            }, 
                            {
                                "name": "’22년까지 취수원 다각화, 광역ᆞ지방 상수도 통합으로 안정적 물공급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 노후 상수관망 현대화(1,717km), 물순환도시 5개소 건설, 하수 재이용(1.1억톤/년 이상) 등 상시 가뭄 극복 물순환 체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["환경영향평가비용공탁제", "보전총량", "반려동물지원센터", "유기동물", "길고양이중성화사업", "4대강", "물관리"]
                    },
                    {
                        "name": "60: 탈원전 정책으로 안전하고 깨끗한 에너지로 전환",
                        "department": ["산업부", "원안위"],
                        "category": ["환경/안전"],
                        "description": [
                            {
                                "name": "원전 신규 건설계획(추가 6기) 백지화, 노후 원전 수명 연장 금지 등 단계적 원전 감축계획을 전력수급 기본계획 등에 반영", 
                                "status": "진행/논의중 (일부 건설 일시중지)",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=079&aid=0002996130"
                            }, 
                            {
                                "name": "공론화를 통해 사용후핵연료정책을 재검토하고, 고리1호기 영구정지를 원전해체 산업을 육성하는 계기로 활용", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "원안위 위상 및 독립성 강화*와 안전관리체제를 정비하고 원전의 내진설계기준 상향 조정 검토", 
                                "status": "진행중 (원자력규제위원회로의 변경)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=055&aid=0000554727"
                            }, 
                            {
                                "name": "사회적 비용을 반영해 발전용 연료 세율체계를 조정 하고, 산업용 전기요금체계 개편*을 통해 전력 다소비형 산업구조 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "분산형 전원(신재생, 집단에너지, 자가발전)의 인허가, 연료 구매, 요금 설정 등 전 과정에 대한 체계적인 지원 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["원전", "탈원전", "노후원전", "사용후핵연료정책", "고리1호기", "원안위", "내진설계", "발전용원료세율체계", "산업용전기요금체계", "분산형전원"]
                    },
                    {
                        "name": "61: 신기후체제에 대한 견실한 이행체계 구축",
                        "department": ["환경부"],
                        "category": ["환경/안전"],
                        "description": [
                            {
                                "name": "지속가능발전위원회 위상을 강화(’18년~)하여 사회ᆞ경제 전반의 지속성 제고 및 기후ᆞ대기ᆞ에너지정책 통합성 제고 - ’18년 2030 지속가능발전 국가목표ᆞ비전 및 이행전략 수립·확정", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 배출권거래제 전담부서 조정 추진 및 배출권 할당계획 확정", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 에너지세제개편, ‘2030년 온실가스 감축 로드맵’ 수정ᆞ보완", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 제로에너지 건물 확대, 중ᆞ대형차 온실가스 기준 신설, 공공기관 배출량 30% 감축, 폐자원에너지 활성화 등 부문별 감축 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 공공기관 적응보고제 도입 등 기후변화 적응 역량 평가 제도화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’19년 한반도 기후변화 시나리오 생산 및 전국 적응위험지도 작성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년까지 기후변화 입체감시망 및 종합정보체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 국제 배출량 검증 상호인정체계 구축, 해외 배출권 확보를 위한 개도국과의 양자협력 메카니즘(협정 등) 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["지속가능발전위원회", "기후", "배출권거래제", "온실가스", "에너지세제", "폐자원에너지", "제로에너지", "기후변화" ,"파리후속협상"]
                    },
                    {
                        "name": "62: 해양영토 수호와 해양안전 강화",
                        "department": ["해수부"],
                        "category": ["환경/안전", "농산어촌"],
                        "description": [
                            {
                                "name": "’18년부터 독도ᆞ울릉도 연계관리를 강화하고, 지역별 거점항만에 해경선 접안시설 및 경비시설 확충", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 3개 해양과학기지 영토거점화와 영해기점 영구시설물 22개소 설치", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 남해어업관리단 신설", 
                                "status": "완료",
                                "statuscode": "done",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=001&aid=0009417821"
                            }, 
                            {
                                "name": "’19년 한-중 공동단속센터 설치, ’22년 육ᆞ해ᆞ공 감시망 구축과 한-중 공조체계 공고화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 매년 연료운반선을 2척씩 건조하여 생필품 운송 지원, 찾아가는 의료서비스 수혜대상을 매년 10%씩 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년부터 연안여객 준공영제 확대ᆞ시행", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 연안여객선 40척 현대화 및 소규모 항ᆞ포구 접안시설 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년 연안 100km까지 초고속 해상재난안전 통신망(LTE-M)을 구축하고, ’21년 시스템 고도화 및 ’22년 전국 운영", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["독도", "울릉도", "거점항만", "해경선접안시설", "해양과학기지", "남해어업관리단", "한중공동단속센터", "연료운반선", "연안여객", "준공영제", "연안여객선", "초고속해상재난안전통신망", "LTE-M"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 4 - 노동존중ᆞ성평등을 포함한 차별 없는 공정사회",
                "task": [
                    {
                        "name": "63: 노동존중 사회 실현",
                        "department": ["고용부"],
                        "category": ["노동", "인권"],
                        "description": [
                            {
                                "name": "노사정 사회적 대화로 노동존중 사회 기본계획 수립(’18년)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "노동기본권 신장을 위한 법ᆞ제도 개선 - ’17년에 2대 지침 폐지, 공공기관 성과연봉제 관련 조치 폐기, 위법ᆞ불합리한 단체협약 시정지도 등 개선", 
                                "status": "진행중 (공공기관 성과연봉제 폐기)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=057&aid=0001156199"
                            },  
                            {
                                "name": "ILO 핵심협약 비준 - 강제노동에 관한 제29호 및 제105호 협약, 결사의 자유 및 단결권・단체교섭권 보호에 관한 제87호 및 제98호 협약 비준 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 근로자 대표제도 기능 강화, 중소ᆞ영세 미조직 노동자 권익 보호를 위한 지원체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "체불근로자 생계보호 강화 및 체불사업주 제재 강화, 부당해고 구제절차 개선(~’18년)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "학교 노동인권교육 활성화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년에 직장 내 괴롭힘 으로부터 근로자 보호를 위한 종합대책 마련ᆞ시행",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["노사정사회적대화", "공공기관", "성과연봉제", "단체협약", "강제노동", "결사의자유", "단체교섭권", "노사관계", "근로자대표제도", "노동자", "체불근로자", "체불사업주", "부당해고", "노동인권교육", "직장내괴롭힘"]
                    },
                    {
                        "name": "64: 차별 없는 좋은 일터 만들기",
                        "department": ["고용부"],
                        "category": ["노동", "인권"],
                        "description": [
                            {
                                "name": "비정규직 사용사유제한 제도 도입 추진*, 비정규직 사용부담 강화 방안 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "비정규직 차별시정제도 전면 개편, 고용형태에 따른 차별 금지, 1년 미만 근로자(비정규직 포함) 퇴직급여 보장 등", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "도급인의 임금지급 연대책임 및 안전보건조치 의무 강화, 파견ᆞ도급 구별기준 재정립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’20년 최저임금 1만원 실현과 소상공인 등 부담 완화 방안 마련, 공정임금 구축 등 임금격차 해소 추진", 
                                "status": "진행중 (18년 최저임금 7,530원)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=469&aid=0000222534"
                            }, 
                            {
                                "name": "특수고용노동자 등 보호대상 확대, 도급인의 산업 재해 예방 의무에 대한 종합적인 개선방안 마련, 중대재해 발생시 처벌강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "감정노동자 보호를 위한 법적 근거 마련, 특수형태 근로종사자 산재보험 적용 확대 등 보호 사각지대 해소",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "물질안전보건자료(MSDS) 영업비밀 심사제도 도입, 일정규모 이상 사업장 안전ᆞ보건관리업무 위탁 금지 등 제도 개선",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["비정규직", "사용사유제한", "차별시정제도", "퇴직급여", "도급인", "원청", "파견", "도급", "최저임금", "특수고용노동자", "산업재해", "감정노동자", "물질안전보건자료", "안전보건관리업무"]
                    },
                    {
                        "name": "65: 다양한 가족의 안정적인 삶 지원 및 사회적 차별 해소",
                        "department": ["여가부"],
                        "category": ["보육", "복지", "아동"],
                        "description": [
                            {
                                "name": "한부모가족 아동양육비 및 지원연령 단계적 인상ᆞ확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "비양육자의 양육비 이행을 위한 소득재산 조회 등 제도 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "‘결혼이민자 자립 지원 패키지’ 및 ‘다문화 자녀 성장 지원 프로그램’ 운영으로 다문화가족의 사회적 자립 도모", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "일반국민 대상 다문화 이해교육 확대 실시",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "취약ᆞ위기가족 등 지원 서비스 확대로 가족해체 예방",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["한부모가족", "아동양육비", "비양육자", "결혼이민자", "다문화자녀", "다문화가족", "다문화", "취약위기가족", "가족해체"]
                    },
                    {
                        "name": "66: 실질적 성평등 사회 실현",
                        "department": ["여가부"],
                        "category": ["여성", "인권"],
                        "description": [
                            {
                                "name": "대통령 직속 성평등위원회 설치 추진, 성평등 정책 기본계획 수립 및 이행 총괄 관리, 성별영향분석평가와 성인지 예산 성과관리 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 공공부문(관리직 공무원, 공공기관 임원ᆞ관리자, 군ᆞ경찰 등) 여성 진출 대폭 확대를 위한 5개년 계획 수립ᆞ이행", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "성평등 교육 강화, 언론ᆞ미디어 종사자 및 공적 서비스 전달자 대상 성인지 교육 실시", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "18년 젠더폭력방지기본법(가칭) 제정 및 국가행동계획 수립ᆞ이행을 통해 다양한 젠더폭력 대응 강화 - 새롭게 대두되는 젠더폭력(스토킹, 온라인 성범죄 등) 처벌 및 피해자 보호 체계 마련(’17년~)", 
                                "status": "유사법안 발의 (민주-표창원)",
                                "statuscode": "congress",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=001&aid=0009443860"
                            }, 
                            {
                                "name": "’18년 일본군 ‘위안부’ 피해자 기림일 지정 및 ’19년 일본군 ‘위안부’ 피해자 연구소(가칭) 설치ᆞ운영", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’20년 피해자 역사관 건립을 통해 조사ᆞ연구사업 체계화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["대통령직속성평등위원회", "성평등", "성평등정책", "성별영향분석평가", "성인지", "공공부문", "여성진출", "젠더폭력방지기본법", "일본군위안부", "위안부피해자기림일", "위안부피해자연구소", "위안부피해자역사관"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 5 - 자유와 창의가 넘치는 문화국가",
                "task": [
                    {
                        "name": "67: 지역과 일상에서 문화를 누리는 생활문화 시대",
                        "department": ["문체부"],
                        "category": ["생활", "문화"],
                        "description": [
                            {
                                "name": "저소득층에게 연간 6만원이 지급되고 있는 통합문화이용권을 연차별로 확대하여 ’21년부터 10만원 지급",
                                "status": "일부 진행중",
                                "statusdesc": "18년부터 7만원으로 1만원 인상",
                                "statuscode": "partiallywip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841678&pageIndex=1&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "생애주기별 문화예술교육 확대로 ’22년 문화 예술교육 수혜자 수 360만명 달성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "분야별 문화도시 지정을 확대하고, 문화마을 (읍면동 단위 중심) 신규 조성 추진", 
                                "status": "진행중",
                                "statusdesc": "시·군·구 단위로 문화도시를 2018년 신규로 7개소(19개소 계속 지원) 조성 지원하고, 읍·면·동 단위로 문화마을을 2018년 신규로 8개소(17개소 계속 지원) 조성해 특화된 문화 환경을 만들어 나갈 계획",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841678&pageIndex=1&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "매장문화재조사 공영제 도입으로 ’22년까지 연간 지표조사 및 발굴조사 지속 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "문화재돌봄법(가칭) 제정으로 상시관리 대상 문화재 지속 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "전통무형문화의 원형보전 강화 및 국민적 향유를 위한 지원 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "가야 문화권 조사ᆞ연구 및 정비 등",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "연차별로 문화분야 재원 적극 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["저소득층", "기초문화생활", "통합문화이용권", "생애주기", "문화예술교육", "문화도시", "문화마을", "매장문화재조사공영제", "문화재돌봄법", "전통무형문화", "가야문화권"]
                    },
                    {
                        "name": "68: 창작 환경 개선과 복지 강화로 예술인의 창작권 보장",
                        "department": ["문체부"],
                        "category": ["문화"],
                        "description": [
                            {
                                "name": "’17년 공정성 협약 발표, ’18년 예술가 권익보장을 위한 법률(가칭) 제정 등을 통해 예술지원 공정성 확보 및 예술인 권리 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 문예기금 등 정부지원사업 참여 시 표준 계약서 의무화, 표준계약서 개발 보급(공연, 미술) 지속 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "고용보험법 등 관계법령 개정으로 ’19년부터 예술인 고용보험 제도 시행 및 보험료 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "문화예술진흥기금 - 단기적으로 일반예산, 복권기금, 관광기금, 체육기금의 재원을 활용하여 안정적으로 사업이 추진되도록 재원대책 마련", 
                                "status": "완료",
                                "statusdesc": "2018년 일반회계로부터 500억원을 문예기금으로 전환함",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841678&pageIndex=1&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "문화예술진흥기금 - 중장기적으로 타 기금이나 수익금의 법정전입 등을 통한 안정적 재원 마련방안 강구", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국민중심의 새로운 문화행정체계 구축 - 지원기관 독립성 확보, 심사 투명성 확대, 현장의 정책결정 참여 확대 및 문화옴부즈맨제도 도입 등",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["예술인", "공정성협약", "예술가권익보장을위한법률", "문예기금", "표준계약서", "예술인고용보험", "문화예술진흥기금", "문화옴부즈맨제도"]
                    },
                    {
                        "name": "69: 공정한 문화산업 생태계 조성 및 세계 속 한류 확산",
                        "department": ["문체부"],
                        "category": ["문화", "4차산업혁명"],
                        "description": [
                            {
                                "name": "콘텐츠 주요 구성원 간 불공정 거래 개선을 위해 ’17년부터 (영화) 제정 (애니메이션) 불공정 관행 개선 및 제정 (만화·웹툰·2차적 저작물) 계약서 보완 (대중문화) 대중문화예술인 대상 계약서 제정 (방송) 방송작가 집필표준계약서 제정", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "4차산업에 기반한 융합 플랫폼 구축 및 성장 단계별 지원과 첨단기술이 결합한 뉴콘텐츠 육성ᆞ확대*", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 현재 6천만명 한류팬을 1억명으로 확대, ’22년까지 세종 학당 지속 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["콘텐츠", "불공정거래", "표준계약서", "뉴콘텐츠", "4차산업", "한류", "세종학당"]
                    },
                    {
                        "name": "70: 미디어의 건강한 발전",
                        "department": ["방통위"],
                        "category": ["언론"],
                        "description": [
                            {
                                "name": "’17년 미디어교육 종합추진계획 수립",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 시청자미디어센터 확충 및 시청자 참여프로그램 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’22년까지 1백만 인터넷 윤리교육 실시", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’19년 스마트 수어방송 상용화, ’21년까지 저소득층 시청각장애인 방송수신기 100% 보급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 지상파 사업자 재허가 절차 등을 통한 지역방송 활성화 기반 마련, 방송콘텐츠 제작ᆞ유통 지원 및 공동체라디오방송 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년 한류콘텐츠 해외진출 다변화 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "1인미디어ᆞ중소콘텐츠제작자 및 UHDᆞ융합형 콘텐츠 제작 지원 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년에 방송광고제도 개선방안 마련 - ’19년까지 방송광고판매ᆞ협찬제도 합리화 및 투명성 제고",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년에 방송사-외주사 등 방송시장 상생협력 방안 마련",
                                "status": "진행중",
                                "statusdesc": "불공정실태 조사중",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841032&pageIndex=26&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            } ],
                        "keywords": ["미디어교육", "미디어", "시청자미지어센터", "인터넷윤리교육" ,"스마트수어방송", "저소득층시청각장애인방송수신기", "지상파사업자재허가", "지역방송", "공동체라디오방송", "한류콘텐츠", "1인미디어", "중소콘텐츠제작자", "방송광고제도", "방송시장", "상생협력"]
                    },
                    {
                        "name": "71: 휴식 있는 삶을 위한 일ᆞ생활의 균형 실현",
                        "department": ["고용부"],
                        "category": ["문화","생활", "노동","보육", "인권"],
                        "description": [
                            {
                                "name": "’17년부터 주 52시간 근로 확립 등 법ᆞ제도 개선", 
                                "status": "국회 논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=001&aid=0009444133"
                            }, 
                            {
                                "name": "포괄임금제 규제", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "장시간 근로사업장 지도ᆞ감독 강화, 근로시간 단축에 따른 중소기업ᆞ근로자 부담 완화 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "근로시간 단축 종합점검추진단 운영, 근로시간 특례 제외 업종 및 4인 이하 사업장에 대한 합리적 개선방안 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "근로시간 외 업무 지시 금지, 공휴일 민간 적용 및 1년 미만 근무 연차휴가 보장 등 일가정 양립을 위한 종합 개선방안 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 첫 3개월 육아휴직급여 2배 인상, ’18년에 육아휴직 보너스 제도 도입 등 인센티브 강화 추진",
                                "status": "진행중 (공공기관 시행)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=032&aid=0002807499"
                            },
                            {
                                "name": "육아기 근로시간 단축기간 확대를 위한 ‘10 to 4 더불어 돌봄’, 질병ᆞ 사고ᆞ노령 가족을 위한 가족돌봄휴직제도 등 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["주52시간근로", "포괄임금제", "장시간근로사업장", "근로시간", "공휴일", "연차휴가", "일가정양립", "육아휴직급여", "육아휴직보너스", "가족돌봄휴직제도", "10to4더불어돌봄"]
                    },
                    {
                        "name": "72: 모든 국민이 스포츠를 즐기는 활기찬 나라",
                        "department": ["문체부"],
                        "category": ["문화", "생활"],
                        "description": [
                            {
                                "name": "생활체육 환경 조성 -1시군구 1스포츠클럽 운영, 공공체육시설 확충, 지도자 배치 확대 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "범정부 협조체계 구축 및 온ᆞ오프라인 홍보 강화, 상황실을 통한 실시간 대회 운영 점검 등을 통해 평창동계올림픽ᆞ패럴림픽 성공 개최", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 국기 태권도 문화콘텐츠화 추진위원회 구성ᆞ운영을 통해 ’22년 태권도 10대 문화콘텐츠 개발ᆞ홍보", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["공공체육시설", "생활체육", "평창동계올림픽", "태권도", "국기태권도문화콘텐츠화추진위원회"]
                    },
                    {
                        "name": "73: 관광복지 확대와 관광산업 활성화",
                        "department": ["문체부"],
                        "category": ["노동","생활", "관광"],
                        "description": [
                            {
                                "name": "노동자 휴가지원제 도입(’18년부터 제도설계 등 추진), 열린관광지 확대(5년간 100개 조성 지원)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "대체공휴일 확대 등 공휴일 제도 개선(’18년 관련 규정 개정)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 개별관광객 맞춤형 관광코스 개발 확대 및 온라인 플랫폼 운영ᆞ개선 지속", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "관광품질인증제의 법적근거 마련을 통한 체계적 관리(’18년부터 적용)", 
                                "status": "완료 (시행)",
                                "statuscode": "done",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148840787&pageIndex=2&startDate=1997-01-01&endDate=2017-08-08&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "국가관광전략회의 신설ᆞ운영", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 800개 관광벤처기업 발굴ᆞ지원, 융합관광산업 육성(VRᆞAR 콘텐츠 제작 등)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "지역 특화관광명소 집중 육성(’21년까지 테마여행 10선 추진), 관광두레 지속 확대, 외국인이 많이 찾는 ‘글로컬’ 관광지 육성)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 중국 외 방한 관광객 850만명 등 관광객 다변화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "고부가 관광산업 육성(웰니스 관광클러스터 지원 등), 관광산업 펀드 조성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["노동자휴가지원제", "노동자", "열린관광지", "대체공휴일", "개별관광객맞춤형관광코스", "관광품질인증제", "국가관광전략회의", "관광벤처기업", "융합관광산업", "지역특화관광명소", "관광두레", "중국외방한관광객", "외국인", "고부가관광산업", "관광산업펀드"]
                    }
                ]
            }
        ]
    },
    { //국정목표
        "policyname": "고르게 발전하는 지역", //목표명
        "strategies": [
            { // 전략
                "strategyname": "전략 1 - 풀뿌리 민주주의를 실현하는 자치분권",
                "task": [
                    {
                        "name": "74: 획기적인 자치분권 추진과 주민 참여의 실질화",
                        "department": ["행자부"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "자치분권 기반 확보 - ’17년 하반기 제2국무회의 시범운영 후 제도화 추진, ’18년 헌법 개정으로 실질적 자치분권 기반 조성", 
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=088&aid=0000500412"
                            }, 
                            {
                                "name": "’18년부터 포괄적 사무이양을 위한 지방이양일괄법을 단계별로 제정하여 국가 기능의 획기적 지방 이양 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년까지 주민투표 확대, 주민소환 요건 완화, 조례개폐청구 요건 세부화 등을 추진하여 주민 직접참여제도 확대", 
                                "status": "진행중",
                                "statusdesc": "행안부는 제도 개선을 위해 ‘스마트 주민조례개폐청구’ 시스템을 개발하고 지방자치법 시행령에 관련근거를 마련해 2018년부터 주민이 공인인증서를 활용해 온라인으로 조례개폐청구안에 손쉽게 서명을 할 수 있도록 할 계획.",
                                "statuscode": "wip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841480&pageIndex=10&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            }, 
                            {
                                "name": "’18년까지 주민자치회 제도개선안 마련 및 법률 개정, ’17년에 주민중심 행정복지서비스 혁신 추진계획 수립 및 추진체계 구축",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["자치분권", "제2국무회의", "헌법", "포괄적사무이양", "지방이양일괄법", "주민투표", "주민소환", "조례개폐청구", "주민자치회", "행정복지서비스"]
                    },
                    {
                        "name": "75: 지방재정 자립을 위한 강력한 재정분권",
                        "department": ["행자부", "기재부"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "국세-지방세 비율을 7:3을 거쳐 장기적으로 6:4 수준까지 개선", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "지자체간 재정격차 완화 및 균형발전 추진 - 지방교부세율 상향 및 지역상생발전기금 확대, 국고보조사업 정비", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "지방소비세 비중 확대, 지방소득세 규모 확대, 국가-지방 간 기능 재조정, 지방세 신세원 발굴, 지방세 비과세ᆞ감면율 15% 수준 관리", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "지방세 및 지방세외수입 체납징수율 제고, 예산낭비사업 근절을 위한 제도 개선 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "고향사랑 기부제법(가칭) 제정을 통한 지방재정 보완 및 지역경제 활성화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "지자체 핵심정책ᆞ사업까지 주민참여예산제 확대를 통해 주민에 의한 자율통제 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국세", "지방세", "지방소비세", "지방소득세", "지자체", "지방교부세율", "지역상생발전기금", "지방세외수입", "체납징수율", "상습체납자", "고향사랑기부제법", "주민참여예산제"]
                    },
                    {
                        "name": "76: 교육 민주주의 회복 및 교육자치 강화",
                        "department": ["교육부"],
                        "category": ["교육", "정치/정부"],
                        "description": [
                            {
                                "name": "’17년 국정 역사교과서 폐지(5.31 확정) 및 검정 역사교과서 개발방안 마련 - 발행체제 연구ᆞ의견수렴(’18년)을 통해 자유발행제 단계적 도입(’19년~)", 
                                "status": "진행중 (국정교과서 폐지/새 교과서 2020년으로 연기)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=025&aid=0002739559"
                            }, 
                            {
                                "name": "’18년부터 국립대 총장후보자 선정방식과 재정지원사업 연계 폐지 및 사학비리 근절을 위한 사립학교법령 개정 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년에 대통령 직속 자문기구인 ‘국가교육회의’를 설치하고, 중장기 교육정책 수립을 위한 국가교육위원회 설치 추진(’19년)", 
                                "status": "논의중",
                                "statuscode": "discussing",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=003&aid=0008083961"
                            }, 
                            {
                                "name": "학교운영위원회 학생ᆞ학부모 자치활동 활성화 방안 마련(’17년), 유치원 포함 초중고 학교 학부모회 지원 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "찾아가는 정책 설명회 등 현장 소통 기회를 확산 하고, 교육현장과의 교류 활성화 및 교육정책이력제 확대(’17년)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국정역사교과서", "검정역사교과서", "자유발행제", "국립대", "총장후보자", "재정지원사업", "사학비리","사립학교법령", "국가교육회의", "국가교육위원회", "교육부", "학교운영위원회", "교육정책이력제"]
                    },
                    {
                        "name": "77: 세종특별자치시 및 제주특별자치도 분권모델의 완성",
                        "department": ["행자부"],
                        "category": ["정치/정부"],
                        "description": [
                            {
                                "name": "세종특별자치시 - 행자부ᆞ과기부 등 세종시 추가 이전", 
                                "status": "법률안 개정중 (민주-이해찬/조승래)",
                                "statuscode": "congress",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=001&aid=0009447336"
                            }, 
                            {
                                "name": "제주특별자치도 - ’18년까지 분권과제 및 지방이양사무 발굴ᆞ이양 추진, ’19년까지 특별법 개정 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "제주특별자치도 - 환경ᆞ투자ᆞ관광교통ᆞ문화, 미래성장동력 분야 사무 등 지방 이양", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "제주특별자치도 - 자치경찰 권한, 주민자치위원회 기능, 의회 및 조직권한, 재정ᆞ세제 관련 권한 등 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["세종특별자치시", "제주특별자치도", "행자부", "과기부", "행정수도", "분권과제", "지방이양사무"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 2 - 골고루 잘사는 균형발전",
                "task": [
                    {
                        "name": "78: 전 지역이 고르게 잘사는 국가균형발전",
                        "department": ["산업부", "국토부", "행자부"],
                        "category": ["정치/정부", "경제"],
                        "description": [
                            {
                                "name": "국가균형발전위원회 명칭 복원 및 위상 강화를 통해 강력한 균형발전 지원체계를 구축하고 지역의 자율ᆞ책임성 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "세종시 - 명실상부한 행정중심복합도시의 기능을 수행하기 위해 중앙행정기관 추가 이전", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "서울-세종 고속도로 조기 구축 등 추진", 
                                "status": "진행중 (재정사업 전환, 구리~안성 구간 공사시작)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=102&oid=057&aid=0001155079"
                            },
                            {
                                "name": "이미 조성된 혁신도시 중심으로 신산업 테스트베드 구축, 기업유치 등을 통해 혁신클러스터 조성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "속도감 있는 새만금 사업추진을 위해 공공주도 매립, 국제공항ᆞ 신항만 등 물류교통망 조기 구축",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "업종 고도화를 넘어 도시재생과 연계한 창업ᆞ혁신, 문화ᆞ복지공간까지 어우러진 산업단지 혁신 2.0 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국가균형발전위원회", "균형발전", "세종특별자치시", "행정중심복합도시", "중앙행정기관", "서울세종고속도로", "혁신도시", "혁신클러스터", "새만금", "물류교통망", "산업단지혁신2.0"]
                    },
                    {
                        "name": "79: 도시경쟁력 강화 및 삶의 질 개선을 위한 도시재생뉴딜 추진",
                        "department": ["국토부"],
                        "category": ["주택/부동산", "경제", "생활"],
                        "description": [
                            {
                                "name": "도시재생뉴딜사업 발굴ᆞ지원 - 구도심과 노후주거지 등을 포함하여 정비가 시급히 필요한 곳부터 우선적으로 선정하여 지역특성에 맞게 지원", 
                                "status": "일부 진행중 (2017.8.2 부동산대책 영향)",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=277&aid=0004048087"
                            },
                            {
                                "name": "’17년까지 도시재생뉴딜 사업 추진방안 및 부처협업 TFT 구축 등 추진기반 마련, 매년 도시재생뉴딜 사업지역 선정ᆞ지원", 
                                "status": "일부 진행중 (2017.8.2 부동산대책 영향)",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=277&aid=0004048087"
                            },
                            {
                                "name": "지역 중심의 뉴딜사업 추진을 위해 지자체ᆞ지역전문가 등 추진주체 역량 강화 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년까지 도시재생 연계형 공공 임대주택 공급 방안 마련 및 ’18년부터 본격 공급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "주거취약계층 녹색건축물 우선 적용 - ’18년부터 공공임대주택 등 소형 주택 에너지성능을 패시브하우스 수준으로 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["도시재생뉴딜사업", "구도심", "노후주거지", "도시재생연계형공공임대주택", "공공임대주택", "녹색건축물", "에너지성능"]
                    },
                    {
                        "name": "80: 해운ᆞ조선 상생을 통한 해운강국 건설",
                        "department": ["해수부"],
                        "category": ["경제", "해양"],
                        "description": [
                            {
                                "name": "’17년 한국해양진흥공사법 제정 및 ’18년 공사 발족 이후 해운 선사에 대해 원스톱 지원 시행", 
                                "status": "추진중",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년 국적선사 간 협의체인 한국해운연합(KSP)을 결성하여 중복노선 구조조정과 신항로 개척으로 국적선대의 경쟁력 제고", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’18년부터 외항선박에 친환경선박 폐선보조금 지급, ’20년 연안화물선으로 확대하여 ’22년까지 총 100척 건조",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": " ’17년부터 친환경ᆞ고효율선박 기술개발 착수, ’20년 LNG추진선 기반 구축, ‘22년 해양플랜트 기자재 국산화로 조선산업 활력 회복", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’19년부터 국가필수해운제도를 도입하여 비상시 화물운송체계 구축, 선ᆞ화주 상생으로 국적선사 이용비율 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년 해양산업클러스터 2개 지정 및 ’19년 완공, ’17년부터 부산북항 상부시설, 광양항 묘도, 인천항 영종도 재개발 착공",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["해운", "한국해양진흥공사법", "한국해양진흥공사", "한국해운연합", "외항선박", "친환경선박", "폐선보조금", "연안화물선", "고효율선박", "LNG추진선", "해양플랜트", "조선산업", "국가필수해운제도", "해양산업클러스터", "인천항영종도", "광양항묘도", "부산북항"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 3 - 사람이 돌아오는 농산어촌",
                "task": [
                    {
                        "name": "81: 누구나 살고 싶은 복지 농산어촌 조성",
                        "department": ["농식품부"],
                        "category": ["농산어촌", "경제", "일자리"],
                        "description": [
                            {
                                "name": "’18년부터 군지역에 100원 택시 등 농어촌형 교통모델 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "농지연금 신규상품 도입(’17년), 국민연금 기준소득금액 단계적 상향 지원 검토", 
                                "status": "진행중 (농지연금 신규상품)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=117&oid=298&aid=0000225158"
                            },  
                            {
                                "name": "영농ᆞ가사도우미 지원 확대 및 관련 법 개정을 통해 ’21년부터 여성 농어업인 대상 특화 건강검진 시범실시", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "농어업 기반 6차산업 - ’17년 농산어촌 관광상품 개발, ’18년 농촌관광 등급평가제 개편 및 ’22년 우수 관광자원 선정ᆞ홍보 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "농어업 기반 6차산업 - ’18년사회적농업시범사업* 실시 및 관련 법적근거 마련 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "산림분야 일자리 - ’18년 나무의사 자격제도 도입 및 ’20년부터 목재산업단지 조성",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "산림분야 일자리 - ’22년 전국 권역별 국ᆞ공립 산림복지단지와 국가 숲길 네트워크 조성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["농산어촌", "군지역", "100원택시", "농지연금", "영농가사도우미", "농어업인", "6차산업", "농산어촌관광상품", "농촌관광등급평가제", "사회적농업시범사업", "산림일자리", "나무의사자격제도", "목재산업단지", "국공립산림복지단지", "국가숲길네트워크"]
                    },
                    {
                        "name": "82: 농어업인 소득안전망의 촘촘한 확충",
                        "department": ["농식품부"],
                        "category": ["농산어촌", "경제", "복지"],
                        "description": [
                            {
                                "name": "쌀은 시장격리, 사료용벼 전환 등 선제적 수확기 수급안정 방안 시행(’17년), ’18년~’19년 생산조정제(15만ha) 한시 도입", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "친환경농업직불 단가 인상(’18년), 농업환경보전 프로그램 도입 등 생태ᆞ환경을 보전하는 방향으로 직불제 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "농업재해보험이 개발되지 않은 품목(농약대, 대파대, 시설부자재 등 35개)의 복구지원 단가 인상 - ’22년까지 밭고정ᆞ조건불리직불 단가를 단계적 인상, 조건불리수산 직불 단가 인상 및 사업대상을 전체 섬으로 확대 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "농어업인에 대한 농어업인안전보험 국고지원을 확대하고 산재보험 수준의 보험상품 개발ᆞ보급", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["쌀시장격리", "쌀", "사료용벼", "쌀생산조정제", "농산물의무자조금", "농산물생산안정제", "친환경농업직불단가", "농업재해보험", "농어업인안전보험"]
                    },
                    {
                        "name": "83: 지속가능한 농식품 산업 기반 조성",
                        "department": ["농식품부"],
                        "category": ["농산어촌", "청년", "정치/정부"],
                        "description": [
                            {
                                "name": "’18년 청년농업인 영농정착지원제 도입, 귀농ᆞ귀촌 임대주택단지 조성 등 영농창업 초기 생활안정ᆞ정착지원 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 6차산업형 친환경농업지구 100개소 조성 등 친환경ᆞ동물복지 농축산업 확산", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년 가축질병 방역체계 강화를 위한 보험제도 도입, ’20년 한국형 구제역 백신 생산, ’22년까지 깨끗한 축산농장 5천호 조성 추진", 
                                "status": "추진중 (가축질병보험 18년 시범운영)",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’22년까지 스마트팜 시설원예 7천ha, 축산 5천호 보급 및 관련 R&D 투자 확대",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "농식품바우처 시범사업, 유기ᆞ이력제 수산물 학교급식 확대, GAP 및 HACCP 인증농가 확대 등", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’20년 기능성식품산업육성법 제정 등 기능성식품, 발효식품 육성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대통령 직속 농어업ᆞ농어촌 특별위원회 설치 추진 및 농어업회의소 법적 근거 마련, 지방분권형 농정 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["청년농업인", "영농정착지원제", "귀농", "귀촌", "영농창업", "친환경농업지구", "가축질병방역체계", "한국형구제역백신", "깨끗한축산농장", "스마트팜", "농식품바우처", "유기이력제수산물", "기능성식품산업육성법", "대통령직속농어업농어촌특별위원회", "농어업회의소"]
                    },
                    {
                        "name": "84: 깨끗한 바다, 풍요로운 어장",
                        "department": ["해수부"],
                        "category": ["해양", "경제", "환경/안전"],
                        "description": [
                            {
                                "name": "’18년 휴어제, ’19년 어구관리법 제정, ’21년 전자 어구 실명제 도입을 통해 ’22년 연근해 어업생산량 110만톤 회복",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’18년부터 명태 인공종자 매년 100만 마리 방류, ’19년부터 명태 양식을 시작하여 ‘22년 명태 자원 회복 및 대량 양식생산체계 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "’18년 ICT 첨단양식기술 개발계획 수립, ’21년부터 스마트양식장 구축 등으로 ’22년 양식 생산량 230만톤 달성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "’17년부터 수산물 수출지원센터 4개소 설치 및 단계적 확장으로 ’22년 주요국 수출거점 구축 완료 및 수산물 수출 40억달러 달성", 
                                "status": "진행중",
                                "statuscode": "wip", 
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=022&aid=0003192055"
                            }, 
                            {
                                "name": "’19년 수산물 이력추적관리제 단계적 확대, ’17년부터 양식장 HACCP 등록을 매년 30개씩 확대하여 ’22년 180개소 등록 - 산지거점 유통센터 6개소, 소비지물류센터 2개소 건립 등 유통구조 혁신", 
                                "status": "진행중 (2017.4부터 양식장 HACCP 확대추진)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=421&aid=0002655974"
                            }, 
                            {
                                "name": "’17년 해양공간계획법 제정, ’18년 남해안부터 ’21년 동해안까지 공간계획을 수립하여 ‘22년 전 해역을 통합관리 - ’22년까지 해양보호구역 34개소 지정, 갯벌복원 20개소 완료", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["휴어제", "어구관리법", "전자어구실명제", "연근해어업생산량", "명태인공종자", "첨단양식기술", "스마트양식장", "수산물수출지원센터", "수산물이력추적관리제", "해양공간계획법"]
                    }
                ]
            }
        ]
    },
    { //국정목표
        "policyname": "평화와 번영의 한반도", //목표명
        "strategies": [
            { // 전략
                "strategyname": "전략 1 - 강한 안보와 책임국방",
                "task": [
                    {
                        "name": "85: 북핵 등 비대칭 위협 대응능력 강화",
                        "department": ["국방부"],
                        "category": ["안보/국방", "북한", "과학"],
                        "description": [
                            {
                                "name": "국방예산 증액‧효율화 - 적정 소요를 반영한 수준으로 예산증가율 책정, 예산ᆞ조직ᆞ인력 분야 전반의 구조조정ᆞ절감을 통해 지출 성과 극대화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "북핵ᆞ미사일 위협 대비 독자적 한국형 3축체계는 핵심전력소요에 대한 우선순위를 판단, 조기구축 추진 - 북한 전역에 대한 감시ᆞ타격능력(Kill Chain), 핵심시설 방어능력(KAMD), 대량응징보복 수행능력(KMPR) 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "합참의 ‘핵ᆞWMD 대응센터’를 ‘핵ᆞWMD 대응작전본부’로 확대 개편하고 임기 내 ‘전략사령부’ 창설 적극 검토", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국가안보실 중심의 사이버안보 컨트롤타워 강화 및 체계적인 사이버안보 수행체계 정립ᆞ발전",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["국방예산", "예산증가율", "북핵", "미사일", "한국형3축체계", "킬체인", "핵심시설방어능력", "대량응징보복수행능력", "KAMD", "KMPR", "핵WMD 대응작전본부", "전략사령부", "국가안보실", "사이버안보"]
                    },
                    {
                        "name": "86: 굳건한 한미동맹 기반 위에 전작권 조기 전환",
                        "department": ["국방부"],
                        "category": ["안보/국방"],
                        "description": [
                            {
                                "name": "한미 연합방위 주도 및 북핵ᆞ미사일 위협에 대비하기 위한 한국군 핵심능력 재설정 및 추진계획 보완ᆞ발전", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "한미 정부차원에서 조기 전작권 전환(전환 시기 확정)에 합의, 이후 양국 정부 지침에 따라 한미 국방 당국 간 추진 방향 합의", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "한미간 전시 연합작전 지휘를 위한 미래지휘구조 발전 및 굳건한 한미연합방위태세 지속 유지", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "한국군핵심군사능력및북핵ᆞ미사일위협대비초기필수대응능력확보", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "한미간 전략문서 발전, 연합연습 및 검증 시행",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["한미동맹", "전시작전통제권", "한미연합방위", "북핵", "미사일", "한국군", "조기전작권전환"]
                    },
                    {
                        "name": "87: 국방개혁 및 국방 문민화의 강력한 추진",
                        "department": ["국방부"],
                        "category": ["안보/국방", "정치/정부", "인권"],
                        "description": [
                            {
                                "name": "개혁 추동력 확보를 위해 대통령 직속 ‘국방개혁특별위원회’ 설치 추진, 핵심과제를 재선정하여 ‘국방개혁 2.0’ 수립", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국방개혁특위 - 상부지휘구조 개편 및 50만 명으로의 병력 감축 등 인력구조 개편", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "병역자원 부족과 전투력 손실 방지 등에 대한 대책을 강구하여 병 복무기간을 18개월로 단축 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "부족 병역자원 확보를 위해 전환ᆞ대체복무 지원인력 조정 및 장교ᆞ 부사관 인력 확보 체계 개선",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "문민통제 원칙 구현을 위해 국방부ᆞ방사청에 대한 실질적 문민화 방안 마련 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "군 사법 개혁 - 심판관제도 폐지, 군판사 인사위원회 설치 등을 통해 장병의 공정한 재판 및 인권 보장", 
                                "status": "일부 진행중 (개정 군사법원법 시행)",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=018&aid=0003869061"
                            }, 
                            {
                                "name": "현역 감축 및 복무기간 단축을 보완하기 위해 육군 동원전력사령부 창설 검토, 예비군훈련장 과학화 등 예비전력 강화도 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "군 공항 및 군사시설 이전을 통해 국방력 강화 및 주민 불편 해소", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국방개혁", "국방개혁특별위원회", "상부지휘구조", "병력감축", "병복무기간", "전환대체복무", "장교부사관", "문민통제", "국방부", "방사청", "심판관제도", "군판사인사위원회", "군사법개혁", "육군동원전력사령부", "예비군훈련장과학화", "군공항", "군사시설"]
                    },
                    {
                        "name": "88: 방산비리 척결과 4차 산업혁명 시대에 걸맞은 방위산업 육성",
                        "department": ["국방부"],
                        "category": ["4차산업혁명", "안보/국방", "경제", "과학"],
                        "description": [
                            {
                                "name": "방위사업 비리에 대한 처벌 및 예방시스템 강화", 
                                "status": "진행중 (대통령 수석보좌관회의 발언, 수사 진행중)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=015&aid=0003797291"
                            }, 
                            {
                                "name": "국방획득체계 전반의 업무수행에 대한 투명성ᆞ 전문성ᆞ효율성ᆞ경쟁력 향상 방안 모색", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국방R&D 기획체계 개선, 국가R&D 역량 국방분야 활용 증진 등을 통해 방산 경쟁력 강화 및 첨단무기 국내 개발 기반 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "인센티브 중심으로 방산 생태계를 조성하고, 4차 산업혁명 등 기술변화에 대응하는 국방R&D 수행체계 개편", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "방산 중소‧벤처기업 육성으로 안정적 수출기반 마련 및 방산 인프라 강화를 통한 양질의 일자리 창출", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국방항공 유지보수 운영(MRO) 분야와 성과기반 군수(PBS) 확대로 민간산업 활성화 지원", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["방위사업", "국방획득체계", "첨단무기", "인센티브", "4차산업혁명", "방산생태계", "방산중소벤처기업", "국방항공", "국방R&D"]
                    },
                    {
                        "name": "89: 장병 인권 보장 및 복무 여건의 획기적 개선",
                        "department": ["국방부"],
                        "category": ["인권","안보/국방", "여성", "주택/부동산"],
                        "description": [
                            {
                                "name": "’22년까지 최저임금의 50%까지 단계적 인상 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "공무상 부상을 입은 장병이 최선의 치료를 선택할 권리 보장 - 공무상 부상자에 대한 민간병원 치료비 전액 지원을 단계적으로 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "군 복무 학점 인정 추진 및 장병 자기개발 지원을 강화하고, 군 급식 시스템 개선을 통한 급식 질 개선 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국가인권위원회 내 ‘군인권보호관’ 신설 및 군 의문사 진상 규명을 위한 제도 개선 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "여군 인력 및 계급별 진출을 확대하고, 여군의 임신ᆞ출산ᆞ육아지원을 위한 제도 개선 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "군 성폭력 범죄자 처벌 강화 및 무관용 원칙 엄중 적용", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "국세청 등 유관기관 협조를 통해 고위공직자 등 사회적 관심계층의 병적 집중관리 및 상시 모니터링ᆞ검증체계 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "맞춤형 주거 지원 및 민간주택을 활용한 공급방식 다변화 등 직업군인 주거 지원 제도 발전", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["최저임금", "공무상부상장병", "군복무학점인정", "군급식시스템", "국가인권위원회", "병봉급인상", "군인권보호관", "군의문사진상규명", "여군", "군성폭력범죄자", "국세청", "병적집중관리", "직업군인"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 2 - 남북 간 화해협력과 한반도 비핵화",
                "task": [
                    {
                        "name": "90: 한반도 신경제지도 구상 및 경제통일 구현",
                        "department": ["통일부"],
                        "category": ["경제", "북한","환경/안전","관광"],
                        "description": [
                            {
                                "name": "한반도 신경제지도 - 3대 벨트 구축을 통해 한반도 신성장동력 확보 및 북방경제 연계 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "동해권 에너지ᆞ자원벨트 : 금강산, 원산ᆞ단천, 청진ᆞ나선을 남북이 공동개발 후 우리 동해안과 러시아를 연결", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "서해안 산업ᆞ물류ᆞ교통벨트 : 수도권, 개성공단, 평양ᆞ남포, 신의주를 연결하는 서해안 경협벨트 건설", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "DMZ 환경ᆞ관광벨트 : 설악산, 금강산, 원산, 백두산을 잇는 관광벨트 구축 및 DMZ를 생태ᆞ평화안보 관광지구로 개발", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "민ᆞ관 협력 네트워크를 통해 남북한 하나의 시장 협력 방안을 마련하고, 여건 조성 시 남북 시장협력을 단계적으로 실행 하여 생활공동체 형성",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "남북경협기업 피해 조속 지원을 실시하고, 남북관계 상황을 감안하여 유연하게 민간경협 재개 추진", 
                                "status": "진행중 (2017년내 남북경협기업 피해지원 목표)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=001&aid=0009430862"
                            },
                            {
                                "name": "여건 조성 시 개성공단 정상화 및 금강산 관광을 재개하고, 남북공동 자원 활용을 위한 협력 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "통일경제특구 지정ᆞ운영, 남북 협의를 통해 남북 접경지역 공동관리위원회 설치, 서해 평화협력특별지대 추진 여건 조성", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["한반도신경제지도", "3대벨트", "신성장동력", "북방경제", "동해권에너지자원벨트", "서해안산업물류교통벨트", "DMZ환경관광벨트", "남북경협기업", "개성공단", "금강산관광", "남북공동자원", "통일경제특구", "남북접경지역공동관리위원회", "서해평화협력특별지대"]
                    },
                    {
                        "name": "91: 남북기본협정 체결 및 남북관계 재정립",
                        "department": ["통일부"],
                        "category": ["북한", "안보/국방"],
                        "description": [
                            {
                                "name": "남북연락채널 복원 추진, 적십자회담ᆞ군사실무회담 개최 등을 통해 남북관계 재개 여건 조성", 
                                "status": "시도중 (2017.7 기준 북 무응답)",
                                "statuscode": "question",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=056&aid=0010483859"
                            },
                            {
                                "name": "남북회담 체계화ᆞ정례화를 추진하고 여건에 따라 고위급회담 개최, 남북기본협정 채택 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "기존 남북합의를 존중하면서 남북관계에 맞는 새로운 합의를 도출하기 위해 기본협정 체결 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국회 비준동의, UN총회 지지 결의 등 남북기본협정 지지 확보 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["남북연락채널", "적십자회담", "군사실무회담", "남북기본협정", "고위급회담"]
                    },
                    {
                        "name": "92: 북한인권 개선과 이산가족 등 인도적 문제 해결",
                        "department": ["통일부"],
                        "category": ["북한","인권", "생활"],
                        "description": [
                            {
                                "name": "북한인권재단 조기 출범, 국제사회와 공조 및 남북 간 대화 시 인권문제 의제화 등을 통해 북한당국에 인권 친화적 방향으로 정책 전환 촉구", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "민간단체 인도적 지원 허용, 국제기구 북한지원사업 공여 검토, 당국차원 지원은 국민적 합의를 바탕으로 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "이산가족의 신청자의 전면 생사확인ᆞ상봉정례화ᆞ 교류 제도화 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국군포로ᆞ납북자 문제는 당사자의 의견을 존중한 다양한 해결책 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "탈북민 정착 지원 - 지원체계 효율화, 맞춤형 지원을 통한 생활밀착형 프로그램 확충 추진, 탈북민 인식 개선 및 지역주민과 소통 활성화 노력",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["북한인권재단", "인도적지원", "북한지원사업", "이산가족", "국군포로", "납북자","탈북민"]
                    },
                    {
                        "name": "93: 남북교류 활성화를 통한 남북관계 발전",
                        "department": ["통일부"],
                        "category": ["북한", "문화", "정치/정부"],
                        "description": [
                            {
                                "name": "체육ᆞ종교 분야 남북교류를 재개하고, 민족동질성 회복을 위한 겨레말큰사전 편찬 및 개성만월대 발굴사업 등 추진 - 평창동계올림픽은 북한 참가 지원 등으로 평화올림픽으로 추진", 
                                "status": "일부 진행중 (평창올림픽 북 참가요청)",
                                "statuscode": "partiallywip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=032&aid=0002805180"
                            },
                            {
                                "name": "남북교류협력 - 학술ᆞ역사ᆞ언어ᆞ교육ᆞ문화유산 등 다양한 분야의 사회문화 교류협력 확대 및 제도화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "남북교류협력 - 교류협력 네트워크 확대 및 내실화, 지자체와 민간단체의 자율적인 활동 공간 확보 지원(지자체 차원 교류협력 등) 등 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "남북교류협력법 등 관련 규정 정비, 인터넷에 기반한 남북교류협력시스템 개선 등 법‧제도화를 통한 교류협력기반 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["남북교류", "개성만월대", "겨레말큰사전", "평창동계올림픽", "남북교류협력", "남북교류협력법", "남북교류협력시스템"]
                    },
                    {
                        "name": "94: 통일 공감대 확산과 통일국민협약 추진",
                        "department": ["통일부"],
                        "category": ["북한", "문화","정치/정부"],
                        "description": [
                            {
                                "name": "국회 협의ᆞ국민 소통 기반 아래 통일국민협약 체결 추진, ’22년까지 협약 체결 및 이행ᆞ소통체계 등 제도 기반도 구축", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’22년까지 매년 단계별로 광역시도에 통일센터 설치", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "국내외 전문가 양성 프로그램을 연구개발, 단계적 으로 확대 실시하여 통일 대비 인적 기반 및 역량 강화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "범국민 통일교육 거버넌스 구축ᆞ운영으로 통일교육의 주요 원칙에 관한 사회적 합의 도출 및 미래세대의 통일인식 제고",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["퉁일국민협약", "통일", "통일센터", "통일전문가", "통일교육"]
                    },
                    {
                        "name": "95: 북핵문제의 평화적 해결 및 평화체제 구축",
                        "department": ["외교부"],
                        "category": ["북한", "안보/국방"],
                        "description": [
                            {
                                "name": "’20년 합의 도출을 위해 동결에서 완전한 핵폐기로 이어지는 포괄적 비핵화 협상 방안 마련, 비핵화 초기 조치 확보 및 포괄적 비핵화 협상 재개 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "대북제재 상황을 감안하면서, 남북대화‧교류협력 등 남북관계 차원의 북한 비핵화 견인", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "남북 간 정치ᆞ군사적 신뢰 구축 - 북한 비핵화 추진과 함께 남북대화를 통해 초보적 신뢰 구축 조치부터 단계적으로 심화",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "’17년 중 로드맵을 마련하고 비핵화 진전에 따라 평화체제 협상 추진, 북핵 완전해결 단계에서 협정 체결 및 평화체제 안정적 관리",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["북핵", "핵폐기", "비핵화", "대북제재", "남북대화", "남북교류협력", "평화체제"]
                    }
                ]
            },
            { // 전략
                "strategyname": "전략 3 - 국제협력을 주도하는 당당한 외교",
                "task": [
                    {
                        "name": "96: 국민외교 및 공공외교를 통한 국익 증진",
                        "department": ["외교부"],
                        "category": ["외교", "정치/정부"],
                        "description": [
                            {
                                "name": "국민외교시스템 구축 - 외교정책에 대한 대국민 소통ᆞ참여 기능 강화를 위해 온ᆞ오프라인 플랫폼 구축, 여론조사 등 추진",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "자유로운 소통이 가능한 조직문화 구축, 외교 역량 검증 강화 등을 통한 인사관리 신뢰 확보, 외교인력 확충 및 전문성 강화", 
                                "status": "진행중 (혁신태스크포스 외무자문위원회 발족)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=003&aid=0008101144"
                            },  
                            {
                                "name": "민주주의ᆞ인권ᆞ테러리즘 등 글로벌 이슈 관련 기여 확대, 우리 국민의 국제기구 진출 확대 및 정부 차원의 지원체계 강화", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "공공외교 통합조정기구로서 공공외교위원회 구성 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "제1차 5개년 공공외교 기본계획 수립 등을 통해 일관되고 체계적인 공공외교 수행 도모", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["국민외교", "국민외교시스템", "외교역량", "국제기구", "공공외교위원회"]
                    },
                    {
                        "name": "97: 주변 4국과의 당당한 협력외교 추진",
                        "department": ["외교부"],
                        "category": ["외교", "안보/국방", "과거사", "정치/정부" ,"경제", "FTA"],
                        "description": [
                            {
                                "name": "정상 방미 등 활발한 고위급 외교 전개를 통한 한미동맹을 호혜적 책임동맹관계로 지속 심화ᆞ발전", 
                                "status": "진행중 (한미정상회담 완료, 국방장관회담 추진중)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=001&aid=0009445984"
                            }, 
                            {
                                "name": "미 조야를 대상으로 한 활발한 대미외교 전개로 한미동맹 저변 공고화, 연합방위태세 강화 및 한ᆞ미 간 현안 합리적 해결", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "한ᆞ중 양국 정상 및 고위급 간 활발한 교류ᆞ대화, 사드 문제 관련 소통 강화로 신뢰 회복을 통한 실질적 한중 전략적 협력 동반자관계 내실화", 
                                "status": "추진중 (2017.8 예정)",
                                "statuscode": "none",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=056&aid=0010488642"
                            }, 
                            {
                                "name": "북핵문제 해결을 위한 한ᆞ중협력 강화, 한ᆞ중 FTA 강화 등을 통한 경제협력 확대, 미세먼지 대응 등 국민체감형 사안 관련 협력 강화", 
                                "status": "일부 진행중",
                                "statusdesc": "한·중·일 환경장관회의, 미세먼지 대응 협력 등 논의 - 중국과는 미세먼지를 비롯한 대기오염 대응 정책·연구·기술 협력강화, 자연환경, 물, 토양 등 환경 전반에 걸친 향후 5년 간(2018~2022년)의 한·중 환경협력계획과 양국간 환경산업·기술 협력에 대해 의견을 나눈다. 일본과는 양국 간 미세먼지(PM2.5) 공동연구 협력에 대해 논의하고, 미국의 파리협정 탈퇴로 그 중요성이 부각되고 있는 기후변화 대응에 대하여 입장을 공유할 계획이다.",
                                "statuscode": "partiallywip",
                                "statuslink": "http://www.korea.kr/policy/mainView.do?newsId=148841495&pageIndex=9&startDate=2017-08-10&endDate=2017-08-29&repCodeType=&repCode=&srchWord="
                            },
                            {
                                "name": "독도 및 역사왜곡에는 단호히 대응하는 등 역사를 직시하면서 한ᆞ일 간 미래지향적 성숙한 협력동반자 관계 발전 - 과거사와 북한 핵ᆞ미사일 대응, 양국 간 실질협력과는 분리 대응", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "위안부 문제는 피해자와 국민들이 동의할 수 있는 해결방안 도출", 
                                "status": "진행중 (위안부 태스크포스 발족)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=100&oid=056&aid=0010488248"
                            }, 
                            {
                                "name": "북핵문제 해결을 위한 전략적 소통 및 한ᆞ러 경제협력 강화를 통해 한ᆞ러 전략적 협력동반자 관계의 실질적 발전 추진 - 정상교류를 포함 고위급 교류 활성화, 극동지역 개발 협력 확대, 북극ᆞ에너지ᆞFTA 등 미래성장동력 확충 등", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            } ],
                        "keywords": ["주변4국", "협력외교", "한미동맹", "대미외교", "한미연합방위", "한중", "북핵", "미세먼지", "한일", "역사왜곡", "독도", "과거사", "위안부", "한러", "경제협력", "극동지역", "북극", "에너지", "FTA"]
                    },
                    {
                        "name": "98: 동북아플러스 책임공동체 형성",
                        "department": ["외교부"],
                        "category": ["FTA", "경제", "외교"],
                        "description": [
                            {
                                "name": "동북아 다자 안보협력 진전을 위해 정부 간 협의회 정례화ᆞ제도화 모색", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "한중일 3국 협력 강화를 비롯한 소다자 협력 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "MIKTA지속추진ᆞ강화및동아시아내다양한형태의중견국협력시도", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "신남방정책 - 아세안의 수요에 기반한 실질 협력 강화(주변 4국 유사 수준)",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "인도와의 전략적 공조 강화 및 실질 경제 협력 확대(특별 전략적 동반자관계)", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "신북방정책 - 남북러 3각 협력(나진-하산 물류사업, 철도, 전력망 등) 추진기반 마련", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },
                            {
                                "name": "한-EAEU FTA 추진 및 중국 일대일로 구상 참여", 
                                "status": "진행중 (유라시아경제연합 정부간 협의중)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=015&aid=0003753911"
                            }],
                        "keywords": ["FTA", "신남방정책","신북방정책", "동북아", "안보협력", "소다자협력", "아세안", "인도", "남북러", "나진하산물류사업", "MIKTA"]
                    },
                    {
                        "name": "99: 국익을 증진하는 경제외교 및 개발협력 강화",
                        "department": ["외교부"],
                        "category": ["외교","경제"],
                        "description": [
                            {
                                "name": "인도 등 신흥시장 진출을 위해 경제공동위를 통한 양자경제 관리, 경제협력협정 체결을 통한 법적 기반 마련 등 외교적 지원",
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "기후변화협상 적극 참여, 자발적 감축 공약 제출 준비", 
                                "status": "진행중 (한-중간)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=123&oid=298&aid=0000225034"
                            },  
                            {
                                "name": "기업 등과의 협력사업 및 글로벌 인재양성 확대를 통한 민간 일자리 창출 기여, ODA 분야 공공부문 일자리 창출, 인프라 사업 등 우리나라의 해외진출을 통한 국익 기여", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "유ᆞ무상간 전략적 연계, 무상원조의 통합적 추진 및 연계성 강화를 통해 국익을 증진하는 전략적 국제개발 협력 이행 - 국제개발협력위원회(총리실) 및 무상개발협력전략회의(외교부) 등 적극 활용", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["ODA", "경제외교", "인도", "기후변화협상", "기후변화", "개발원조", "공공부문", "일자리", "무상원조", "국제개발협력", "무상개발협력"]
                    },
                    {
                        "name": "100: 보호무역주의 대응 및 전략적 경제협력 강화",
                        "department": ["산업부"],
                        "category": ["경제", "외교", "FTA"],
                        "description": [
                            {
                                "name": "한미 FTA 상호호혜성을 바탕으로 양국 교역ᆞ투자 발전 - FTA 재협상 등 모든 가능성을 열어놓고 국익 극대화 관점에서 철저 대비",
                                "status": "진행중 (재협상 통상교섭본부장 임명)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=422&aid=0000269596"
                            }, 
                            {
                                "name": "협력채널 재개(통상ᆞ산업ᆞ품질검사 분야 협력채널 조기 개최, 한중 FTA 분야별 이행위원회 개최 등), 협력사업 등을 통해 한중 관계 복원 및 한중 FTA 활용 지속 확대", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            },  
                            {
                                "name": "RCEP(역내포괄적경제동반자협정) 및 한중일 FTA 적극 참여 등 동아시아 경제통합의 중심역할 수행", 
                                "status": "진행중 (RCEP 제19차 참석)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=123&oid=298&aid=0000224734"
                            }, 
                            {
                                "name": "ASEANᆞ인도 등 거대 신흥시장과의 맞춤형 경제 협력을 강화하고, 신규 FTA 협상(남미공동시장(브라질 등 4개국), 유라시아경제연합(러시아 등 5개국), 멕시코 등)을 적극 추진", 
                                "status": "진행중 (유라시아경제연합 정부간 협의중, 브라질 추진중)",
                                "statuscode": "wip",
                                "statuslink": "http://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=023&aid=0003270032"
                            },
                            {
                                "name": "APEC, WTO 각료회의, ASEM 경제장관회의(’17.9) 등 계기 보호무역 대응 논의를 주도하고, 자유무역 선호국가 간 ‘통상 선진국가 클럽’ 구성 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }, 
                            {
                                "name": "범정부 통상정책 총괄ᆞ조정 기능 강화, 통상 전문성 제고, 관련 업계 수입규제 대응 원스톱 지원체계 구축 등 추진", 
                                "status": "세부계획 미정",
                                "statuscode": "none"
                            }],
                        "keywords": ["FTA", "한미", "한미FTA", "RCEP", "역내포괄적경제동반자협정", "한중일", "아세안", "인도", "브라질", "남미공동시장", "유라시아경제연합", "러시아", "멕시코", "APEC", "WTO", "ASEM경제장관회의", "보호무역", "통상정책", "통상", "통상역량"]
                    }
                ]
            }
        ]
    }
];

    var hero_policylist = Handlebars.templates['hero_policylist'];
    $('#banana-moon-policylist').append(hero_policylist(policylist));

    var allkeywords = [];
    _.filter(policylist, function (p) {
        var subkeywords = [];
        _.filter(p.strategies, function (s) {
            _.filter(s.task, function (t) {
                subkeywords = _.union(subkeywords, t.keywords);
            });
        });

        allkeywords.push({
            "policyname": p.policyname,
            "keywords": subkeywords
        });
    });

    var hero_keywords = Handlebars.templates['hero_keywords'];
    $('#banana-moon-keywords #keywords').append(hero_keywords(allkeywords));

    var allcategories = [];
    _.filter(policylist, function (p) {
        _.filter(p.strategies, function (s) {
            _.filter(s.task, function (t) {
                allcategories = _.union(allcategories, t.category);
            });
        });
    });
    
    var hero_policycategories = Handlebars.templates['hero_policycategories'];
    $('#banana-moon-policylist').find('.policylist-categories').append(hero_policycategories(allcategories));

    var totalpolicy_counts = $('#banana-moon-policylist').find('.task').length;
    var totalpolicy_progress = 100 * totalpolicy_counts;
    var totalpolicy_eachprogress = [];

    $('#banana-moon-policylist').find('.task').each(function (index, item) {
        var thisobj = $(this);
        var substatuses = [];
        var totalsubtasks_counts = $(this).find('.descriptionstatus').length;
        var totalsubtasks_progress = 100 * totalsubtasks_counts;

        $(this).find('.descriptionstatus').each(function (di, dt) {
            var code = $(this).attr('banana-taskcode');
            var convertedcode = 0;
            switch (code) {
            case 'none':
                convertedcode = 0;
                break;
            case 'await':
                convertedcode = 10;
                break;
            case 'discussing':
                convertedcode = 15;
                break;
            case 'congress':
                convertedcode = 65;
                break;
            case 'wip':
                convertedcode = 55;
                break;
            case 'partiallywip':
                convertedcode = 45;
                break;
            case 'question':
                convertedcode = 30;
                break;
            case 'done':
                convertedcode = 100;
                break;
            }

            substatuses.push(convertedcode);
        }).promise().done(function () {
            var totalsubtasks_sum = substatuses.reduce(function(a, b) {
                return parseInt(a, 10) + parseInt(b, 10);
            });

            var subtasksum_list = [];
            subtasksum_list.push(totalsubtasks_sum);
            subtasksum_list.push(totalsubtasks_progress);

            var subtasksum_list_max = d3.max(subtasksum_list);
            var scaleCalc = d3.scaleLinear().domain([0, subtasksum_list_max]).range([0, 100]);

            var subtasksum_list_scale = subtasksum_list.map(function (p, e) {
                return scaleCalc(p);
            });

            $(thisobj).find('.taskstatus').attr('banana-taskstatus', subtasksum_list_scale[0]);
            $(thisobj).find('.taskstatus').find('p').text(Math.round(subtasksum_list_scale[0] * 1000) / 1000 + '%');
            $(thisobj).find('.taskstatusbar').css('width', subtasksum_list_scale[0] + '%');
            totalpolicy_eachprogress.push(subtasksum_list_scale[0]);
        });
    }).promise().done(function () {
        var totalpolicy_sum = totalpolicy_eachprogress.reduce(function(a, b) {
            return parseInt(a, 10) + parseInt(b, 10);
        });

        var totalpolicysum_list = [];
        totalpolicysum_list.push(totalpolicy_sum);
        totalpolicysum_list.push(totalpolicy_progress);

        var totalpolicysum_list_max = d3.max(totalpolicysum_list);
        var scaleCalc = d3.scaleLinear().domain([0, totalpolicysum_list_max]).range([0, 100]);

        var totalpolicysum_list_scale = totalpolicysum_list.map(function (p, e) {
            return scaleCalc(p);
        });

        $('#banana-moon-intro #totalprogress').text('현재 총 이행률 ' + Math.round(totalpolicysum_list_scale[0] * 1000) / 1000 + '%');
        var progressValue = document.querySelector('.progress__value');
        var RADIUS = 54;
        var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
        function progress(value) {
            var progress = value / 100;
            var dashoffset = CIRCUMFERENCE * (1 - progress);
            
            progressValue.style.strokeDashoffset = dashoffset;
        }

        progressValue.style.strokeDasharray = CIRCUMFERENCE;
        progress(totalpolicysum_list_scale[0]);
    });

    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

    
    var keyword = getUrlParameter('key');
    var category = getUrlParameter('cat');
    if (category !== undefined && category !== '') {
        var key = '정치/정부';
        switch (category) {
            case 'polgov':
            key = '정치/정부';
            break;
            case 'pasthis':
            key = '과거사';
            break;
            case 'press':
            key = '언론';
            break;
            case 'humanrights':
            key = '인권';
            break;
            case 'constitution':
            key = '개헌';
            break;
            case 'diplo':
            key = '외교';
            break;
            case 'welfare':
            key = '복지';
            break;
            case 'jobs':
            key = '일자리';
            break;
            case 'life':
            key = '생활';
            break;
            case 'economics':
            key = '경제';
            break;
            case 'younggen':
            key = '청년';
            break;
            case 'elder':
            key = '노인';
            break;
            case 'housing':
            key = '주택/부동산';
            break;
            case 'telecom':
            key = '통신';
            break;
            case 'transport':
            key = '교통';
            break;
            case 'fourthindustrev':
            key = '4차산업혁명';
            break;
            case 'science':
            key = '과학';
            break;
            case 'nk':
            key = '북한';
            break;
            case 'women':
            key = '여성';
            break;
            case 'environ':
            key = '환경/안전';
            break;
            case 'child':
            key = '아동';
            break;
            case 'childcare':
            key = '보육';
            break;
            case 'education':
            key = '교육';
            break;
            case 'agriculture':
            key = '농산어촌';
            break;
            case 'labor':
            key = '노동';
            break;
            case 'culture':
            key = '문화';
            break;
            case 'travel':
            key = '관광';
            break;
            case 'maritime':
            key = '해양';
            break;
            case 'defense':
            key = '안보/국방';
            break;
            case 'fta':
            key = 'FTA';
            break;
        }

        $('#banana-moon-policylist').attr('banana-status', '');
        $('#banana-moon-keywordmodebar').attr('banana-status', '');
        $('#banana-moon-keywordmodebar .key').text('');
        $('#banana-moon-policylist').find('.task').attr('banana-status', '');

        var setParameter = function (url, param, paramVal){
            var parts = url.split('?');
            var baseUrl = parts[0];
            var oldQueryString = parts[1];
            var newParameters = [];
            if (oldQueryString) {
                var oldParameters = oldQueryString.split('&');
                for (var i = 0; i < oldParameters.length; i++) {
                if(oldParameters[i].split('=')[0] != param) {
                    newParameters.push(oldParameters[i]);
                }
                }
            }
            if (paramVal !== '' && paramVal !== null && typeof paramVal !== 'undefined') {
                newParameters.push(param + '=' + encodeURI(paramVal));
            }
            if (newParameters.length > 0) {
                return baseUrl + '?' + newParameters.join('&');
            } else {
                return baseUrl;
            }
        }

        var newURL = setParameter(window.location.href, 'cat', category);
        $('#keywordsharelink').attr('value', newURL);
        $('#banana-moon-policylist').find('.task').each(function() {
            if ($(this).attr('banana-taskcategory').indexOf(key) != -1) {
                $(this).attr('banana-status', 'highlighted');
            }
        });
        
        $('#banana-moon-policylist').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar .key').text(key);
        setTimeout(function () {
            $('#banana-moon-container').scrollTo($('#banana-moon-policylist').find('.task[banana-status="highlighted"]')[0], 100);
        }, 500);
        
    } else if (keyword !== undefined) {
        var key = keyword;

        $('#banana-moon-policylist').attr('banana-status', '');
        $('#banana-moon-keywordmodebar').attr('banana-status', '');
        $('#banana-moon-keywordmodebar .key').text('');
        $('#banana-moon-policylist').find('.task').attr('banana-status', '');
        
        $('#banana-moon-policylist').find('.task').each(function() {
            if ($(this).attr('banana-taskdata').indexOf(key) != -1) {
                $(this).attr('banana-status', 'highlighted');
            }
        });
        
        $('#banana-moon-policylist').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar').attr('banana-status', 'highlighted');
        $('#banana-moon-keywordmodebar .key').text(key);
        setTimeout(function () {
            $('#banana-moon-container').scrollTo($('#banana-moon-policylist').find('.task[banana-status="highlighted"]')[0], 100);
        }, 500);
    }

    $('#banana-moon-policylist .substrategyinfo').on('click', function () {
        var foldstatus = $(this).parent('.policy-strategycontainer').attr('banana-status');
        if (foldstatus == 'folded') {
            $(this).parent('.policy-strategycontainer').attr('banana-status', 'unfolded');
        } else if (foldstatus == 'unfolded') {
            $(this).parent('.policy-strategycontainer').attr('banana-status', 'folded');
        }
    });

    $('#banana-moon-policylist .descriptions .description-action-link').on('click', function () {
        var linkdata = $(this).attr('banana-link');
        if (linkdata != undefined) {
            window.open(linkdata,'_blank');
        }
    });

    $('#banana-moon-policylist .descriptions li p').on('click', function () {
        var linkdata = $(this).parent('.description').find('.descriptiontext').attr('banana-taskdesc');
        if (linkdata != undefined) {
            alert(linkdata);
        }
    });

    $('#banana-moon-policylist').on('click', '.policylist-action-fold', function () {
        var thisobj = $(this);
        var foldstatus = $(this).attr('banana-status');
        if (foldstatus == 'folded') {
            $('#banana-moon-policylist .substrategyinfo').each(function (i, t) {
                $(this).parent('.policy-strategycontainer').attr('banana-status', 'unfolded');
            });

            $(thisobj).find('.bolder').text('모든 과제/전략 한눈에 보기');
            $(thisobj).attr('banana-status', 'unfolded');
        } else if (foldstatus == 'unfolded') {
            $('#banana-moon-policylist .substrategyinfo').each(function (i, t) {
                $(this).parent('.policy-strategycontainer').attr('banana-status', 'folded');
            });

            $(thisobj).find('.bolder').text('모든 과제/전략 펼쳐서 보기');
            $(thisobj).attr('banana-status', 'folded');
        }
        
    });
});