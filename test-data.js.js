var testData = {
	"vacancy" : {
		"_id": 1,
		"company": {
			"_id" : 1,
			"name" : "Креативное агентство \"Уксус\"", 
			"legalName" : "ООО \"Уксус\"",
			"description" : "Креативное агентство \"Уксус\" трололололо", 
			"history" : "Трололо",
			"staffCount" : 8,
			"url" : "http://ch3cooh.ru",
			"email" : "ch3cooh@ch3cooh.ru",
			"active" : true,
			"verified" : true,
			"address" : {
				"street" : "пер. Красина",
				"house" : "16 стр. 1",
				"zipCode" : 123456,
				"city": { 
					"id": 1,
					"name" : "Москва",
					"country" : {
						"id": 1,
						"name" : "Российская Федерация"
					}
				}
			},
			"classifier" : [ 1, 2, 3 ],
			"segment": { 
				"id": 1,
				"name": "IT"
			},
			"phones" : [ 
				"79037907407"
			],
			"tags" : [ "рога", "копыта" ]
		},
		"name": "Программист SQL", // ПОЛЕ "НАЗВАНИЕ ПОЗИЦИИ"
		"validUntil": "2012-01-01",
		"responsibilities": "Требуется программист на языке Transact-SQL для СУБД SQL Server 2005.", 
		"description": "<b>Тестовая вакансия</b>", 
		"conditions": "Такие-то <b>условия</b>", 
		"position": {
			"id": 1,
			"title": "Программист СУБД" 
		},
		"businessTrips": false, 
		"test": true,
		"minSalary": { // Сумма ОТ
			"amount": 40000,
			"currency": {
				"id": 1,
				"shortName": "р.",
				"fullName": "Российский Рубль"
			}
		},
		"maxSalary": { // Сумма ДО
			"amount": 60000,
			"currency": {
				"id": 1,
				"shortName": "р.",
				"fullName": "Российский Рубль"
			}
		},
		"city": { 
			"id": 1,
			"name" : "Москва",
			"country" : {
				"id": 1,
				"name" : "Российская Федерация"
			}
		},
		"segment": { 
			"id": 1,
			"name": "IT"
		},
		"languages": [ 
			{
				"language": {
					"id": 1,
					"name": "Английский"
				},
				"languageLevel" : {
					"id": 1,
					"name": "Fluent"
				}
			} 
		]
	}
}


