# finch-tools
一些有用的工具
May be some useful tools for finch.
 
* fixIntegerLength : 正整数补位

```typescript
import  {fixIntegerLength} from 'finch-tools';
fixIntegerLength(123,5);
//"00123"
```

* getRandomString ： 随机字符串

```typescript
import  {getRandomString} from 'finch-tools';
getRandomString(5);
//"AYIGJ"
getRandomString();
//"YUIJhgftYuHGVbnmGFtRfVNKHKklloYv"
```

* getReadableDate ： 可读时间戳

```typescript
import  {getReadableDate} from 'finch-tools';
getReadableDate(5);
//"2020_02_26_14_25_325"
```