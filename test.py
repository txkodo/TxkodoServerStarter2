bytes = b"\x8e\x77\x92\xe8\x82\xb3\x82\xea\x82\xbd\x83\x70\x83\x58\x82\xaa\x8c\xa9\x82\xc2\x82\xa9\x82\xe8\x82\xdc\x82\xb9\x82\xf1\x81\x42\x0d\x0a"

encodings = {
    "ascii": ["English"],
    "big5": ["Traditional Chinese"],
    "big5hkscs": ["Traditional Chinese"],
    "cp037": ["English"],
    "cp273": ["German"],
    "cp424": ["Hebrew"],
    "cp437": ["English"],
    "cp500": ["Western Europe"],
    "cp720": ["Arabic"],
    "cp737": ["Greek"],
    "cp775": ["Baltic languages"],
    "cp850": ["Western Europe"],
    "cp852": ["Central and Eastern Europe"],
    "cp855": ["Bulgarian", "Byelorussian", "Macedonian", "Russian", "Serbian"],
    "cp856": ["Hebrew"],
    "cp857": ["Turkish"],
    "cp858": ["Western Europe"],
    "cp860": ["Portuguese"],
    "cp861": ["Icelandic"],
    "cp862": ["Hebrew"],
    "cp863": ["Canadian"],
    "cp864": ["Arabic"],
    "cp865": ["Danish", "Norwegian"],
    "cp866": ["Russian"],
    "cp869": ["Greek"],
    "cp874": ["Thai"],
    "cp875": ["Greek"],
    "cp932": ["Japanese"],
    "cp949": ["Korean"],
    "cp950": ["Traditional Chinese"],
    "cp1006": ["Urdu"],
    "cp1026": ["Turkish"],
    "cp1125": ["Ukrainian"],
    "cp1140": ["Western Europe"],
    "cp1250": ["Central and Eastern Europe"],
    "cp1251": ["Bulgarian", "Byelorussian", "Macedonian", "Russian", "Serbian"],
    "cp1252": ["Western Europe"],
    "cp1253": ["Greek"],
    "cp1254": ["Turkish"],
    "cp1255": ["Hebrew"],
    "cp1256": ["Arabic"],
    "cp1257": ["Baltic languages"],
    "cp1258": ["Vietnamese"],
    "euc_jp": ["Japanese"],
    "euc_jis_2004": ["Japanese"],
    "euc_jisx0213": ["Japanese"],
    "euc_kr": ["Korean"],
    "gb2312": ["Simplified Chinese"],
    "gbk": ["Unified Chinese"],
    "gb18030": ["Unified Chinese"],
    "hz": ["Simplified Chinese"],
    "iso2022_jp": ["Japanese"],
    "iso2022_jp_1": ["Japanese"],
    "iso2022_jp_2": ["Japanese", "Korean", "Simplified Chinese", "Western Europe", "Greek"],
    "iso2022_jp_2004": ["Japanese"],
    "iso2022_jp_3": ["Japanese"],
    "iso2022_jp_ext": ["Japanese"],
    "iso2022_kr": ["Korean"],
    "latin_1": ["Western Europe"],
    "iso8859_2": ["Central and Eastern Europe"],
    "iso8859_3": ["Esperanto", "Maltese"],
    "iso8859_4": ["Baltic languages"],
    "iso8859_5": ["Bulgarian", "Byelorussian", "Macedonian", "Russian", "Serbian"],
    "iso8859_6": ["Arabic"],
    "iso8859_7": ["Greek"],
    "iso8859_8": ["Hebrew"],
    "iso8859_9": ["Turkish"],
    "iso8859_10": ["Nordic languages"],
    "iso8859_11": ["Thai languages"],
    "iso8859_13": ["Baltic languages"],
    "iso8859_14": ["Celtic languages"],
    "iso8859_15": ["Western Europe"],
    "iso8859_16": ["South-Eastern Europe"],
    "johab": ["Korean"],
    "koi8_r": ["Russian"],
    "koi8_t": ["Tajik"],
    "koi8_u": ["Ukrainian"],
    "kz1048": ["Kazakh"],
    "mac_cyrillic": ["Bulgarian", "Byelorussian", "Macedonian", "Russian", "Serbian"],
    "mac_greek": ["Greek"],
    "mac_iceland": ["Icelandic"],
    "mac_latin2": ["Central and Eastern Europe"],
    "mac_roman": ["Western Europe"],
    "mac_turkish": ["Turkish"],
    "ptcp154": ["Kazakh"],
    "shift_jis": ["Japanese"],
    "shift_jis_2004": ["Japanese"],
    "shift_jisx0213": ["Japanese"],
    "utf_32": ["all languages"],
    "utf_32_be": ["all languages"],
    "utf_32_le": ["all languages"],
    "utf_16": ["all languages"],
    "utf_16_be": ["all languages"],
    "utf_16_le": ["all languages"],
    "utf_7": ["all languages"],
    "utf_8": ["all languages"],
    "utf_8_sig": ["all languages"],
}
for e in encodings.keys():
    print(e, bytes.decode(e, "replace"))

t = "指定されたパスが見つかりません。"
print(t.encode("shift_jis").hex())
print(t.encode("utf-8").hex())