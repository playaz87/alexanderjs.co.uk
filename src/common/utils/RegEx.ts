export class RegEx {
  public static readonly AlphaKorean = /^[a-zA-Z\u3131-\uD79D]+$/;
  public static readonly AlphanumericKorean = /^[a-zA-Z0-9\u3131-\uD79D]+$/;
  public static readonly AlphanumericKoreanNotAllNumbers = /^(?![0-9]*$)[a-zA-Z0-9\u3131-\uD79D]+$/;
  public static readonly AlphanumericNotAllNumbers = /^(?![0-9]*$)[a-zA-Z0-9]+$/;
  public static readonly AllowLimitedSpecialCharsOnly = /^[^!@#%&":*()?<>^$\\|\\/]+$/;
  public static readonly PhoneNumber = /^(010|011|016|017|018|019)\d{7,8}$/;
  public static readonly Email = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  public static readonly Password = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9@$!%*#?&]{8,}$/;
  public static readonly Url =
    /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9$\-_.+!*'(),;?&=]|(?:%[a-fA-F0-9]{2})){1,64}(?::(?:[a-zA-Z0-9$\-_.+!*'(),;?&=]|(?:%[a-fA-F0-9]{2})){1,25})?@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z\d-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?::\d{1,5})?)(\/(?:(?:[a-zA-Z0-9;/?:@&=#~\-.+!*'(),_])|(?:%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;
  public static readonly ValidPhoneStart = /^010/;
  public static readonly Numeric = /^[0-9]+$/;
  public static readonly AlphanumericKoreanSomeSpecial = /^[a-zA-Z0-9\u3131-\uD79D-_()&]+$/;
  public static readonly ApplicationLink = /^[a-zA-Z0-9\u3131-\uD79D-]+$/;
}
