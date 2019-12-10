# VeloPayments.CreatePayeesCSVRequest2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PayeeType**](PayeeType.md) |  | 
**remoteId** | **String** |  | 
**email** | **String** |  | 
**addressLine1** | **String** |  | 
**addressLine2** | **String** |  | [optional] 
**addressLine3** | **String** |  | [optional] 
**addressLine4** | **String** |  | [optional] 
**addressCity** | **String** |  | 
**addressCountyOrProvince** | **String** |  | [optional] 
**addressZipOrPostcode** | **String** |  | 
**addressCountry** | **String** | Must be a 2 character country code - per ISO 3166-1 | 
**individualNationalIdentification** | **String** |  | [optional] 
**individualDateOfBirth** | **Date** | Must not be date in future. Example - 1970-05-20 | [optional] 
**individualTitle** | **String** |  | [optional] 
**individualFirstName** | **String** |  | [optional] 
**individualOtherNames** | **String** |  | [optional] 
**individualLastName** | **String** |  | [optional] 
**companyName** | **String** |  | [optional] 
**companyEIN** | **String** | Company Tax Id (EIN) must be 9 numeric characters. Must match the regular expression &#x60;&#x60;&#x60;[\\d]{9}&#x60;&#x60;&#x60;. | [optional] 
**companyOperatingName** | **String** |  | [optional] 
**paymentChannelAccountNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**paymentChannelRoutingNumber** | **String** | Either routing number and account number or only iban must be set | [optional] 
**paymentChannelAccountName** | **String** |  | [optional] 
**paymentChannelIban** | **String** | Must match the regular expression &#x60;&#x60;&#x60;^[A-Za-z0-9]+$&#x60;&#x60;&#x60;. | [optional] 
**paymentChannelCountryCode** | **String** | Must be a 2 character country code - per ISO 3166-1 | [optional] 
**paymentChannelCurrency** | **String** |  | [optional] 
**challengeDescription** | **String** |  | [optional] 
**challengeValue** | **String** |  | [optional] 
**payeeLanguage** | **String** |  | [optional] 



## Enum: AddressCountryEnum


* `AF` (value: `"AF"`)

* `AX` (value: `"AX"`)

* `AL` (value: `"AL"`)

* `DZ` (value: `"DZ"`)

* `AS` (value: `"AS"`)

* `AD` (value: `"AD"`)

* `AO` (value: `"AO"`)

* `AI` (value: `"AI"`)

* `AQ` (value: `"AQ"`)

* `AG` (value: `"AG"`)

* `AR` (value: `"AR"`)

* `AM` (value: `"AM"`)

* `AW` (value: `"AW"`)

* `AU` (value: `"AU"`)

* `AT` (value: `"AT"`)

* `AZ` (value: `"AZ"`)

* `BS` (value: `"BS"`)

* `BH` (value: `"BH"`)

* `BD` (value: `"BD"`)

* `BB` (value: `"BB"`)

* `BY` (value: `"BY"`)

* `BE` (value: `"BE"`)

* `BZ` (value: `"BZ"`)

* `BJ` (value: `"BJ"`)

* `BM` (value: `"BM"`)

* `BT` (value: `"BT"`)

* `BO` (value: `"BO"`)

* `BQ` (value: `"BQ"`)

* `BA` (value: `"BA"`)

* `BW` (value: `"BW"`)

* `BV` (value: `"BV"`)

* `BR` (value: `"BR"`)

* `IO` (value: `"IO"`)

* `BN` (value: `"BN"`)

* `BG` (value: `"BG"`)

* `BF` (value: `"BF"`)

* `BI` (value: `"BI"`)

* `KH` (value: `"KH"`)

* `CM` (value: `"CM"`)

* `CA` (value: `"CA"`)

* `CV` (value: `"CV"`)

* `KY` (value: `"KY"`)

* `CF` (value: `"CF"`)

* `TD` (value: `"TD"`)

* `CL` (value: `"CL"`)

* `CN` (value: `"CN"`)

* `CX` (value: `"CX"`)

* `CC` (value: `"CC"`)

* `CO` (value: `"CO"`)

* `KM` (value: `"KM"`)

* `CG` (value: `"CG"`)

* `CD` (value: `"CD"`)

* `CK` (value: `"CK"`)

* `CR` (value: `"CR"`)

* `CI` (value: `"CI"`)

* `HR` (value: `"HR"`)

* `CU` (value: `"CU"`)

* `CW` (value: `"CW"`)

* `CY` (value: `"CY"`)

* `CZ` (value: `"CZ"`)

* `DK` (value: `"DK"`)

* `DJ` (value: `"DJ"`)

* `DM` (value: `"DM"`)

* `DO` (value: `"DO"`)

* `EC` (value: `"EC"`)

* `EG` (value: `"EG"`)

* `SV` (value: `"SV"`)

* `GQ` (value: `"GQ"`)

* `ER` (value: `"ER"`)

* `EE` (value: `"EE"`)

* `ET` (value: `"ET"`)

* `FK` (value: `"FK"`)

* `FO` (value: `"FO"`)

* `FJ` (value: `"FJ"`)

* `FI` (value: `"FI"`)

* `FR` (value: `"FR"`)

* `GF` (value: `"GF"`)

* `PF` (value: `"PF"`)

* `TF` (value: `"TF"`)

* `GA` (value: `"GA"`)

* `GM` (value: `"GM"`)

* `GE` (value: `"GE"`)

* `DE` (value: `"DE"`)

* `GH` (value: `"GH"`)

* `GI` (value: `"GI"`)

* `GR` (value: `"GR"`)

* `GL` (value: `"GL"`)

* `GD` (value: `"GD"`)

* `GP` (value: `"GP"`)

* `GU` (value: `"GU"`)

* `GT` (value: `"GT"`)

* `GG` (value: `"GG"`)

* `GN` (value: `"GN"`)

* `GW` (value: `"GW"`)

* `GY` (value: `"GY"`)

* `HT` (value: `"HT"`)

* `HM` (value: `"HM"`)

* `VA` (value: `"VA"`)

* `HN` (value: `"HN"`)

* `HK` (value: `"HK"`)

* `HU` (value: `"HU"`)

* `IS` (value: `"IS"`)

* `IN` (value: `"IN"`)

* `ID` (value: `"ID"`)

* `IR` (value: `"IR"`)

* `IQ` (value: `"IQ"`)

* `IE` (value: `"IE"`)

* `IM` (value: `"IM"`)

* `IL` (value: `"IL"`)

* `IT` (value: `"IT"`)

* `JM` (value: `"JM"`)

* `JP` (value: `"JP"`)

* `JE` (value: `"JE"`)

* `JO` (value: `"JO"`)

* `KZ` (value: `"KZ"`)

* `KE` (value: `"KE"`)

* `KI` (value: `"KI"`)

* `KP` (value: `"KP"`)

* `KR` (value: `"KR"`)

* `KW` (value: `"KW"`)

* `KG` (value: `"KG"`)

* `LA` (value: `"LA"`)

* `LV` (value: `"LV"`)

* `LB` (value: `"LB"`)

* `LS` (value: `"LS"`)

* `LR` (value: `"LR"`)

* `LY` (value: `"LY"`)

* `LI` (value: `"LI"`)

* `LT` (value: `"LT"`)

* `LU` (value: `"LU"`)

* `MO` (value: `"MO"`)

* `MK` (value: `"MK"`)

* `MG` (value: `"MG"`)

* `MW` (value: `"MW"`)

* `MY` (value: `"MY"`)

* `MV` (value: `"MV"`)

* `ML` (value: `"ML"`)

* `MT` (value: `"MT"`)

* `MH` (value: `"MH"`)

* `MQ` (value: `"MQ"`)

* `MR` (value: `"MR"`)

* `MU` (value: `"MU"`)

* `YT` (value: `"YT"`)

* `MX` (value: `"MX"`)

* `FM` (value: `"FM"`)

* `MD` (value: `"MD"`)

* `MC` (value: `"MC"`)

* `MN` (value: `"MN"`)

* `ME` (value: `"ME"`)

* `MS` (value: `"MS"`)

* `MA` (value: `"MA"`)

* `MZ` (value: `"MZ"`)

* `MM` (value: `"MM"`)

* `NA` (value: `"NA"`)

* `NR` (value: `"NR"`)

* `NP` (value: `"NP"`)

* `NL` (value: `"NL"`)

* `NC` (value: `"NC"`)

* `NZ` (value: `"NZ"`)

* `NI` (value: `"NI"`)

* `NE` (value: `"NE"`)

* `NG` (value: `"NG"`)

* `NU` (value: `"NU"`)

* `NF` (value: `"NF"`)

* `MP` (value: `"MP"`)

* `false` (value: `"false"`)

* `OM` (value: `"OM"`)

* `PK` (value: `"PK"`)

* `PW` (value: `"PW"`)

* `PS` (value: `"PS"`)

* `PA` (value: `"PA"`)

* `PG` (value: `"PG"`)

* `PY` (value: `"PY"`)

* `PE` (value: `"PE"`)

* `PH` (value: `"PH"`)

* `PN` (value: `"PN"`)

* `PL` (value: `"PL"`)

* `PT` (value: `"PT"`)

* `PR` (value: `"PR"`)

* `QA` (value: `"QA"`)

* `RE` (value: `"RE"`)

* `RO` (value: `"RO"`)

* `RU` (value: `"RU"`)

* `RW` (value: `"RW"`)

* `BL` (value: `"BL"`)

* `SH` (value: `"SH"`)

* `KN` (value: `"KN"`)

* `LC` (value: `"LC"`)

* `MF` (value: `"MF"`)

* `PM` (value: `"PM"`)

* `VC` (value: `"VC"`)

* `WS` (value: `"WS"`)

* `SM` (value: `"SM"`)

* `ST` (value: `"ST"`)

* `SA` (value: `"SA"`)

* `SN` (value: `"SN"`)

* `RS` (value: `"RS"`)

* `SC` (value: `"SC"`)

* `SL` (value: `"SL"`)

* `SG` (value: `"SG"`)

* `SX` (value: `"SX"`)

* `SK` (value: `"SK"`)

* `SI` (value: `"SI"`)

* `SB` (value: `"SB"`)

* `SO` (value: `"SO"`)

* `ZA` (value: `"ZA"`)

* `GS` (value: `"GS"`)

* `SS` (value: `"SS"`)

* `ES` (value: `"ES"`)

* `LK` (value: `"LK"`)

* `SD` (value: `"SD"`)

* `SR` (value: `"SR"`)

* `SJ` (value: `"SJ"`)

* `SZ` (value: `"SZ"`)

* `SE` (value: `"SE"`)

* `CH` (value: `"CH"`)

* `SY` (value: `"SY"`)

* `TW` (value: `"TW"`)

* `TJ` (value: `"TJ"`)

* `TZ` (value: `"TZ"`)

* `TH` (value: `"TH"`)

* `TL` (value: `"TL"`)

* `TG` (value: `"TG"`)

* `TK` (value: `"TK"`)

* `TO` (value: `"TO"`)

* `TT` (value: `"TT"`)

* `TN` (value: `"TN"`)

* `TR` (value: `"TR"`)

* `TM` (value: `"TM"`)

* `TC` (value: `"TC"`)

* `TV` (value: `"TV"`)

* `UG` (value: `"UG"`)

* `UA` (value: `"UA"`)

* `AE` (value: `"AE"`)

* `GB` (value: `"GB"`)

* `US` (value: `"US"`)

* `UM` (value: `"UM"`)

* `UY` (value: `"UY"`)

* `UZ` (value: `"UZ"`)

* `VU` (value: `"VU"`)

* `VE` (value: `"VE"`)

* `VN` (value: `"VN"`)

* `VG` (value: `"VG"`)

* `VI` (value: `"VI"`)

* `WF` (value: `"WF"`)

* `EH` (value: `"EH"`)

* `YE` (value: `"YE"`)

* `ZM` (value: `"ZM"`)

* `ZW` (value: `"ZW"`)





## Enum: PaymentChannelCountryCodeEnum


* `AF` (value: `"AF"`)

* `AX` (value: `"AX"`)

* `AL` (value: `"AL"`)

* `DZ` (value: `"DZ"`)

* `AS` (value: `"AS"`)

* `AD` (value: `"AD"`)

* `AO` (value: `"AO"`)

* `AI` (value: `"AI"`)

* `AQ` (value: `"AQ"`)

* `AG` (value: `"AG"`)

* `AR` (value: `"AR"`)

* `AM` (value: `"AM"`)

* `AW` (value: `"AW"`)

* `AU` (value: `"AU"`)

* `AT` (value: `"AT"`)

* `AZ` (value: `"AZ"`)

* `BS` (value: `"BS"`)

* `BH` (value: `"BH"`)

* `BD` (value: `"BD"`)

* `BB` (value: `"BB"`)

* `BY` (value: `"BY"`)

* `BE` (value: `"BE"`)

* `BZ` (value: `"BZ"`)

* `BJ` (value: `"BJ"`)

* `BM` (value: `"BM"`)

* `BT` (value: `"BT"`)

* `BO` (value: `"BO"`)

* `BQ` (value: `"BQ"`)

* `BA` (value: `"BA"`)

* `BW` (value: `"BW"`)

* `BV` (value: `"BV"`)

* `BR` (value: `"BR"`)

* `IO` (value: `"IO"`)

* `BN` (value: `"BN"`)

* `BG` (value: `"BG"`)

* `BF` (value: `"BF"`)

* `BI` (value: `"BI"`)

* `KH` (value: `"KH"`)

* `CM` (value: `"CM"`)

* `CA` (value: `"CA"`)

* `CV` (value: `"CV"`)

* `KY` (value: `"KY"`)

* `CF` (value: `"CF"`)

* `TD` (value: `"TD"`)

* `CL` (value: `"CL"`)

* `CN` (value: `"CN"`)

* `CX` (value: `"CX"`)

* `CC` (value: `"CC"`)

* `CO` (value: `"CO"`)

* `KM` (value: `"KM"`)

* `CG` (value: `"CG"`)

* `CD` (value: `"CD"`)

* `CK` (value: `"CK"`)

* `CR` (value: `"CR"`)

* `CI` (value: `"CI"`)

* `HR` (value: `"HR"`)

* `CU` (value: `"CU"`)

* `CW` (value: `"CW"`)

* `CY` (value: `"CY"`)

* `CZ` (value: `"CZ"`)

* `DK` (value: `"DK"`)

* `DJ` (value: `"DJ"`)

* `DM` (value: `"DM"`)

* `DO` (value: `"DO"`)

* `EC` (value: `"EC"`)

* `EG` (value: `"EG"`)

* `SV` (value: `"SV"`)

* `GQ` (value: `"GQ"`)

* `ER` (value: `"ER"`)

* `EE` (value: `"EE"`)

* `ET` (value: `"ET"`)

* `FK` (value: `"FK"`)

* `FO` (value: `"FO"`)

* `FJ` (value: `"FJ"`)

* `FI` (value: `"FI"`)

* `FR` (value: `"FR"`)

* `GF` (value: `"GF"`)

* `PF` (value: `"PF"`)

* `TF` (value: `"TF"`)

* `GA` (value: `"GA"`)

* `GM` (value: `"GM"`)

* `GE` (value: `"GE"`)

* `DE` (value: `"DE"`)

* `GH` (value: `"GH"`)

* `GI` (value: `"GI"`)

* `GR` (value: `"GR"`)

* `GL` (value: `"GL"`)

* `GD` (value: `"GD"`)

* `GP` (value: `"GP"`)

* `GU` (value: `"GU"`)

* `GT` (value: `"GT"`)

* `GG` (value: `"GG"`)

* `GN` (value: `"GN"`)

* `GW` (value: `"GW"`)

* `GY` (value: `"GY"`)

* `HT` (value: `"HT"`)

* `HM` (value: `"HM"`)

* `VA` (value: `"VA"`)

* `HN` (value: `"HN"`)

* `HK` (value: `"HK"`)

* `HU` (value: `"HU"`)

* `IS` (value: `"IS"`)

* `IN` (value: `"IN"`)

* `ID` (value: `"ID"`)

* `IR` (value: `"IR"`)

* `IQ` (value: `"IQ"`)

* `IE` (value: `"IE"`)

* `IM` (value: `"IM"`)

* `IL` (value: `"IL"`)

* `IT` (value: `"IT"`)

* `JM` (value: `"JM"`)

* `JP` (value: `"JP"`)

* `JE` (value: `"JE"`)

* `JO` (value: `"JO"`)

* `KZ` (value: `"KZ"`)

* `KE` (value: `"KE"`)

* `KI` (value: `"KI"`)

* `KP` (value: `"KP"`)

* `KR` (value: `"KR"`)

* `KW` (value: `"KW"`)

* `KG` (value: `"KG"`)

* `LA` (value: `"LA"`)

* `LV` (value: `"LV"`)

* `LB` (value: `"LB"`)

* `LS` (value: `"LS"`)

* `LR` (value: `"LR"`)

* `LY` (value: `"LY"`)

* `LI` (value: `"LI"`)

* `LT` (value: `"LT"`)

* `LU` (value: `"LU"`)

* `MO` (value: `"MO"`)

* `MK` (value: `"MK"`)

* `MG` (value: `"MG"`)

* `MW` (value: `"MW"`)

* `MY` (value: `"MY"`)

* `MV` (value: `"MV"`)

* `ML` (value: `"ML"`)

* `MT` (value: `"MT"`)

* `MH` (value: `"MH"`)

* `MQ` (value: `"MQ"`)

* `MR` (value: `"MR"`)

* `MU` (value: `"MU"`)

* `YT` (value: `"YT"`)

* `MX` (value: `"MX"`)

* `FM` (value: `"FM"`)

* `MD` (value: `"MD"`)

* `MC` (value: `"MC"`)

* `MN` (value: `"MN"`)

* `ME` (value: `"ME"`)

* `MS` (value: `"MS"`)

* `MA` (value: `"MA"`)

* `MZ` (value: `"MZ"`)

* `MM` (value: `"MM"`)

* `NA` (value: `"NA"`)

* `NR` (value: `"NR"`)

* `NP` (value: `"NP"`)

* `NL` (value: `"NL"`)

* `NC` (value: `"NC"`)

* `NZ` (value: `"NZ"`)

* `NI` (value: `"NI"`)

* `NE` (value: `"NE"`)

* `NG` (value: `"NG"`)

* `NU` (value: `"NU"`)

* `NF` (value: `"NF"`)

* `MP` (value: `"MP"`)

* `false` (value: `"false"`)

* `OM` (value: `"OM"`)

* `PK` (value: `"PK"`)

* `PW` (value: `"PW"`)

* `PS` (value: `"PS"`)

* `PA` (value: `"PA"`)

* `PG` (value: `"PG"`)

* `PY` (value: `"PY"`)

* `PE` (value: `"PE"`)

* `PH` (value: `"PH"`)

* `PN` (value: `"PN"`)

* `PL` (value: `"PL"`)

* `PT` (value: `"PT"`)

* `PR` (value: `"PR"`)

* `QA` (value: `"QA"`)

* `RE` (value: `"RE"`)

* `RO` (value: `"RO"`)

* `RU` (value: `"RU"`)

* `RW` (value: `"RW"`)

* `BL` (value: `"BL"`)

* `SH` (value: `"SH"`)

* `KN` (value: `"KN"`)

* `LC` (value: `"LC"`)

* `MF` (value: `"MF"`)

* `PM` (value: `"PM"`)

* `VC` (value: `"VC"`)

* `WS` (value: `"WS"`)

* `SM` (value: `"SM"`)

* `ST` (value: `"ST"`)

* `SA` (value: `"SA"`)

* `SN` (value: `"SN"`)

* `RS` (value: `"RS"`)

* `SC` (value: `"SC"`)

* `SL` (value: `"SL"`)

* `SG` (value: `"SG"`)

* `SX` (value: `"SX"`)

* `SK` (value: `"SK"`)

* `SI` (value: `"SI"`)

* `SB` (value: `"SB"`)

* `SO` (value: `"SO"`)

* `ZA` (value: `"ZA"`)

* `GS` (value: `"GS"`)

* `SS` (value: `"SS"`)

* `ES` (value: `"ES"`)

* `LK` (value: `"LK"`)

* `SD` (value: `"SD"`)

* `SR` (value: `"SR"`)

* `SJ` (value: `"SJ"`)

* `SZ` (value: `"SZ"`)

* `SE` (value: `"SE"`)

* `CH` (value: `"CH"`)

* `SY` (value: `"SY"`)

* `TW` (value: `"TW"`)

* `TJ` (value: `"TJ"`)

* `TZ` (value: `"TZ"`)

* `TH` (value: `"TH"`)

* `TL` (value: `"TL"`)

* `TG` (value: `"TG"`)

* `TK` (value: `"TK"`)

* `TO` (value: `"TO"`)

* `TT` (value: `"TT"`)

* `TN` (value: `"TN"`)

* `TR` (value: `"TR"`)

* `TM` (value: `"TM"`)

* `TC` (value: `"TC"`)

* `TV` (value: `"TV"`)

* `UG` (value: `"UG"`)

* `UA` (value: `"UA"`)

* `AE` (value: `"AE"`)

* `GB` (value: `"GB"`)

* `US` (value: `"US"`)

* `UM` (value: `"UM"`)

* `UY` (value: `"UY"`)

* `UZ` (value: `"UZ"`)

* `VU` (value: `"VU"`)

* `VE` (value: `"VE"`)

* `VN` (value: `"VN"`)

* `VG` (value: `"VG"`)

* `VI` (value: `"VI"`)

* `WF` (value: `"WF"`)

* `EH` (value: `"EH"`)

* `YE` (value: `"YE"`)

* `ZM` (value: `"ZM"`)

* `ZW` (value: `"ZW"`)





## Enum: PaymentChannelCurrencyEnum


* `USD` (value: `"USD"`)

* `GBP` (value: `"GBP"`)

* `EUR` (value: `"EUR"`)





## Enum: PayeeLanguageEnum


* `AR` (value: `"AR"`)

* `EN` (value: `"EN"`)

* `ES` (value: `"ES"`)

* `FR` (value: `"FR"`)

* `HE` (value: `"HE"`)

* `HI` (value: `"HI"`)

* `JA` (value: `"JA"`)

* `PT` (value: `"PT"`)

* `RU` (value: `"RU"`)

* `UR` (value: `"UR"`)

* `ZH` (value: `"ZH"`)



