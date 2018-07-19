var biblePlanCSV = "\
Date,Old Testament,New Testament,Psalm,Proverbs\n\
1-Jan-2017,Genesis 1:1-2:3,Matthew 1:1-17,Psalm 1:1-5,Proverbs 1:1-6\n\
2-Jan-2017,Genesis 2:4-25,Matthew 1:18-25,Psalm 1:6,Proverbs 1:7-9\n\
3-Jan-2017,Genesis 3:1-24,Matthew 2:1-12,Psalm 2:1-6,Proverbs 1:10-19\n\
4-Jan-2017,Genesis 4:1-26,Matthew 2:13-23,Psalm 2:7-12,Proverbs 1:20-23\n\
5-Jan-2017,Genesis 5:1-32,Matthew 3:1-6,Psalm 3:1-5,Proverbs 1:24-28\n\
6-Jan-2017,Genesis 6:1-22,Matthew 3:7-17,Psalm 3:6-8,Proverbs 1:29-33\n\
7-Jan-2017,Genesis 7:1-24,Matthew 4:1-11,Psalm 4:1-3,Proverbs 2:1-5\n\
8-Jan-2017,Genesis 8:1-9:19,Matthew 4:12-22,Psalm 4:4-8,Proverbs 2:6-15\n\
9-Jan-2017,Genesis 9:20-10:32,Matthew 4:23-25,Psalm 5:1-6,Proverbs 2:16-22\n\
10-Jan-2017,Genesis 11:1-26,Matthew 5:1-12,Psalm 5:7-12,Proverbs 3:1-6\n\
11-Jan-2017,Genesis 11:27-13:4,Matthew 5:13-26,Psalm 6:1-5,Proverbs 3:7-8\n\
12-Jan-2017,Genesis 13:5-14:16,Matthew 5:27-37,Psalm 6:6-10,Proverbs 3:9-10\n\
13-Jan-2017,Genesis 14:17-15:21,Matthew 5:38-48,Psalm 7:1-9,Proverbs 3:11-12\n\
14-Jan-2017,Genesis 16:1-17:14,Matthew 6:1-13,Psalm 7:10-17,Proverbs 3:13-15\n\
15-Jan-2017,Genesis 17:15-18:15,Matthew 6:14-24,Psalm 8:1,Proverbs 3:16-18\n\
16-Jan-2017,Genesis 18:16-19:26,Matthew 6:25-7:6,Psalm 8:2-9,Proverbs 3:19-20\n\
17-Jan-2017,Genesis 19:27-38,Matthew 7:7-14,Psalm 9:1-8,Proverbs 3:21-26\n\
18-Jan-2017,Genesis 20:1-21:21,Matthew 7:15-23,Psalm 9:9-12,Proverbs 3:27-32\n\
19-Jan-2017,Genesis 21:22-22:24,Matthew 7:24-29,Psalm 9:13-18,Proverbs 3:33-35\n\
20-Jan-2017,Genesis 23:1-20,Matthew 8:1-4,Psalm 9:19-20,Proverbs 4:1-6\n\
21-Jan-2017,Genesis 24:1-51,Matthew 8:5-17,Psalm 10:1-6,Proverbs 4:7-10\n\
22-Jan-2017,Genesis 24:52-25:28,Matthew 8:18-27,Psalm 10:7-15,Proverbs 4:11-13\n\
23-Jan-2017,Genesis 25:29-26:16,Matthew 8:28-34,Psalm 10:16,Proverbs 4:14-19\n\
24-Jan-2017,Genesis 26:17-35,Matthew 9:1-8,Psalm 10:17-18,Proverbs 4:20-27\n\
25-Jan-2017,Genesis 27:1-45,Matthew 9:9-17,Psalm 11:1-6,Proverbs 5:1-6\n\
26-Jan-2017,Genesis 27:46-28:22,Matthew 9:18-26,Psalm 11:7,Proverbs 5:7-14\n\
27-Jan-2017,Genesis 29:1-35,Matthew 9:27-38,Psalm 12:1-5,Proverbs 5:15-21\n\
28-Jan-2017,Genesis 30:1-24,Matthew 10:1-4,Psalm 12:6-8,Proverbs 5:22-23\n\
29-Jan-2017,Genesis 30:25-31:16,Matthew 10:5-23,Psalm 13:1-4,Proverbs 6:1-5\n\
30-Jan-2017,Genesis 31:17-55,Matthew 10:24-39,Psalm 13:5-6,Proverbs 6:6-11\n\
31-Jan-2017,Genesis 32:1-12,Matthew 10:40-11:6,Psalm 14:1-6,Proverbs 6:12-15\n\
1-Feb-2017,Genesis 32:13-33:20,Matthew 11:7-19,Psalm 14:7,Proverbs 6:16-19\n\
2-Feb-2017,Genesis 34:1-31,Matthew 11:20-30,Psalm 15:1-5,Proverbs 6:20-26\n\
3-Feb-2017,Genesis 35:1-36:8,Matthew 12:1-8,Psalm 16:1-4,Proverbs 6:27-35\n\
4-Feb-2017,Genesis 36:9-43,Matthew 12:9-21,Psalm 16:5-8,Proverbs 7:1-5\n\
5-Feb-2017,Genesis 37:1-36,Matthew 12:22-32,Psalm 16:9-11,Proverbs 7:6-23\n\
6-Feb-2017,Genesis 38:1-30,Matthew 12:33-45,Psalm 17:1-5,Proverbs 7:24-27\n\
7-Feb-2017,Genesis 39:1-23,Matthew 12:46-13:9,Psalm 17:6-15,Proverbs 8:1-11\n\
8-Feb-2017,Genesis 40:1-41:16,Matthew 13:10-23,Psalm 18:1-3,Proverbs 8:12-13\n\
9-Feb-2017,Genesis 41:17-52,Matthew 13:24-33,Psalm 18:4-15,Proverbs 8:14-26\n\
10-Feb-2017,Genesis 41:53-42:17,Matthew 13:34-46,Psalm 18:16-24,Proverbs 8:27-32\n\
11-Feb-2017,Genesis 42:18-38,Matthew 13:47-58,Psalm 18:25-36,Proverbs 8:33-36\n\
12-Feb-2017,Genesis 43:1-34,Matthew 14:1-12,Psalm 18:37-45,Proverbs 9:1-6\n\
13-Feb-2017,Genesis 44:1-45:15,Matthew 14:13-21,Psalm 18:46-50,Proverbs 9:7-8\n\
14-Feb-2017,Genesis 45:16-46:7,Matthew 14:22-36,Psalm 19:1-6,Proverbs 9:9-10\n\
15-Feb-2017,Genesis 46:8-47:12,Matthew 15:1-14,Psalm 19:7-14,Proverbs 9:11-12\n\
16-Feb-2017,Genesis 47:13-31,Matthew 15:15-28,Psalm 20:1-6,Proverbs 9:13-18\n\
17-Feb-2017,Genesis 48:1-22,Matthew 15:29-39,Psalm 20:7-9,Proverbs 10:1-2\n\
18-Feb-2017,Genesis 49:1-33,Matthew 16:1-12,Psalm 21:1-7,Proverbs 10:3-4\n\
19-Feb-2017,Genesis 50:1-26,Matthew 16:13-20,Psalm 21:8-13,Proverbs 10:5\n\
20-Feb-2017,Exodus 1:1-2:10,Matthew 16:21-17:9,Psalm 22:1-18,Proverbs 10:6-7\n\
21-Feb-2017,Exodus 2:11-22,Matthew 17:10-21,Psalm 22:19-24,Proverbs 10:8-9\n\
22-Feb-2017,Exodus 2:23-3:22,Matthew 17:22-27,Psalm 22:25-26,Proverbs 10:10\n\
23-Feb-2017,Exodus 4:1-26,Matthew 18:1-14,Psalm 22:27-31,Proverbs 10:11-12\n\
24-Feb-2017,Exodus 4:27-5:21,Matthew 18:15-22,Psalm 23:1-6,Proverbs 10:13-14\n\
25-Feb-2017,Exodus 5:22-6:30,Matthew 18:23-35,Psalm 24:1-2,Proverbs 10:15-16\n\
26-Feb-2017,Exodus 7:1-25,Matthew 19:1-12,Psalm 24:3-6,Proverbs 10:17\n\
27-Feb-2017,Exodus 8:1-32,Matthew 19:13-15,Psalm 24:7-10,Proverbs 10:18\n\
28-Feb-2017,Exodus 9:1-35,Matthew 19:16-30,Psalm 25:1-7,Proverbs 10:19\n\
1-Mar-2017,Exodus 10:1-29,Matthew 20:1-16,Psalm 25:8-15,Proverbs 10:20-21\n\
2-Mar-2017,Exodus 11:1-12:13,Matthew 20:17-28,Psalm 25:16-22,Proverbs 10:22\n\
3-Mar-2017,Exodus 12:14-39,Matthew 20:29-21:11,Psalm 26:1-8,Proverbs 10:23\n\
4-Mar-2017,Exodus 12:40-13:16,Matthew 21:12-22,Psalm 26:9-12,Proverbs 10:24-25\n\
5-Mar-2017,Exodus 13:17-14:31,Matthew 21:23-32,Psalm 27:1,Proverbs 10:26\n\
6-Mar-2017,Exodus 15:1-18,Matthew 21:33-46,Psalm 27:2-3,Proverbs 10:27-28\n\
7-Mar-2017,Exodus 15:19-16:18,Matthew 22:1-22,Psalm 27:4-6,Proverbs 10:29-30\n\
8-Mar-2017,Exodus 16:19-17:16,Matthew 22:23-33,Psalm 27:7-10,Proverbs 10:31-32\n\
9-Mar-2017,Exodus 18:1-12,Matthew 22:34-46,Psalm 27:11-14,Proverbs 11:1-3\n\
10-Mar-2017,Exodus 18:13-19:15,Matthew 23:1-12,Psalm 28:1-5,Proverbs 11:4\n\
11-Mar-2017,Exodus 19:16-20:26,Matthew 23:13-26,Psalm 28:6-9,Proverbs 11:5-6\n\
12-Mar-2017,Exodus 21:1-21,Matthew 23:27-39,Psalm 29:1-2,Proverbs 11:7\n\
13-Mar-2017,Exodus 21:22-22:13,Matthew 24:1-14,Psalm 29:3-11,Proverbs 11:8\n\
14-Mar-2017,Exodus 22:14-23:13,Matthew 24:15-28,Psalm 30:1-3,Proverbs 11:9-11\n\
15-Mar-2017,Exodus 23:14-24:2,Matthew 24:29-36,Psalm 30:4-12,Proverbs 11:12-13\n\
16-Mar-2017,Exodus 24:3-25:30,Matthew 24:37-51,Psalm 31:1-2,Proverbs 11:14\n\
17-Mar-2017,Exodus 25:31-26:29,Matthew 25:1-13,Psalm 31:3-8,Proverbs 11:15\n\
18-Mar-2017,Exodus 26:30-27:21,Matthew 25:14-30,Psalm 31:9-18,Proverbs 11:16-17\n\
19-Mar-2017,Exodus 28:1-14,Matthew 25:31-46,Psalm 31:19-20,Proverbs 11:18-19\n\
20-Mar-2017,Exodus 28:15-43,Matthew 26:1-13,Psalm 31:21-22,Proverbs 11:20-21\n\
21-Mar-2017,Exodus 29:1-28,Matthew 26:14-25,Psalm 31:23-24,Proverbs 11:22\n\
22-Mar-2017,Exodus 29:29-30:10,Matthew 26:26-46,Psalm 32:1-7,Proverbs 11:23\n\
23-Mar-2017,Exodus 30:11-38,Matthew 26:47-56,Psalm 32:8-11,Proverbs 11:24-26\n\
24-Mar-2017,Exodus 31:1-18,Matthew 26:57-68,Psalm 33:1-5,Proverbs 11:27\n\
25-Mar-2017,Exodus 32:1-30,Matthew 26:69-75,Psalm 33:6-11,Proverbs 11:28\n\
26-Mar-2017,Exodus 32:31-33:23,Matthew 27:1-14,Psalm 33:12-19,Proverbs 11:29-31\n\
27-Mar-2017,Exodus 34:1-14,Matthew 27:15-26,Psalm 33:20-22,Proverbs 12:1\n\
28-Mar-2017,Exodus 34:15-35:9,Matthew 27:27-31,Psalm 34:1-3,Proverbs 12:2-3\n\
29-Mar-2017,Exodus 35:10-36:7,Matthew 27:32-53,Psalm 34:4-10,Proverbs 12:4\n\
30-Mar-2017,Exodus 36:8-38,Matthew 27:54-66,Psalm 34:11-14,Proverbs 12:5-7\n\
31-Mar-2017,Exodus 37:1-38:8,Matthew 28:1-10,Psalm 34:15-22,Proverbs 12:8-9\n\
1-Apr-2017,Exodus 38:9-31,Matthew 28:11-20,Psalm 35:1-9,Proverbs 12:10\n\
2-Apr-2017,Exodus 39:1-43,Mark 1:1-15,Psalm 35:10-18,Proverbs 12:11\n\
3-Apr-2017,Exodus 40:1-38,Mark 1:16-28,Psalm 35:19-28,Proverbs 12:12-14\n\
4-Apr-2017,Leviticus 1:1-17,Mark 1:29-45,Psalm 36:1-5,Proverbs 12:15-17\n\
5-Apr-2017,Leviticus 2:1-3:17,Mark 2:1-12,Psalm 36:6-9,Proverbs 12:18\n\
6-Apr-2017,Leviticus 4:1-26,Mark 2:13-22,Psalm 36:10-12,Proverbs 12:19-20\n\
7-Apr-2017,Leviticus 4:27-5:19,Mark 2:23-3:6,Psalm 37:1-6,Proverbs 12:21-23\n\
8-Apr-2017,Leviticus 6:1-23,Mark 3:7-19,Psalm 37:7-11,Proverbs 12:24\n\
9-Apr-2017,Leviticus 6:24-7:27,Mark 3:20-30,Psalm 37:12-20,Proverbs 12:25\n\
10-Apr-2017,Leviticus 7:28-8:17,Mark 3:31-4:9,Psalm 37:21-29,Proverbs 12:26\n\
11-Apr-2017,Leviticus 8:18-9:6,Mark 4:10-25,Psalm 37:30-33,Proverbs 12:27-28\n\
12-Apr-2017,Leviticus 9:7-24,Mark 4:26-41,Psalm 37:34-40,Proverbs 13:1\n\
13-Apr-2017,Leviticus 10:1-20,Mark 5:1-20,Psalm 38:1-18,Proverbs 13:2-3\n\
14-Apr-2017,Leviticus 11:1-47,Mark 5:21-34,Psalm 38:19-22,Proverbs 13:4\n\
15-Apr-2017,Leviticus 12:1-8,Mark 5:35-43,Psalm 39:1-5,Proverbs 13:5-6\n\
16-Apr-2017,Leviticus 13:1-23,Mark 6:1-15,Psalm 39:6-13,Proverbs 13:7-8\n\
17-Apr-2017,Leviticus 13:24-59,Mark 6:16-29,Psalm 40:1-3,Proverbs 13:9-10\n\
18-Apr-2017,Leviticus 14:1-32,Mark 6:30-44,Psalm 40:4-10,Proverbs 13:11\n\
19-Apr-2017,Leviticus 14:33-57,Mark 6:45-56,Psalm 40:11-13,Proverbs 13:12-14\n\
20-Apr-2017,Leviticus 15:1-33,Mark 7:1-8,Psalm 40:14-17,Proverbs 13:15-16\n\
21-Apr-2017,Leviticus 16:1-28,Mark 7:9-23,Psalm 41:1-3,Proverbs 13:17-19\n\
22-Apr-2017,Leviticus 16:29-17:16,Mark 7:24-8:10,Psalm 41:4-13,Proverbs 13:20-23\n\
23-Apr-2017,Leviticus 18:1-30,Mark 8:11-26,Psalm 42:1-8,Proverbs 13:24-25\n\
24-Apr-2017,Leviticus 19:1-34,Mark 8:27-38,Psalm 42:9-11,Proverbs 14:1-2\n\
25-Apr-2017,Leviticus 19:35-20:21,Mark 9:1-13,Psalm 43:1-4,Proverbs 14:3-4\n\
26-Apr-2017,Leviticus 20:22-21:24,Mark 9:14-29,Psalm 43:5,Proverbs 14:5-6\n\
27-Apr-2017,Leviticus 22:1-16,Mark 9:30-37,Psalm 44:1-3,Proverbs 14:7-8\n\
28-Apr-2017,Leviticus 22:17-23:21,Mark 9:38-50,Psalm 44:4-8,Proverbs 14:9-10\n\
29-Apr-2017,Leviticus 23:22-44,Mark 10:1-12,Psalm 44:9-22,Proverbs 14:11-12\n\
30-Apr-2017,Leviticus 24:1-25:13,Mark 10:13-16,Psalm 44:23-26,Proverbs 14:13-14\n\
1-May-2017,Leviticus 25:14-46,Mark 10:17-31,Psalm 45:1-6,Proverbs 14:15-16\n\
2-May-2017,Leviticus 25:47-26:13,Mark 10:32-45,Psalm 45:7-17,Proverbs 14:17-19\n\
3-May-2017,Leviticus 26:14-46,Mark 10:46-52,Psalm 46:1-7,Proverbs 14:20-21\n\
4-May-2017,Leviticus 27:1-34,Mark 11:1-11,Psalm 46:8-11,Proverbs 14:22-24\n\
5-May-2017,Numbers 1:1-54,Mark 11:12-25,Psalm 47:1-7,Proverbs 14:25\n\
6-May-2017,Numbers 2:1-3:10,Mark 11:27-33,Psalm 47:8-9,Proverbs 14:26-27\n\
7-May-2017,Numbers 3:11-51,Mark 12:1-17,Psalm 48:1-8,Proverbs 14:28-29\n\
8-May-2017,Numbers 4:1-49,Mark 12:18-34,Psalm 48:9-14,Proverbs 14:30-31\n\
9-May-2017,Numbers 5:1-31,Mark 12:35-37,Psalm 49:1-9,Proverbs 14:32-33\n\
10-May-2017,Numbers 6:1-7:9,Mark 12:38-44,Psalm 49:10-20,Proverbs 14:34-35\n\
11-May-2017,Numbers 7:10-89,Mark 13:1-13,Psalm 50:1-6,Proverbs 15:1-3\n\
12-May-2017,Numbers 8:1-9:3,Mark 13:14-27,Psalm 50:7-23,Proverbs 15:4\n\
13-May-2017,Numbers 9:4-23,Mark 13:28-37,Psalm 51:1-9,Proverbs 15:5-7\n\
14-May-2017,Numbers 10:1-36,Mark 14:1-11,Psalm 51:10-19,Proverbs 15:8-10\n\
15-May-2017,Numbers 11:1-23,Mark 14:12-21,Psalm 52:1-7,Proverbs 15:11\n\
16-May-2017,Numbers 11:24-12:16,Mark 14:22-31,Psalm 52:8-9,Proverbs 15:12-14\n\
17-May-2017,Numbers 13:1-33,Mark 14:32-52,Psalm 53:1-5,Proverbs 15:15-17\n\
18-May-2017,Numbers 14:1-25,Mark 14:53-65,Psalm 53:6,Proverbs 15:18-19\n\
19-May-2017,Numbers 14:26-15:16,Mark 14:66-72,Psalm 54:1-4,Proverbs 15:20-21\n\
20-May-2017,Numbers 15:17-41,Mark 15:1-24,Psalm 54:5-7,Proverbs 15:22-23\n\
21-May-2017,Numbers 16:1-40,Mark 15:25-32,Psalm 55:1-11,Proverbs 15:24-26\n\
22-May-2017,Numbers 16:41-18:7,Mark 15:33-47,Psalm 55:12-23,Proverbs 15:27-28\n\
23-May-2017,Numbers 18:8-32,Mark 16:1-8,Psalm 56:1-9,Proverbs 15:29-30\n\
24-May-2017,Numbers 19:1-22,Mark 16:9-20,Psalm 56:10-13,Proverbs 15:31-32\n\
25-May-2017,Numbers 20:1-29,Luke 1:1-7,Psalm 57:1-3,Proverbs 15:33\n\
26-May-2017,Numbers 21:1-30,Luke 1:8-25,Psalm 57:4-11,Proverbs 16:1-3\n\
27-May-2017,Numbers 21:31-22:20,Luke 1:26-38,Psalm 58:1-9,Proverbs 16:4-5\n\
28-May-2017,Numbers 22:21-41,Luke 1:39-56,Psalm 58:10-11,Proverbs 16:6-7\n\
29-May-2017,Numbers 23:1-30,Luke 1:57-66,Psalm 59:1-13,Proverbs 16:8-9\n\
30-May-2017,Numbers 24:1-25,Luke 1:67-80,Psalm 59:14-17,Proverbs 16:10-11\n\
31-May-2017,Numbers 25:1-18,Luke 2:1-20,Psalm 60:1-5,Proverbs 16:12-13\n\
1-Jun-2017,Numbers 26:1-37,Luke 2:21-35,Psalm 60:6-12,Proverbs 16:14-15\n\
2-Jun-2017,Numbers 26:38-51,Luke 2:36-40,Psalm 61:1-3,Proverbs 16:16-17\n\
3-Jun-2017,Numbers 26:52-27:11,Luke 2:41-52,Psalm 61:4-8,Proverbs 16:18\n\
4-Jun-2017,Numbers 27:12-28:15,Luke 3:1-14,Psalm 62:1-8,Proverbs 16:19-20\n\
5-Jun-2017,Numbers 28:16-29:11,Luke 3:15-22,Psalm 62:9-12,Proverbs 16:21-23\n\
6-Jun-2017,Numbers 29:12-40,Luke 3:23-28,Psalm 63:1-5,Proverbs 16:24\n\
7-Jun-2017,Numbers 30:1-31:24,Luke 3:29-4:13,Psalm 63:6-11,Proverbs 16:25\n\
8-Jun-2017,Numbers 31:25-54,Luke 4:14-30,Psalm 64:1-9,Proverbs 16:26-27\n\
9-Jun-2017,Numbers 32:1-42,Luke 4:31-44,Psalm 64:10,Proverbs 16:28-30\n\
10-Jun-2017,Numbers 33:1-39,Luke 5:1-11,Psalm 65:1-4,Proverbs 16:31-33\n\
11-Jun-2017,Numbers 33:40-34:29,Luke 5:12-16,Psalm 65:5-13,Proverbs 17:1\n\
12-Jun-2017,Numbers 35:1-34,Luke 5:17-28,Psalm 66:1-7,Proverbs 17:2-3\n\
13-Jun-2017,Numbers 36:1-13,Luke 5:29-39,Psalm 66:8-20,Proverbs 17:4-5\n\
14-Jun-2017,Deuteronomy 1:1-46,Luke 6:1-11,Psalm 67:1-3,Proverbs 17:6\n\
15-Jun-2017,Deuteronomy 2:1-37,Luke 6:12-19,Psalm 67:4-7,Proverbs 17:7-8\n\
16-Jun-2017,Deuteronomy 3:1-29,Luke 6:20-38,Psalm 68:1-6,Proverbs 17:9-11\n\
17-Jun-2017,Deuteronomy 4:1-20,Luke 6:39-49,Psalm 68:7-18,Proverbs 17:12-13\n\
18-Jun-2017,Deuteronomy 4:21-49,Luke 7:1-10,Psalm 68:19-31,Proverbs 17:14-15\n\
19-Jun-2017,Deuteronomy 5:1-31,Luke 7:11-23,Psalm 68:32-35,Proverbs 17:16\n\
20-Jun-2017,Deuteronomy 5:32-6:25,Luke 7:24-35,Psalm 69:1-13,Proverbs 17:17-18\n\
21-Jun-2017,Deuteronomy 7:1-26,Luke 7:36-50,Psalm 69:14-18,Proverbs 17:19-21\n\
22-Jun-2017,Deuteronomy 8:1-20,Luke 8:1-3,Psalm 69:19-31,Proverbs 17:22\n\
23-Jun-2017,Deuteronomy 9:1-10:5,Luke 8:4-15,Psalm 69:32-36,Proverbs 17:23\n\
24-Jun-2017,Deuteronomy 10:6-22,Luke 8:16-21,Psalm 70:1-5,Proverbs 17:24-25\n\
25-Jun-2017,Deuteronomy 11:1-32,Luke 8:22-25,Psalm 71:1-6,Proverbs 17:26\n\
26-Jun-2017,Deuteronomy 12:1-32,Luke 8:26-39,Psalm 71:7-16,Proverbs 17:27-28\n\
27-Jun-2017,Deuteronomy 13:1-14:27,Luke 8:40-56,Psalm 71:17-24,Proverbs 18:1\n\
28-Jun-2017,Deuteronomy 14:28-15:23,Luke 9:1-6,Psalm 72:1-14,Proverbs 18:2-3\n\
29-Jun-2017,Deuteronomy 16:1-22,Luke 9:7-17,Psalm 72:15-20,Proverbs 18:4-5\n\
30-Jun-2017,Deuteronomy 17:1-20,Luke 9:18-27,Psalm 73:1-20,Proverbs 18:6-7\n\
1-Jul-2017,Deuteronomy 18:1-19:14,Luke 9:28-36,Psalm 73:21-28,Proverbs 18:8\n\
2-Jul-2017,Deuteronomy 19:15-20:20,Luke 9:37-50,Psalm 74:1-11,Proverbs 18:9-10\n\
3-Jul-2017,Deuteronomy 21:1-23,Luke 9:51-62,Psalm 74:12-23,Proverbs 18:11-12\n\
4-Jul-2017,Deuteronomy 22:1-30,Luke 10:1-12,Psalm 75:1-5,Proverbs 18:13\n\
5-Jul-2017,Deuteronomy 23:1-24:13,Luke 10:13-24,Psalm 75:6-10,Proverbs 18:14-15\n\
6-Jul-2017,Deuteronomy 24:14-25:19,Luke 10:25-37,Psalm 76:1-7,Proverbs 18:16-18\n\
7-Jul-2017,Deuteronomy 26:1-19,Luke 10:38-42,Psalm 76:8-12,Proverbs 18:19\n\
8-Jul-2017,Deuteronomy 27:1-26,Luke 11:1-13,Psalm 77:1-14,Proverbs 18:20-21\n\
9-Jul-2017,Deuteronomy 28:1-44,Luke 11:14-22,Psalm 77:15-20,Proverbs 18:22\n\
10-Jul-2017,Deuteronomy 28:45-68,Luke 11:23-36,Psalm 78:1-22,Proverbs 18:23-24\n\
11-Jul-2017,Deuteronomy 29:1-29,Luke 11:37-54,Psalm 78:23-31,Proverbs 19:1-3\n\
12-Jul-2017,Deuteronomy 30:1-20,Luke 12:1-7,Psalm 78:32-39,Proverbs 19:4-5\n\
13-Jul-2017,Deuteronomy 31:1-29,Luke 12:8-12,Psalm 78:40-55,Proverbs 19:6-7\n\
14-Jul-2017,Deuteronomy 31:30-32:27,Luke 12:13-34,Psalm 78:56-59,Proverbs 19:8-9\n\
15-Jul-2017,Deuteronomy 32:28-52,Luke 12:35-48,Psalm 78:60-64,Proverbs 19:10-12\n\
16-Jul-2017,Deuteronomy 33:1-17,Luke 12:49-59,Psalm 78:65-69,Proverbs 19:13-14\n\
17-Jul-2017,Deuteronomy 33:18-29,Luke 13:1-9,Psalm 78:70-72,Proverbs 19:15-16\n\
18-Jul-2017,Deuteronomy 34:1-12,Luke 13:10-21,Psalm 79:1-8,Proverbs 19:17\n\
19-Jul-2017,Joshua 1:1-2:24,Luke 13:22-35,Psalm 79:9-13,Proverbs 19:18-19\n\
20-Jul-2017,Joshua 3:1-17,Luke 14:1-6,Psalm 80:1-13,Proverbs 19:20-21\n\
21-Jul-2017,Joshua 4:1-24,Luke 14:7-24,Psalm 80:14-19,Proverbs 19:22-23\n\
22-Jul-2017,Joshua 5:1-15,Luke 14:25-35,Psalm 81:1-7,Proverbs 19:24-25\n\
23-Jul-2017,Joshua 6:1-27,Luke 15:1-10,Psalm 81:8-16,Proverbs 19:26\n\
24-Jul-2017,Joshua 7:1-26,Luke 15:11-32,Psalm 82:1-5,Proverbs 19:27-29\n\
25-Jul-2017,Joshua 8:1-9:2,Luke 16:1-9,Psalm 82:6-8,Proverbs 20:1\n\
26-Jul-2017,Joshua 9:3-10:11,Luke 16:10-18,Psalm 83:1-8,Proverbs 20:2-3\n\
27-Jul-2017,Joshua 10:12-43,Luke 16:19-31,Psalm 83:9-18,Proverbs 20:4-6\n\
28-Jul-2017,Joshua 11:1-23,Luke 17:1-10,Psalm 84:1-4,Proverbs 20:7\n\
29-Jul-2017,Joshua 12:1-24,Luke 17:11-25,Psalm 84:5-12,Proverbs 20:8-10\n\
30-Jul-2017,Joshua 13:1-33,Luke 17:26-37,Psalm 85:1-7,Proverbs 20:11\n\
31-Jul-2017,Joshua 14:1-15,Luke 18:1-8,Psalm 85:8-13,Proverbs 20:12\n\
1-Aug-2017,Joshua 15:1-12,Luke 18:9-17,Psalm 86:1-7,Proverbs 20:13-15\n\
2-Aug-2017,Joshua 15:13-63,Luke 18:18-30,Psalm 86:8-17,Proverbs 20:16-18\n\
3-Aug-2017,Joshua 16:1-17:18,Luke 18:31-43,Psalm 87:1-3,Proverbs 20:19\n\
4-Aug-2017,Joshua 18:1-28,Luke 19:1-10,Psalm 87:4-7,Proverbs 20:20-21\n\
5-Aug-2017,Joshua 19:1-31,Luke 19:11-27,Psalm 88:1-12,Proverbs 20:22-23\n\
6-Aug-2017,Joshua 19:32-20:9,Luke 19:28-40,Psalm 88:13-18,Proverbs 20:24-25\n\
7-Aug-2017,Joshua 21:1-42,Luke 19:41-48,Psalm 89:1-6,Proverbs 20:26-27\n\
8-Aug-2017,Joshua 21:43-22:20,Luke 20:1-8,Psalm 89:7-13,Proverbs 20:28-30\n\
9-Aug-2017,Joshua 22:21-34,Luke 20:9-26,Psalm 89:14-18,Proverbs 21:1-2\n\
10-Aug-2017,Joshua 23:1-16,Luke 20:27-40,Psalm 89:19-37,Proverbs 21:3\n\
11-Aug-2017,Joshua 24:1-28,Luke 20:41-47,Psalm 89:38-45,Proverbs 21:4\n\
12-Aug-2017,Joshua 24:29-33,Luke 21:1-4,Psalm 89:46-52,Proverbs 21:5-7\n\
13-Aug-2017,Judges 1:1-36,Luke 21:5:28,Psalm 90:1-17,Proverbs 21:8-10\n\
14-Aug-2017,Judges 2:1-9,Luke 21:29-36,Psalm 91:1-16,Proverbs 21:11-12\n\
15-Aug-2017,Judges 2:10-23,Luke 21:37-22:13,Psalm 92:1-15,Proverbs 21:13\n\
16-Aug-2017,Judges 3:1-31,Luke 22:14-23,Psalm 93:1-5,Proverbs 21:14-16\n\
17-Aug-2017,Judges 4:1-24,Luke 22:24-34,Psalm 94:1-13,Proverbs 21:17-18\n\
18-Aug-2017,Judges 5:1-31,Luke 22:35-38,Psalm 94:14-23,Proverbs 21:19-20\n\
19-Aug-2017,Judges 6:1-32,Luke 22:39-53,Psalm 95:1-11,Proverbs 21:21-22\n\
20-Aug-2017,Judges 6:33-40,Luke 22:54-71,Psalm 96:1-13,Proverbs 21:23-24\n\
21-Aug-2017,Judges 7:1-25,Luke 23:1-12,Psalm 97:1-12,Proverbs 21:25-26\n\
22-Aug-2017,Judges 8:1-17,Luke 23:13-25,Psalm 98:1-9,Proverbs 21:27\n\
23-Aug-2017,Judges 8:18-32,Luke 23:26-43,Psalm 99:1-4,Proverbs 21:28-29\n\
24-Aug-2017,Judges 8:33-9:21,Luke 23:44-56,Psalm 99:5-9,Proverbs 21:30-31\n\
25-Aug-2017,Judges 9:22-57,Luke 24:1-12,Psalm 100:1-2,Proverbs 22:1\n\
26-Aug-2017,Judges 10:1-18,Luke 24:13-34,Psalm 100:3-5,Proverbs 22:2-4\n\
27-Aug-2017,Judges 11:1-28,Luke 24:35-53,Psalm 101:1-3,Proverbs 22:5-6\n\
28-Aug-2017,Judges 11:29-12:15,John 1:1-18,Psalm 101:4-8,Proverbs 22:7\n\
29-Aug-2017,Judges 13:1-25,John 1:19-28,Psalm 102:1-17,Proverbs 22:8-9\n\
30-Aug-2017,Judges 14:1-20,John 1:29-42,Psalm 102:18-22,Proverbs 22:10-12\n\
31-Aug-2017,Judges 15:1-16:9,John 1:43-51,Psalm 102:23-28,Proverbs 22:13\n\
1-Sep-2017,Judges 16:10-31,John 2:1-11,Psalm 103:1-12,Proverbs 22:14\n\
2-Sep-2017,Judges 17:1-18:21,John 2:12-25,Psalm 103:13-22,Proverbs 22:15\n\
3-Sep-2017,Judges 18:22-31,John 3:1-15,Psalm 104:1-7,Proverbs 22:16\n\
4-Sep-2017,Judges 19:1-30,John 3:16-21,Psalm 104:8-23,Proverbs 22:17-19\n\
5-Sep-2017,Judges 20:1-48,John 3:22-30,Psalm 104:24-30,Proverbs 22:20-21\n\
6-Sep-2017,Judges 21:1-25,John 3:31-4:3,Psalm 104:31-35,Proverbs 22:22-23\n\
7-Sep-2017,Ruth 1:1-22,John 4:4-30,Psalm 105:1-7,Proverbs 22:24-25\n\
8-Sep-2017,Ruth 2:1-3:6,John 4:31-42,Psalm 105:8-15,Proverbs 22:26-27\n\
9-Sep-2017,Ruth 3:7-4:22,John 4:43-45,Psalm 105:16-26,Proverbs 22:28-29\n\
10-Sep-2017,1 Samuel 1:1-23,John 4:46-54,Psalm 105:27-36,Proverbs 23:1-3\n\
11-Sep-2017,1 Samuel 1:24-2:21,John 5:1-18,Psalm 105:37-45,Proverbs 23:4-5\n\
12-Sep-2017,1 Samuel 2:22-3:18,John 5:19-23,Psalm 106:1-2,Proverbs 23:6-8\n\
13-Sep-2017,1 Samuel 3:19-4:22,John 5:24-38,Psalm 106:3-5,Proverbs23:9-11\n\
14-Sep-2017,1 Samuel 5:1-6:12,John 5:39-47,Psalm 106:6-12,Proverbs 23:12\n\
15-Sep-2017,1 Samuel 6:13-7:17,John 6:1-15,Psalm 106:13-23,Proverbs 23:13-14\n\
16-Sep-2017,1 Samuel 8:1-22,John 6:16-21,Psalm 106:24-31,Proverbs 23:15-16\n\
17-Sep-2017,1 Samuel 9:1-27,John 6:22-29,Psalm 106:32-46,Proverbs 23:17-18\n\
18-Sep-2017,1 Samuel 10:1-27,John 6:30-42,Psalm 106:47-48,Proverbs 23:19-21\n\
19-Sep-2017,1 Samuel 11:1-15,John 6:43-52,Psalm 107:1-3,Proverbs 23:22\n\
20-Sep-2017,1 Samuel 12:1-25,John 6:53-71,Psalm 107:4-32,Proverbs 23:23\n\
21-Sep-2017,1 Samuel 13:1-23,John 7:1-13,Psalm 107:33-43,Proverbs 23:24\n\
22-Sep-2017,1 Samuel 14:1-23,John 7:14-30,Psalm 108:1-4,Proverbs 23:25-28\n\
23-Sep-2017,1 Samuel 14:24-52,John 7:31-36,Psalm 108:5-13,Proverbs 23:29-35\n\
24-Sep-2017,1 Samuel 15:1-35,John 7:37-53,Psalm 109:1-21a,Proverbs 24:1-2\n\
25-Sep-2017,1 Samuel 16:1-23,John 8:1-11,Psalm 109:21b-31,Proverbs 24:3-4\n\
26-Sep-2017,1 Samuel 17:1-40,John 8:12-20,Psalm 110:1-3,Proverbs 24:5-6\n\
27-Sep-2017,1 Samuel 17:41-18:4,John 8:21-24,Psalm 110:4-7,Proverbs 24:7\n\
28-Sep-2017,1 Samuel 18:5-30,John 8:25-30,Psalm 111:1-4a,Proverbs 24:8\n\
29-Sep-2017,1 Samuel 19:1-24,John 8:31-36,Psalm 111:4b-10,Proverbs 24:9-10\n\
30-Sep-2017,1 Samuel 20:1-34,John 8:37-59,Psalm 112:1-3,Proverbs 24:11-12\n\
1-Oct-2017,1 Samuel 20:35-21:15,John 9:1-13,Psalm 112:4-10,Proverbs 24:13-14\n\
2-Oct-2017,1 Samuel 22:1-23,John 9:14-41,Psalm 113:1-9,Proverbs 24:15-16\n\
3-Oct-2017,1 Samuel 23:1-29,John 10:1-10,Psalm 114:1-8,Proverbs 24:17-20\n\
4-Oct-2017,1 Samuel 24:1-22,John 10:11-21,Psalm 115:1-10,Proverbs 24:21-22\n\
5-Oct-2017,1 Samuel 25:1-44,John 10:22-29,Psalm 115:11-18,Proverbs 24:23-25\n\
6-Oct-2017,1 Samuel 26:1-25,John 10:30-42,Psalm 116:1-5,Proverbs 24:26\n\
7-Oct-2017,1 Samuel 27:1-28:25,John 11:1-29,Psalm 116:6-14,Proverbs 24:27\n\
8-Oct-2017,1 Samuel 29:1-30:20,John 11:30-54,Psalm 116:15-117:2,Proverbs 24:28-29\n\
9-Oct-2017,1 Samuel 30:21-31:13,John 11:55-12:8,Psalm 118:1-7,Proverbs 24:30-34\n\
10-Oct-2017,2 Samuel 1:1-16,John 12:9-19,Psalm 118:8-18,Proverbs 25:1-5\n\
11-Oct-2017,2 Samuel 1:17-2:11,John 12:20-36,Psalm 118:19-26,Proverbs 25:6-8\n\
12-Oct-2017,2 Samuel 2:12-3:5,John 12:37-50,Psalm 118:27-29,Proverbs 25:9-10\n\
13-Oct-2017,2 Samuel 3:6-39,John 13:1-20,Psalm 119:1-8,Proverbs 25:11-14\n\
14-Oct-2017,2 Samuel 4:1-5:12,John 13:21-30,Psalm 119:9-16,Proverbs 25:15\n\
15-Oct-2017,2 Samuel 5:13-6:23,John 13:31-38,Psalm 119:17-24,Proverbs 25:16\n\
16-Oct-2017,2 Samuel 7:1-29,John 14:1-14,Psalm 119:25-32,Proverbs 25:17\n\
17-Oct-2017,2 Samuel 8:1-18,John 14:15-26,Psalm 119:33-40,Proverbs 25:18-19\n\
18-Oct-2017,2 Samuel 9:1-10:19,John 14:27-31,Psalm 119:41-48,Proverbs 25:20-22\n\
19-Oct-2017,2 Samuel 11:1-27,John 15:1-17,Psalm 119:49-58,Proverbs 25:23-24\n\
20-Oct-2017,2 Samuel 12:1-14,John 15:18-27,Psalm 119:59-64,Proverbs 25:25-27\n\
21-Oct-2017,2 Samuel 12:15-31,John 16:1-16,Psalm 119:65-72,Proverbs 25:28\n\
22-Oct-2017,2 Samuel 13:1-22,John 16:17-33,Psalm 119:73-80,Proverbs 26:1-2\n\
23-Oct-2017,2 Samuel 13:23-39,John 17:1-26,Psalm 119:81-88,Proverbs 26:3-5\n\
24-Oct-2017,2 Samuel 14:1-33,John 18:1-14,Psalm 119:89-96,Proverbs 26:6-8\n\
25-Oct-2017,2 Samuel 15:1-22,John 18:15-24,Psalm 119:97-104,Proverbs 26:9-12\n\
26-Oct-2017,2 Samuel 15:23-16:4,John 18:25-19:22,Psalm 119:105-112,Proverbs 26:13-16\n\
27-Oct-2017,2 Samuel 16:5-23,John 19:23-30,Psalm 119:113-120,Proverbs 26:17\n\
28-Oct-2017,2 Samuel 17:1-16,John 19:31-42,Psalm 119:121-128,Proverbs 26:18-19\n\
29-Oct-2017,2 Samuel 17:17-29,John 20:1-18,Psalm 119:129-136,Proverbs 26:20\n\
30-Oct-2017,2 Samuel 18:1-18,John 20:19-31,Psalm 119:137-152,Proverbs 26:21-22\n\
31-Oct-2017,2 Samuel 18:19-19:10,John 21:1-14,Psalm 119:153-159,Proverbs 26:23\n\
1-Nov-2017,2 Samuel 19:11-40,John 21:15-25,Psalm 119:160-168,Proverbs 26:24-26\n\
2-Nov-2017,2 Samuel 19:41-20:13,Acts 1:1-14,Psalm 119:169-176,Proverbs 26:27\n\
3-Nov-2017,2 Samuel 20:14-26,Acts 1:15-26,Psalm 120:1-7,Proverbs 26:28\n\
4-Nov-2017,2 Samuel 21:1-22,Acts 2:1-21,Psalm 121:1-4,Proverbs 27:1-2\n\
5-Nov-2017,2 Samuel 22:1-46,Acts 2:22-47,Psalm 121:5-8,Proverbs 27:3\n\
6-Nov-2017,2 Samuel 22:47-23:23,Acts 3:1-11,Psalm 122:1-5,Proverbs 27:4-6\n\
7-Nov-2017,2 Samuel 23:24-24:9,Acts 3:12-26,Psalm 122:6-9,Proverbs 27:7-9\n\
8-Nov-2017,2 Samuel 24:10-25,Acts 4:1-22,Psalm 123:1-2,Proverbs 27:10\n\
9-Nov-2017,1 Kings 1:1-37,Acts 4:23-37,Psalm 123:3-4,Proverbs 27:11\n\
10-Nov-2017,1 Kings 1:38-53,Acts 5:1-11,Psalm 124:1-6,Proverbs 27:12\n\
11-Nov-2017,1 Kings 2:1-25,Acts 5:12-42,Psalm 124:7-8,Proverbs 27:13\n\
12-Nov-2017,1 Kings 2:26-3:2,Acts 6:1-6,Psalm 125:1-3,Proverbs 27:14\n\
13-Nov-2017,1 Kings 3:3-28,Acts 6:7-15,Psalm 125:4-5,Proverbs 27:15-16\n\
14-Nov-2017,1 Kings 4:1-34,Acts 7:1-10,Psalm 126:1-3,Proverbs 27:17\n\
15-Nov-2017,1 Kings 5:1-6:13,Acts 7:11-29,Psalm 126:4-6,Proverbs 27:18-20\n\
16-Nov-2017,1 Kings 6:14-38,Acts 7:30-43,Psalm 127:1-2,Proverbs 27:21-22\n\
17-Nov-2017,1 Kings 7:1-26,Acts 7:44-50,Psalm 127:3-5,Proverbs 27:23-27\n\
18-Nov-2017,1 Kings 7:27-51,Acts 7:51-60,Psalm 128:1-4,Proverbs 28:1\n\
19-Nov-2017,1 Kings 8:1-21,Acts 8:1-13,Psalm 128:5-6,Proverbs 28:2\n\
20-Nov-2017,1 Kings 8:22-66,Acts 8:14-24,Psalm 129:1-4,Proverbs 28:3-5\n\
21-Nov-2017,1 Kings 9:1-28,Acts 8:25-40,Psalm 129:5-8,Proverbs 28:6-7\n\
22-Nov-2017,1 Kings 10:1-29,Acts 9:1-9,Psalm 130:1-5,Proverbs 28:8-10\n\
23-Nov-2017,1 Kings 11:1-28,Acts 9:10-25,Psalm 130:6-8,Proverbs 28:11\n\
24-Nov-2017,1 Kings 11:29-12:19,Acts 9:26-35,Psalm 131:1-132:9,Proverbs 28:12-13\n\
25-Nov-2017,1 Kings 12:20-13:6,Acts 9:36-43,Psalm 132:10-12,Proverbs 28:14\n\
26-Nov-2017,1 Kings 13:7-34,Acts 10:1-8,Psalm 132:13-18,Proverbs 28:15-16\n\
27-Nov-2017,1 Kings 14:1-31,Acts 10:9-23,Psalm 133:1-2,Proverbs 28:17-18\n\
28-Nov-2017,1 Kings 15:1-24,Acts 10:24-33,Psalm 133:3,Proverbs 28:19-20\n\
29-Nov-2017,1 Kings 15:25-16:28,Acts 10:34-48,Psalm 134:1-135:4,Proverbs 28:21-22\n\
30-Nov-2017,1 Kings 16:29-17:24,Acts 11:1-18,Psalm 135:5-12,Proverbs 28:23-24\n\
1-Dec-2017,1 Kings 18:1-19,Acts 11:19-30,Psalm 135:13-21,Proverbs 28:25-26\n\
2-Dec-2017,1 Kings 18:20-46,Acts 12:1-19,Psalm 136:1-12,Proverbs 28:27-28\n\
3-Dec-2017,1 Kings 19:1-14,Acts 12:20-23,Psalm 136:13-26,Proverbs 29:1\n\
4-Dec-2017,1 Kings 19:15-20:15,Acts 12:24-13:12,Psalm 137:1-4,Proverbs 29:2-4\n\
5-Dec-2017,1 Kings 20:16-43,Acts 13:13-15,Psalm 137:5-9,Proverbs 29:5-8\n\
6-Dec-2017,1 Kings 21:1-29,Acts 13:16-25,Psalm 138:1-6,Proverbs 29:9-11\n\
7-Dec-2017,1 Kings 22:1-28,Acts 13:26-37,Psalm 138:7-8,Proverbs 29:12-14\n\
8-Dec-2017,1 Kings 22:29-53,Acts 13:38-43,Psalm 139:1-12,Proverbs 29:15-17\n\
9-Dec-2017,2 Kings 1:1-18,Acts 13:44-14:7,Psalm 139:13-24,Proverbs 29:18\n\
10-Dec-2017,2 Kings 2:1-25,Acts 14:8-20,Psalm 140:1-8,Proverbs 29:19-20\n\
11-Dec-2017,2 Kings 3:1-27,Acts 14:21-28,Psalm 140:9-13,Proverbs 29:21-22\n\
12-Dec-2017,2 Kings 4:1-17,Acts 15:1-21,Psalm 141:1-2,Proverbs 29:23\n\
13-Dec-2017,2 Kings 4:18-44,Acts 15:22-35,Psalm 141:3-10,Proverbs 29:24-25\n\
14-Dec-2017,2 Kings 5:1-27,Acts 15:36-16:5,Psalm 142:1-3a,Proverbs 29:26-27\n\
15-Dec-2017,2 Kings 6:1-23,Acts 16:6-15,Psalm 142:3b-7,Proverbs 30:1-4\n\
16-Dec-2017,2 Kings 6:24-7:20,Acts 16:16-24,Psalm 143:1-6,Proverbs 30:5-6\n\
17-Dec-2017,2 Kings 8:1-19,Acts 16:25-40,Psalm 143:7-12,Proverbs 30:7-9\n\
18-Dec-2017,2 Kings 8:20-9:13,Acts 17:1-9,Psalm 144:1-8,Proverbs 30:10\n\
19-Dec-2017,2 Kings 9:14-37,Acts 17:10-15,Psalm 144:9-15,Proverbs 30:11-14\n\
20-Dec-2017,2 Kings 10:1-31,Acts 17:16-34,Psalm 145:1-7,Proverbs 30:15-16\n\
21-Dec-2017,2 Kings 10:32-11:20,Acts 18:1-11,Psalm 145:8-21,Proverbs 30:17\n\
22-Dec-2017,2 Kings 11:21-12:21,Acts 18:12-22,Psalm 146:1-2,Proverbs 30:18-20\n\
23-Dec-2017,2 Kings 13:1-25,Acts 18:23-28,Psalm 146:3-10,Proverbs 30:21-23\n\
24-Dec-2017,2 Kings 14:1-29,Acts 19:1-12,Psalm 147:1-11,Proverbs 30:24-28\n\
25-Dec-2017,2 Kings 15:1-31,Acts 19:13-22,Psalm 147:12-20,Proverbs 30:29-31\n\
26-Dec-2017,2 Kings 15:32-16:20,Acts 19:23-41,Psalm 148:1-4,Proverbs 30:32\n\
27-Dec-2017,2 Kings 17:1-28,Acts 20:1-15,Psalm 148:5-14,Proverbs 30:33\n\
28-Dec-2017,2 Kings 17:29-18:12,Acts 20:16-38,Psalm 149:1,Proverbs 31:1-7\n\
29-Dec-2017,2 Kings 18:13-19:4,Acts 21:1-6,Psalm 149:2-9,Proverbs 31:8-9\n\
30-Dec-2017,2 Kings 19:5-37,Acts 21:7-17,Psalm 150:1-5,Proverbs 31:10-24\n\
31-Dec-2017,2 Kings 20:1-21,Acts 21:18-26,Psalm 150:6,Proverbs 31:25-31\n\
1-Jan-2018,2 Kings 21:1-22:2,Acts 21:27-36,Psalm 1:1-5,Proverbs 1:1-6\n\
2-Jan-2018,2 Kings 22:3-23:7,Acts 21:37-40,Psalm 1:6,Proverbs 1:7-9\n\
3-Jan-2018,2 Kings 23:8-30,Acts 22:1-16,Psalm 2:1-6,Proverbs 1:10-19\n\
4-Jan-2018,2 Kings 23:31-25:7,Acts 22:17-30,Psalm 2:7-12,Proverbs 1:20-23\n\
5-Jan-2018,2 Kings 25:8-30,Acts 23:1-10,Psalm 3:1-5,Proverbs 1:24-28\n\
6-Jan-2018,1 Chronicles 1:1-33,Acts 23:11-15,Psalm 3:6-8,Proverbs 1:29-33\n\
7-Jan-2018,1 Chronicles 1:34-2:17,Acts 23:16-35,Psalm 4:1-3,Proverbs 2:1-5\n\
8-Jan-2018,1 Chronicles 2:18-55,Acts 24:1-23,Psalm 4:4-8,Proverbs 2:6-15\n\
9-Jan-2018,1 Chronicles 3:1-4:4,Acts 24:24-27,Psalm 5:1-6,Proverbs 2:16-22\n\
10-Jan-2018,1 Chronicles 4:5-37,Acts 25:1-13,Psalm 5:7-12,Proverbs 3:1-6\n\
11-Jan-2018,1 Chronicles 4:38-5:17,Acts 25:14-27,Psalm 6:1-5,Proverbs 3:7-8\n\
12-Jan-2018,1 Chronicles 5:18-6:30,Acts 26:1-8,Psalm 6:6-10,Proverbs 3:9-10\n\
13-Jan-2018,1 Chronicles 6:31-81,Acts 26:9-32,Psalm 7:1-9,Proverbs 3:11-12\n\
14-Jan-2018,1 Chronicles 7:1-40,Acts 27:1-6,Psalm 7:10-17,Proverbs 3:13-15\n\
15-Jan-2018,1 Chronicles 8:1-40,Acts 27:7-20,Psalm 8:1,Proverbs 3:16-18\n\
16-Jan-2018,1 Chronicles 9:1-16,Acts 27:21-32,Psalm 8:2-9,Proverbs 3:19-20\n\
17-Jan-2018,1 Chronicles 9:17-10:14,Acts 27:33-44,Psalm 9:1-8,Proverbs 3:21-26\n\
18-Jan-2018,1 Chronicles 11:1-25,Acts 28:1-16,Psalm 9:9-12,Proverbs 3:27-32\n\
19-Jan-2018,1 Chronicles 11:26-12:18,Acts 28:17-31,Psalm 9:13-18,Proverbs 3:33-35\n\
20-Jan-2018,1 Chronicles 12:19-40,Romans 1:1-9,Psalm 9:19-20,Proverbs 4:1-6\n\
21-Jan-2018,1 Chronicles 13:1-14:17,Romans 1:10-17,Psalm 10:1-6,Proverbs 4:7-10\n\
22-Jan-2018,1 Chronicles 15:1-29,Romans 1:18-20,Psalm 10:7-15,Proverbs 4:11-13\n\
23-Jan-2018,1 Chronicles 16:1-36,Romans 1:21-32,Psalm 10:16,Proverbs 4:14-19\n\
24-Jan-2018,1 Chronicles 16:37-17:15,Romans 2:1-11,Psalm 10:17-18,Proverbs 4:20-27\n\
25-Jan-2018,1 Chronicles 17:16-18:17,Romans 2:12-24,Psalm 11:1-6,Proverbs 5:1-6\n\
26-Jan-2018,1 Chronicles 19:1-20:8,Romans 2:25-29,Psalm 11:7,Proverbs 5:7-14\n\
27-Jan-2018,1 Chronicles 21:1-30,Romans 3:1-8,Psalm 12:1-5,Proverbs 5:15-21\n\
28-Jan-2018,1 Chronicles 22:1-19,Romans 3:9-22,Psalm 12:6-8,Proverbs 5:22-23\n\
29-Jan-2018,1 Chronicles 23:1-32,Romans 3:23-31,Psalm 13:1-4,Proverbs 6:1-5\n\
30-Jan-2018,1 Chronicles 24:1-31,Romans 4:1-10,Psalm 13:5-6,Proverbs 6:6-11\n\
31-Jan-2018,1 Chronicles 25:1-26:11,Romans 4:11-12,Psalm 14:1-6,Proverbs 6:12-15\n\
1-Feb-2018,1 Chronicles 26:12-32,Romans 4:13-17,Psalm 14:7,Proverbs 6:16-19\n\
2-Feb-2018,1 Chronicles 27:1-34,Romans 4:18-5:5,Psalm 15:1-5,Proverbs 6:20-26\n\
3-Feb-2018,1 Chronicles 28:1-21,Romans 5:6-11,Psalm 16:1-4,Proverbs 6:27-35\n\
4-Feb-2018,1 Chronicles 29:1-30,Romans 5:12-21,Psalm 16:5-8,Proverbs 7:1-5\n\
5-Feb-2018,2 Chronicles 1:1-2:10,Romans 6:1-14,Psalm 16:9-11,Proverbs 7:6-23\n\
6-Feb-2018,2 Chronicles 2:11-3:17,Romans 6:15-23,Psalm 17:1-5,Proverbs 7:24-27\n\
7-Feb-2018,2 Chronicles 4:1-22,Romans 7:1-4,Psalm 17:6-15,Proverbs 8:1-11\n\
8-Feb-2018,2 Chronicles 5:1-6:11,Romans 7:5-13,Psalm 18:1-3,Proverbs 8:12-13\n\
9-Feb-2018,2 Chronicles 6:12-42,Romans 7:14-25,Psalm 18:4-15,Proverbs 8:14-26\n\
10-Feb-2018,2 Chronicles 7:1-8:10,Romans 8:1-8,Psalm 18:16-24,Proverbs 8:27-32\n\
11-Feb-2018,2 Chronicles 8:11-9:12,Romans 8:9-11,Psalm 18:25-36,Proverbs 8:33-36\n\
12-Feb-2018,2 Chronicles 9:13-10:19,Romans 8:12-25,Psalm 18:37-45,Proverbs 9:1-6\n\
13-Feb-2018,2 Chronicles 11:1-12:16,Romans 8:26-34,Psalm 18:46-50,Proverbs 9:7-8\n\
14-Feb-2018,2 Chronicles 13:1-22,Romans 8:35-39,Psalm 19:1-6,Proverbs 9:9-10\n\
15-Feb-2018,2 Chronicles 14:1-15:8,Romans 9:1-10a,Psalm 19:7-14,Proverbs 9:11-12\n\
16-Feb-2018,2 Chronicles 15:9-16:14,Romans 9:10b-24,Psalm 20:1-6,Proverbs 9:13-18\n\
17-Feb-2018,2 Chronicles 17:1-19,Romans 9:25-33,Psalm 20:7-9,Proverbs 10:1-2\n\
18-Feb-2018,2 Chronicles 18:1-34,Romans 10:1-13,Psalm 21:1-7,Proverbs 10:3-4\n\
19-Feb-2018,2 Chronicles 19:1-11,Romans 10:14-21,Psalm 21:8-13,Proverbs 10:5\n\
20-Feb-2018,2 Chronicles 20:1-37,Romans 11:1-12,Psalm 22:1-18,Proverbs 10:6-7\n\
21-Feb-2018,2 Chronicles 21:1-20,Romans 11:13-21,Psalm 22:19-24,Proverbs 10:8-9\n\
22-Feb-2018,2 Chronicles 22:1-23:21,Romans 11:22-36,Psalm 22:25-26,Proverbs 10:10\n\
23-Feb-2018,2 Chronicles 24:1-27,Romans 12:1-8,Psalm 22:27-31,Proverbs 10:11-12\n\
24-Feb-2018,2 Chronicles 25:1-28,Romans 12:9-21,Psalm 23:1-6,Proverbs 10:13-14\n\
25-Feb-2018,2 Chronicles 26:1-27:9,Romans 13:1-7,Psalm 24:1-2,Proverbs 10:15-16\n\
26-Feb-2018,2 Chronicles 28:1-27,Romans 13:8-14,Psalm 24:3-6,Proverbs 10:17\n\
27-Feb-2018,2 Chronicles 29:1-17,Romans 14:1-9,Psalm 24:7-10,Proverbs 10:18\n\
28-Feb-2018,2 Chronicles 29:18-36,Romans 14:10-15:4,Psalm 25:1-7,Proverbs 10:19\n\
1-Mar-2018,2 Chronicles 30:1-20,Romans 15:5-13,Psalm 25:8-15,Proverbs 10:20-21\n\
2-Mar-2018,2 Chronicles 30:21-31:21,Romans 15:14-22,Psalm 25:16-22,Proverbs 10:22\n\
3-Mar-2018,2 Chronicles 32:1-23,Romans 15:23-33,Psalm 26:1-8,Proverbs 10:23\n\
4-Mar-2018,2 Chronicles 32:24-33:13,Romans 16:1-9,Psalm 26:9-12,Proverbs 10:24-25\n\
5-Mar-2018,2 Chronicles 33:14-34:13,Romans 16:10-20,Psalm 27:1,Proverbs 10:26\n\
6-Mar-2018,2 Chronicles 34:14-33,Romans 16:21-27,Psalm 27:2-3,Proverbs 10:27-28\n\
7-Mar-2018,2 Chronicles 35:1-27,1 Corinthians 1:1-9,Psalm 27:4-6,Proverbs 10:29-30\n\
8-Mar-2018,2 Chronicles 36:1-23,1 Corinthians 1:10-17,Psalm 27:7-10,Proverbs 10:31-32\n\
9-Mar-2018,Ezra 1:1-2:35,1 Corinthians 1:18-25,Psalm 27:11-14,Proverbs 11:1-3\n\
10-Mar-2018,Ezra 2:36-70,1 Corinthians 1:26-2:5,Psalm 28:1-5,Proverbs 11:4\n\
11-Mar-2018,Ezra 3:1-13,1 Corinthians 2:6-16,Psalm 28:6-9,Proverbs 11:5-6\n\
12-Mar-2018,Ezra 4:1-24,1 Corinthians 3:1-4,Psalm 29:1-2,Proverbs 11:7\n\
13-Mar-2018,Ezra 5:1-6:1,1 Corinthians 3:5-15,Psalm 29:3-11,Proverbs 11:8\n\
14-Mar-2018,Ezra 6:2-22,1 Corinthians 3:16-23,Psalm 30:1-3,Proverbs 11:9-11\n\
15-Mar-2018,Ezra 7:1-26,1 Corinthians 4:1-9,Psalm 30:4-12,Proverbs 11:12-13\n\
16-Mar-2018,Ezra 7:27-8:20,1 Corinthians 4:10-21,Psalm 31:1-2,Proverbs 11:14\n\
17-Mar-2018,Ezra 8:21-36,1 Corinthians 5:1-8,Psalm 31:3-8,Proverbs 11:15\n\
18-Mar-2018,Ezra 9:1-15,1 Corinthians 5:9-13,Psalm 31:9-18,Proverbs 11:16-17\n\
19-Mar-2018,Ezra 10:1-17,1 Corinthians 6:1-8,Psalm 31:19-20,Proverbs 11:18-19\n\
20-Mar-2018,Ezra 10:18-44,1 Corinthians 6:9-20,Psalm 31:21-22,Proverbs 11:20-21\n\
21-Mar-2018,Nehemiah 1:1-2:8,1 Corinthians 7:1-16,Psalm 31:23-24,Proverbs 11:22\n\
22-Mar-2018,Nehemiah 2:9-3:14,1 Corinthians 7:17-24,Psalm 32:1-7,Proverbs 11:23\n\
23-Mar-2018,Nehemiah 3:15-4:5,1 Corinthians 7:25-32a,Psalm 32:8-11,Proverbs 11:24-26\n\
24-Mar-2018,Nehemiah 4:6-5:13,1 Corinthians 7:32b-40,Psalm 33:1-5,Proverbs 11:27\n\
25-Mar-2018,Nehemiah 5:14-6:19,1 Corinthians 8:1-3,Psalm 33:6-11,Proverbs 11:28\n\
26-Mar-2018,Nehemiah 7:1-60,1 Corinthians 8:4-13,Psalm 33:12-19,Proverbs 11:29-31\n\
27-Mar-2018,Nehemiah 7:61-8:18,1 Corinthians 9:1-10,Psalm 33:20-22,Proverbs 12:1\n\
28-Mar-2018,Nehemiah 9:1-21,1 Corinthians 9:11-18,Psalm 34:1-3,Proverbs 12:2-3\n\
29-Mar-2018,Nehemiah 9:22-10:27,1 Corinthians 9:19-27,Psalm 34:4-10,Proverbs 12:4\n\
30-Mar-2018,Nehemiah 10:28-39,1 Corinthians 10:1-13,Psalm 34:11-14,Proverbs 12:5-7\n\
31-Mar-2018,Nehemiah 11:1-36,1 Corinthians 10:14-24,Psalm 34:15-22,Proverbs 12:8-9\n\
1-Apr-2018,Nehemiah 12:1-26,1 Corinthians 10:25-33,Psalm 35:1-9,Proverbs 12:10\n\
2-Apr-2018,Nehemiah 12:27-13:14,1 Corinthians 11:1-12,Psalm 35:10-18,Proverbs 12:11\n\
3-Apr-2018,Nehemiah 13:15-31,1 Corinthians 11:13-16,Psalm 35:19-28,Proverbs 12:12-14\n\
4-Apr-2018,Esther 1:1-2:4,1 Corinthians 11:17-22,Psalm 36:1-5,Proverbs 12:15-17\n\
5-Apr-2018,Esther 2:5-3:15,1 Corinthians 11:23-34,Psalm 36:6-9,Proverbs 12:18\n\
6-Apr-2018,Esther 4:1-5:14,1 Corinthians 12:1-7,Psalm 36:10-12,Proverbs 12:19-20\n\
7-Apr-2018,Esther 6:1-7:10,1 Corinthians 12:8-26,Psalm 37:1-6,Proverbs 12:21-23\n\
8-Apr-2018,Esther 8:1-9:15,1 Corinthians 12:27-31,Psalm 37:7-11,Proverbs 12:24\n\
9-Apr-2018,Esther 9:16-10:3,1 Corinthians 13:1-13,Psalm 37:12-20,Proverbs 12:25\n\
10-Apr-2018,Job 1:1-22,1 Corinthians 14:1-9,Psalm 37:21-29,Proverbs 12:26\n\
11-Apr-2018,Job 2:1-3:26,1 Corinthians 14:10-17,Psalm 37:30-33,Proverbs 12:27-28\n\
12-Apr-2018,Job 4:1-5:27,1 Corinthians 14:18-25,Psalm 37:34-40,Proverbs 13:1\n\
13-Apr-2018,Job 6:1-7:21,1 Corinthians 14:26-40,Psalm 38:1-18,Proverbs 13:2-3\n\
14-Apr-2018,Job 8:1-9:24,1 Corinthians 15:1-11,Psalm 38:19-22,Proverbs 13:4\n\
15-Apr-2018,Job 9:25-11:20,1 Corinthians 15:12-28,Psalm 39:1-5,Proverbs 13:5-6\n\
16-Apr-2018,Job 12:1-13:28,1 Corinthians 15:29-44,Psalm 39:6-13,Proverbs 13:7-8\n\
17-Apr-2018,Job 14:1-15:35,1 Corinthians 15:45-58,Psalm 40:1-3,Proverbs 13:9-10\n\
18-Apr-2018,Job 16:1-18:4,1 Corinthians 16:1-9,Psalm 40:4-10,Proverbs 13:11\n\
19-Apr-2018,Job 18:5-19:29,1 Corinthians 16:10-24,Psalm 40:11-13,Proverbs 13:12-14\n\
20-Apr-2018,Job 20:1-21:21,2 Corinthians 1:1-7,Psalm 40:14-17,Proverbs 13:15-16\n\
21-Apr-2018,Job 21:22-22:30,2 Corinthians 1:8-11,Psalm 41:1-3,Proverbs 13:17-19\n\
22-Apr-2018,Job 23:1-24:25,2 Corinthians 1:12-22,Psalm 41:4-13,Proverbs 13:20-23\n\
23-Apr-2018,Job 25:1-27:23,2 Corinthians 1:23-2:11,Psalm 42:1-8,Proverbs 13:24-25\n\
24-Apr-2018,Job 28:1-29:17,2 Corinthians 2:12-14,Psalm 42:9-11,Proverbs 14:1-2\n\
25-Apr-2018,Job 29:18-30:31,2 Corinthians 2:15-17,Psalm 43:1-4,Proverbs 14:3-4\n\
26-Apr-2018,Job 31:1-32:1,2 Corinthians 3:1-11,Psalm 43:5,Proverbs 14:5-6\n\
27-Apr-2018,Job 32:2-33:33,2 Corinthians 3:12-18,Psalm 44:1-3,Proverbs 14:7-8\n\
28-Apr-2018,Job 34:1-37,2 Corinthians 4:1-4,Psalm 44:4-7,Proverbs 14:9-10\n\
29-Apr-2018,Job 35:1-36:33,2 Corinthians 4:5-12,Psalm 44:8-22,Proverbs 14:11-12\n\
30-Apr-2018,Job 37:1-24,2 Corinthians 4:13-18,Psalm 44:23-26,Proverbs 14:13-14\n\
1-May-2018,Job 38:1-39:30,2 Corinthians 5:1-10,Psalm 45:1-6,Proverbs 14:15-16\n\
2-May-2018,Job 40:1-41:34,2 Corinthians 5:11-14,Psalm 45:7-17,Proverbs 14:17-19\n\
3-May-2018,Job 42:1-17,2 Corinthians 5:15-21,Psalm 46:1-7,Proverbs 14:20-21\n\
4-May-2018,Ecclesiastes 1:1-2:23,2 Corinthians 6:1-2,Psalm 46:8-11,Proverbs 14:22-24\n\
5-May-2018,Ecclesiastes 2:24-3:22,2 Corinthians 6:3-13,Psalm 47:1-7,Proverbs 14:25\n\
6-May-2018,Ecclesiastes 4:1-5:9,2 Corinthians 6:14-7:1,Psalm 47:8-9,Proverbs 14:26-27\n\
7-May-2018,Ecclesiastes 5:10-6:12,2 Corinthians 7:2-7,Psalm 48:1-8,Proverbs 14:28-29\n\
8-May-2018,Ecclesiastes 7:1-8:8,2 Corinthians 7:8-10,Psalm 48:9-14,Proverbs 14:30-31\n\
9-May-2018,Ecclesiastes 8:9-9:18,2 Corinthians 7:11-16,Psalm 49:1-9,Proverbs 14:32-33\n\
10-May-2018,Ecclesiastes 10:1-11:10,2 Corinthians 8:1-9,Psalm 49:10-20,Proverbs 14:34-35\n\
11-May-2018,Ecclesiastes 12:1-14,2 Corinthians 8:10-15,Psalm 50:1-6,Proverbs 15:1-3\n\
12-May-2018,Song of Songs 1:1-2:17,2 Corinthians 8:16-20,Psalm 50:7-23,Proverbs 15:4\n\
13-May-2018,Song of Songs 3:1-4:16,2 Corinthians 8:21-24,Psalm 51:1-9,Proverbs 15:5-7\n\
14-May-2018,Song of Songs 5:1-6:13,2 Corinthians 9:1-8,Psalm 51:10-19,Proverbs 15:8-10\n\
15-May-2018,Song of Songs 7:1-8:14,2 Corinthians 9:9-15,Psalm 52:1-7,Proverbs 15:11\n\
16-May-2018,Isaiah 1:1-31,2 Corinthians 10:1-12,Psalm 52:8-9,Proverbs 15:12-14\n\
17-May-2018,Isaiah 2:1-22,2 Corinthians 10:13-18,Psalm 53:1-5,Proverbs 15:15-17\n\
18-May-2018,Isaiah 3:1-4:6,2 Corinthians 11:1-6,Psalm 53:6,Proverbs 15:18-19\n\
19-May-2018,Isaiah 5:1-30,2 Corinthians 11:7-15,Psalm 54:1-4,Proverbs 15:20-21\n\
20-May-2018,Isaiah 6:1-7:9,2 Corinthians 11:16-21a,Psalm 54:5-7,Proverbs 15:22-23\n\
21-May-2018,Isaiah 7:10-25,2 Corinthians 11:21b-33,Psalm 55:1-11,Proverbs 15:24-26\n\
22-May-2018,Isaiah 8:1-22,2 Corinthians 12:1-7a,Psalm 55:12-23,Proverbs 15:27-28\n\
23-May-2018,Isaiah 9:1-21,2 Corinthians 12:7b-10,Psalm 56:1-9,Proverbs 15:29-30\n\
24-May-2018,Isaiah 10:1-23,2 Corinthians 12:11-15,Psalm 56:10-13,Proverbs 15:31-32\n\
25-May-2018,Isaiah 10:24-11:16,2 Corinthians 12:16-21,Psalm 57:1-3,Proverbs 15:33\n\
26-May-2018,Isaiah 12:1-14:2,2 Corinthians 13:1-6,Psalm 57:4-11,Proverbs 16:1-3\n\
27-May-2018,Isaiah 14:3-32,2 Corinthians 13:7-13,Psalm 58:1-9,Proverbs 16:4-5\n\
28-May-2018,Isaiah 15:1-16:14,Galatians 1:1-10,Psalm 58:10-11,Proverbs 16:6-7\n\
29-May-2018,Isaiah 17:1-18:7,Galatians 1:11-24,Psalm 59:1-13,Proverbs 16:8-9\n\
30-May-2018,Isaiah 19:1-25,Galatians 2:1-10,Psalm 59:14-17,Proverbs 16:10-11\n\
31-May-2018,Isaiah 20:1-21:17,Galatians 2:11-16,Psalm 60:1-5,Proverbs 16:12-13\n\
1-Jun-2018,Isaiah 22:1-25,Galatians 2:17-21,Psalm 60:6-12,Proverbs 16:14-15\n\
2-Jun-2018,Isaiah 23:1-24:23,Galatians 3:1-9,Psalm 61:1-3,Proverbs 16:16-17\n\
3-Jun-2018,Isaiah 25:1-26:21,Galatians 3:10-14,Psalm 61:4-8,Proverbs 16:18\n\
4-Jun-2018,Isaiah 27:1-28:13,Galatians 3:15-22,Psalm 62:1-8,Proverbs 16:19-20\n\
5-Jun-2018,Isaiah 28:14-29:14,Galatians 3:23-4:20,Psalm 62:9-12,Proverbs 16:21-23\n\
6-Jun-2018,Isaiah 29:15-30:11,Galatians 4:21-31,Psalm 63:1-5,Proverbs 16:24\n\
7-Jun-2018,Isaiah 30:12-31:9,Galatians 5:1-6,Psalm 63:6-11,Proverbs 16:25\n\
8-Jun-2018,Isaiah 32:1-33:9,Galatians 5:7-12,Psalm 64:1-9,Proverbs 16:26-27\n\
9-Jun-2018,Isaiah 33:10-35:10,Galatians 5:13-18,Psalm 64:10,Proverbs 16:28-30\n\
10-Jun-2018,Isaiah 36:1-22,Galatians 5:19-26,Psalm 65:1-4,Proverbs 16:31-33\n\
11-Jun-2018,Isaiah 37:1-29,Galatians 6:1-10,Psalm 65:5-13,Proverbs 17:1\n\
12-Jun-2018,Isaiah 37:30-38:22,Galatians 6:11-18,Psalm 66:1-7,Proverbs 17:2-3\n\
13-Jun-2018,Isaiah 39:1-40:17,Ephesians 1:1-14,Psalm 66:8-20,Proverbs 17:4-5\n\
14-Jun-2018,Isaiah 40:18-41:16,Ephesians 1:15-23,Psalm 67:1-3,Proverbs 17:6\n\
15-Jun-2018,Isaiah 41:17-42:9,Ephesians 2:1-10,Psalm 67:4-7,Proverbs 17:7-8\n\
16-Jun-2018,Isaiah 42:10-43:13,Ephesians 2:11-22,Psalm 68:1-6,Proverbs 17:9-11\n\
17-Jun-2018,Isaiah 43:14-44:8,Ephesians 3:1-11,Psalm 68:7-18,Proverbs 17:12-13\n\
18-Jun-2018,Isaiah 44:9-45:10,Ephesians 3:12-21,Psalm 68:19-31,Proverbs 17:14-15\n\
19-Jun-2018,Isaiah 45:11-46:13,Ephesians 4:1-8,Psalm 68:32-35,Proverbs 17:16\n\
20-Jun-2018,Isaiah 47:1-48:11,Ephesians 4:9-16,Psalm 69:1-13a,Proverbs 17:17-18\n\
21-Jun-2018,Isaiah 48:12-49:12,Ephesians 4:17-24,Psalm 69:13b-18,Proverbs 17:19-21\n\
22-Jun-2018,Isaiah 49:13-50:11,Ephesians 4:25-32,Psalm 69:19-31,Proverbs 17:22\n\
23-Jun-2018,Isaiah 51:1-23,Ephesians 5:1-9,Psalm 69:32-36,Proverbs 17:23\n\
24-Jun-2018,Isaiah 52:1-53:12,Ephesians 5:10-33,Psalm 70:1-5,Proverbs 17:24-25\n\
25-Jun-2018,Isaiah 54:1-55:13,Ephesians 6:1-9,Psalm 71:1-6,Proverbs 17:26\n\
26-Jun-2018,Isaiah 56:1-57:14,Ephesians 6:10-24,Psalm 71:7-16,Proverbs 17:27-28\n\
27-Jun-2018,Isaiah 57:15-58:14,Philippians 1:1-11,Psalm 71:17-24,Proverbs 18:1\n\
28-Jun-2018,Isaiah 59:1-21,Philippians 1:12-26,Psalm 72:1-14,Proverbs 18:2-3\n\
29-Jun-2018,Isaiah 60:1-22,Philippians 1:27-2:2,Psalm 72:15-20,Proverbs 18:4-5\n\
30-Jun-2018,Isaiah 61:1-62:5,Philippians 2:3-18,Psalm 73:1-20,Proverbs 18:6-7\n\
1-Jul-2018,Isaiah 62:6-64:12,Philippians 2:19-30,Psalm 73:21-28,Proverbs 18:8\n\
2-Jul-2018,Isaiah 65:1-25,Philippians 3:1-3,Psalm 74:1-11,Proverbs 18:9-10\n\
3-Jul-2018,Isaiah 66:1-9,Philippians 3:4-12,Psalm 74:12-23,Proverbs 18:11-12\n\
4-Jul-2018,Isaiah 66:10-24,Philippians 3:13-21,Psalm 75:1-5,Proverbs 18:13\n\
5-Jul-2018,Jeremiah 1:1-19,Philippians 4:1-7,Psalm 75:6-10,Proverbs 18:14-15\n\
6-Jul-2018,Jeremiah 2:1-30,Philippians 4:8-23,Psalm 76:1-7,Proverbs 18:16-18\n\
7-Jul-2018,Jeremiah 2:31-3:20,Colossians 1:1-10,Psalm 76:8-12,Proverbs 18:19\n\
8-Jul-2018,Jeremiah 3:21-4:18,Colossians 1:11-17,Psalm 77:1-14,Proverbs 18:20-21\n\
9-Jul-2018,Jeremiah 4:19-5:19,Colossians 1:18-27,Psalm 77:15-20,Proverbs 18:22\n\
10-Jul-2018,Jeremiah 5:20-6:15,Colossians 1:28-2:7,Psalm 78:1-22,Proverbs 18:23-24\n\
11-Jul-2018,Jeremiah 6:16-7:20,Colossians 2:8-12,Psalm 78:23-31,Proverbs 19:1-3\n\
12-Jul-2018,Jeremiah 7:21-8:7,Colossians 2:13-23,Psalm 78:32-39,Proverbs 19:4-5\n\
13-Jul-2018,Jeremiah 8:8-22,Colossians 3:1-11,Psalm 78:40-55,Proverbs 19:6-7\n\
14-Jul-2018,Jeremiah 9:1-26,Colossians 3:12-17,Psalm 78:56-59,Proverbs 19:8-9\n\
15-Jul-2018,Jeremiah 10:1-25,Colossians 3:18-4:6,Psalm 78:60-64,Proverbs 19:10-12\n\
16-Jul-2018,Jeremiah 11:1-23,Colossians 4:7-18,Psalm 78:65-69,Proverbs 19:13-14\n\
17-Jul-2018,Jeremiah 12:1-13:7,1 Thessalonians 1:1-10,Psalm 78:70-72,Proverbs 19:15-16\n\
18-Jul-2018,Jeremiah 13:8-14:10,1 Thessalonians 2:1-8,Psalm 79:1-8,Proverbs 19:17\n\
19-Jul-2018,Jeremiah 14:11-15:9,1 Thessalonians 2:9-16,Psalm 79:9-13,Proverbs 19:18-19\n\
20-Jul-2018,Jeremiah 15:10-16:15,1 Thessalonians 2:17-3:13,Psalm 80:1-13,Proverbs 19:20-21\n\
21-Jul-2018,Jeremiah 16:16-17:27,1 Thessalonians 4:1-12,Psalm 80:14-19,Proverbs 19:22-23\n\
22-Jul-2018,Jeremiah 18:1-23,1 Thessalonians 4:13-5:3,Psalm 81:1-7,Proverbs 19:24-25\n\
23-Jul-2018,Jeremiah 19:1-20:6,1 Thessalonians 5:4-11,Psalm 81:8-16,Proverbs 19:26\n\
24-Jul-2018,Jeremiah 20:7-21:14,1 Thessalonians 5:12-28,Psalm 82:1-5,Proverbs 19:27-29\n\
25-Jul-2018,Jeremiah 22:1-30,2 Thessalonians 1:1-6,Psalm 82:6-8,Proverbs 20:1\n\
26-Jul-2018,Jeremiah 23:1-20,2 Thessalonians 1:7-12,Psalm 83:1-8,Proverbs 20:2-3\n\
27-Jul-2018,Jeremiah 23:21-24:10,2 Thessalonians 2:1-12,Psalm 83:9-18,Proverbs 20:4-6\n\
28-Jul-2018,Jeremiah 25:1-38,2 Thessalonians 2:13-17,Psalm 84:1-4,Proverbs 20:7\n\
29-Jul-2018,Jeremiah 26:1-24,2 Thessalonians 3:1-5,Psalm 84:5-12,Proverbs 20:8-10\n\
30-Jul-2018,Jeremiah 27:1-22,2 Thessalonians 3:6-18,Psalm 85:1-7,Proverbs 20:11\n\
31-Jul-2018,Jeremiah 28:1-17,1 Timothy 1:1-11,Psalm 85:8-13,Proverbs 20:12\n\
1-Aug-2018,Jeremiah 29:1-32,1 Timothy 1:12-20,Psalm 86:1-7,Proverbs 20:13-15\n\
2-Aug-2018,Jeremiah 30:1-24,1 Timothy 2:1-7,Psalm 86:8-17,Proverbs 20:16-18\n\
3-Aug-2018,Jeremiah 31:1-26,1 Timothy 2:8-15,Psalm 87:1-3,Proverbs 20:19\n\
4-Aug-2018,Jeremiah 31:27-32:5,1 Timothy 3:1-5,Psalm 87:4-7,Proverbs 20:20-21\n\
5-Aug-2018,Jeremiah 32:6-44,1 Timothy 3:6-16,Psalm 88:1-12,Proverbs 20:22-23\n\
6-Aug-2018,Jeremiah 33:1-22,1 Timothy 4:1-6,Psalm 88:13-18,Proverbs 20:24-25\n\
7-Aug-2018,Jeremiah 33:23-34:22,1 Timothy 4:7-16,Psalm 89:1-6,Proverbs 20:26-27\n\
8-Aug-2018,Jeremiah 35:1-19,1 Timothy 5:1-16,Psalm 89:7-13,Proverbs 20:28-30\n\
9-Aug-2018,Jeremiah 36:1-32,1 Timothy 5:17-25,Psalm 89:14-18,Proverbs 21:1-2\n\
10-Aug-2018,Jeremiah 37:1-21,1 Timothy 6:1-11a,Psalm 89:19-37,Proverbs 21:3\n\
11-Aug-2018,Jeremiah 38:1-28,1 Timothy 6:11b-21,Psalm 89:38-46a,Proverbs 21:4\n\
12-Aug-2018,Jeremiah 39:1-40:6,2 Timothy 1:1-8,Psalm 89:46b-52,Proverbs 21:5-7\n\
13-Aug-2018,Jeremiah 40:7-41:18,2 Timothy 1:9-18,Psalm 90:1-17,Proverbs 21:8-10\n\
14-Aug-2018,Jeremiah 42:1-43:13,2 Timothy 2:1-7,Psalm 91:1-16,Proverbs 21:11-12\n\
15-Aug-2018,Jeremiah 44:1-23,2 Timothy 2:8-21,Psalm 92:1-15,Proverbs 21:13\n\
16-Aug-2018,Jeremiah 44:24-46:12,2 Timothy 2:22-26,Psalm 93:1-5,Proverbs 21:14-16\n\
17-Aug-2018,Jeremiah 46:13-47:7,2 Timothy 3:1-17,Psalm 94:1-13,Proverbs 21:17-18\n\
18-Aug-2018,Jeremiah 48:1-47,2 Timothy 4:1-5,Psalm 94:14-23,Proverbs 21:19-20\n\
19-Aug-2018,Jeremiah 49:1-22,2 Timothy 4:6-22,Psalm 95:1-11,Proverbs 21:21-22\n\
20-Aug-2018,Jeremiah 49:23-50:20,Titus 1:1-3,Psalm 96:1-13,Proverbs 21:23-24\n\
21-Aug-2018,Jeremiah 50:21-46,Titus 1:4-16,Psalm 97:1-12,Proverbs 21:25-26\n\
22-Aug-2018,Jeremiah 51:1-26,Titus 2:1-8,Psalm 98:1-9,Proverbs 21:27\n\
23-Aug-2018,Jeremiah 51:27-53,Titus 2:9-15,Psalm 99:1-4,Proverbs 21:28-29\n\
24-Aug-2018,Jeremiah 51:54-52:11,Titus 3:1-8,Psalm 99:5-9,Proverbs 21:30-31\n\
25-Aug-2018,Jeremiah 52:12-34,Titus 3:9-15,Psalm 100:1-2,Proverbs 22:1\n\
26-Aug-2018,Lamentations 1:1-22,Philemon 1:1-3,Psalm 100:3-5,Proverbs 22:2-4\n\
27-Aug-2018,Lamentations 2:1-19,Philemon 1:4-25,Psalm 101:1-3,Proverbs 22:5-6\n\
28-Aug-2018,Lamentations 2:20-3:24,Hebrews 1:1-8,Psalm 101:4-8,Proverbs 22:7\n\
29-Aug-2018,Lamentations 3:25-66,Hebrews 1:9-14,Psalm 102:1-17,Proverbs 22:8-9\n\
30-Aug-2018,Lamentations 4:1-22,Hebrews 2:1-13,Psalm 102:18-22,Proverbs 22:10-12\n\
31-Aug-2018,Lamentations 5:1-22,Hebrews 2:14-18,Psalm 102:23-28,Proverbs 22:13\n\
1-Sep-2018,Ezekiel 1:1-28,Hebrews 3:1-12,Psalm 103:1-12,Proverbs 22:14\n\
2-Sep-2018,Ezekiel 2:1-3:15,Hebrews 3:13-19,Psalm 103:13-22,Proverbs 22:15\n\
3-Sep-2018,Ezekiel 3:16-4:17,Hebrews 4:1-11,Psalm 104:1-7,Proverbs 22:16\n\
4-Sep-2018,Ezekiel 5:1-6:14,Hebrews 4:12-16,Psalm 104:8-23,Proverbs 22:17-19\n\
5-Sep-2018,Ezekiel 7:1-27,Hebrews 5:1-11,Psalm 104:24-30,Proverbs 22:20-21\n\
6-Sep-2018,Ezekiel 8:1-9:11,Hebrews 5:12-14,Psalm 104:31-35,Proverbs 22:22-23\n\
7-Sep-2018,Ezekiel 10:1-22,Hebrews 6:1-10,Psalm 105:1-7,Proverbs 22:24-25\n\
8-Sep-2018,Ezekiel 11:1-25,Hebrews 6:11-20,Psalm 105:8-15,Proverbs 22:26-27\n\
9-Sep-2018,Ezekiel 12:1-28,Hebrews 7:1-10,Psalm 105:16-26,Proverbs 22:28-29\n\
10-Sep-2018,Ezekiel 13:1-14:11,Hebrews 7:11-17,Psalm 105:27-36,Proverbs 23:1-3\n\
11-Sep-2018,Ezekiel 14:12-15:8,Hebrews 7:18-25,Psalm 105:37-45,Proverbs 23:4-5\n\
12-Sep-2018,Ezekiel 16:1-41,Hebrews 7:26-28,Psalm 106:1-2,Proverbs 23:6-8\n\
13-Sep-2018,Ezekiel 16:42-63,Hebrews 8:1-6,Psalm 106:3-5,Proverbs 23:9-11\n\
14-Sep-2018,Ezekiel 17:1-24,Hebrews 8:7-13,Psalm 106:6-12,Proverbs 23:12\n\
15-Sep-2018,Ezekiel 18:1-32,Hebrews 9:1-5,Psalm 106:13-23,Proverbs 23:13-14\n\
16-Sep-2018,Ezekiel 19:1-14,Hebrews 9:6-10,Psalm 106:24-31,Proverbs 23:15-16\n\
17-Sep-2018,Ezekiel 20:1-26,Hebrews 9:11-23,Psalm 106:32-46,Proverbs 23:17-18\n\
18-Sep-2018,Ezekiel 20:27-49,Hebrews 9:24-28,Psalm 106:47-48,Proverbs 23:19-21\n\
19-Sep-2018,Ezekiel 21:1-32,Hebrews 10:1-7,Psalm 107:1-3,Proverbs 23:22\n\
20-Sep-2018,Ezekiel 22:1-31,Hebrews 10:8-17,Psalm 107:4-32,Proverbs 23:23\n\
21-Sep-2018,Ezekiel 23:1-27,Hebrews 10:18-23,Psalm 107:33-43,Proverbs 23:24\n\
22-Sep-2018,Ezekiel 23:28-49,Hebrews 10:24-36,Psalm 108:1-4,Proverbs 23:25-28\n\
23-Sep-2018,Ezekiel 24:1-25:11,Hebrews 11:1-7,Psalm 108:5-13,Proverbs 23:29-35\n\
24-Sep-2018,Ezekiel 25:12-26:21,Hebrews 11:8-16,Psalm 109:1-21a,Proverbs 24:1-2\n\
25-Sep-2018,Ezekiel 27:1-36,Hebrews 11:17-23,Psalm 109:21b-31,Proverbs 24:3-4\n\
26-Sep-2018,Ezekiel 28:1-26,Hebrews 11:24-31,Psalm 110:1-3,Proverbs 24:5-6\n\
27-Sep-2018,Ezekiel 29:1-21,Hebrews 11:32-40,Psalm 110:4-7,Proverbs 24:7\n\
28-Sep-2018,Ezekiel 30:1-26,Hebrews 12:1-13,Psalm 111:1-4a,Proverbs 24:8\n\
29-Sep-2018,Ezekiel 31:1-18,Hebrews 12:14-24,Psalm 111:4b-10,Proverbs 24:9-10\n\
30-Sep-2018,Ezekiel 32:1-32,Hebrews 12:25-29,Psalm 112:1-3,Proverbs 24:11-12\n\
1-Oct-2018,Ezekiel 33:1-33,Hebrews 13:1-16,Psalm 112:4-10,Proverbs 24:13-14\n\
2-Oct-2018,Ezekiel 34:1-31,Hebrews 13:17-25,Psalm 113:1-9,Proverbs 24:15-16\n\
3-Oct-2018,Ezekiel 35:1-36:15,James 1:1-8,Psalm 114:1-8,Proverbs 24:17-20\n\
4-Oct-2018,Ezekiel 36:16-38,James 1:9-18,Psalm 115:1-10,Proverbs 24:21-22\n\
5-Oct-2018,Ezekiel 37:1-28,James 1:19-27,Psalm 115:11-18,Proverbs 24:23-25\n\
6-Oct-2018,Ezekiel 38:1-23,James 2:1-17,Psalm 116:1-5,Proverbs 24:26\n\
7-Oct-2018,Ezekiel 39:1-29,James 2:18-3:6,Psalm 116:6-14,Proverbs 24:27\n\
8-Oct-2018,Ezekiel 40:1-27,James 3:7-18,Psalm 116:15-117:2,Proverbs 24:28-29\n\
9-Oct-2018,Ezekiel 40:28-49,James 4:1-10,Psalm 118:1-7,Proverbs 24:30-34\n\
10-Oct-2018,Ezekiel 41:1-26,James 4:11-17,Psalm 118:8-18,Proverbs 25:1-5\n\
11-Oct-2018,Ezekiel 42:1-43:4,James 5:1-8,Psalm 118:19-26,Proverbs 25:6-8\n\
12-Oct-2018,Ezekiel 43:5-27,James 5:9-20,Psalm 118:27-29,Proverbs 25:9-10\n\
13-Oct-2018,Ezekiel 44:1-31,1 Peter 1:1-6a,Psalm 119:1-8,Proverbs 25:11-14\n\
14-Oct-2018,Ezekiel 45:1-12,1 Peter 1:6b-12,Psalm 119:9-16,Proverbs 25:15\n\
15-Oct-2018,Ezekiel 45:13-46:3,1 Peter 1:13-25,Psalm 119:17-24,Proverbs 25:16\n\
16-Oct-2018,Ezekiel 46:4-24,1 Peter 2:1-10,Psalm 119:25-32,Proverbs 25:17\n\
17-Oct-2018,Ezekiel 47:1-23,1 Peter 2:11-25,Psalm 119:33-40,Proverbs 25:18-19\n\
18-Oct-2018,Ezekiel 48:1-35,1 Peter 3:1-7,Psalm 119:41-48,Proverbs 25:20-22\n\
19-Oct-2018,Daniel 1:1-21,1 Peter 3:8-22,Psalm 119:49-58,Proverbs 25:23-24\n\
20-Oct-2018,Daniel 2:1-23,1 Peter 4:1-6,Psalm 119:59-64,Proverbs 25:25-27\n\
21-Oct-2018,Daniel 2:24-49,1 Peter 4:7-19,Psalm 119:65-72,Proverbs 25:28\n\
22-Oct-2018,Daniel 3:1-30,1 Peter 5:1-14,Psalm 119:73-80,Proverbs 26:1-2\n\
23-Oct-2018,Daniel 4:1-27,2 Peter 1:1-9,Psalm 119:81-88,Proverbs 26:3-5\n\
24-Oct-2018,Daniel 4:28-37,2 Peter 1:10-21,Psalm 119:89-96,Proverbs 26:6-8\n\
25-Oct-2018,Daniel 5:1-12,2 Peter 2:1-11,Psalm 119:97-104,Proverbs 26:9-12\n\
26-Oct-2018,Daniel 5:13-31,2 Peter 2:12-22,Psalm 119:105-112,Proverbs 26:13-16\n\
27-Oct-2018,Daniel 6:1-18,2 Peter 3:1-11,Psalm 119:113-120,Proverbs 26:17\n\
28-Oct-2018,Daniel 6:19-28,2 Peter 3:12-18,Psalm 119:121-128,Proverbs 26:18-19\n\
29-Oct-2018,Daniel 7:1-14,1 John 1:1-4,Psalm 119:129-136,Proverbs 26:20\n\
30-Oct-2018,Daniel 7:15-28,1 John 1:5-10,Psalm 119:137-152,Proverbs 26:21-22\n\
31-Oct-2018,Daniel 8:1-14,1 John 2:1-6,Psalm 119:153-159,Proverbs 26:23\n\
1-Nov-2018,Daniel 8:15-27,1 John 2:7-17,Psalm 119:160-168,Proverbs 26:24-26\n\
2-Nov-2018,Daniel 9:1-27,1 John 2:18-29,Psalm 119:169-176,Proverbs 26:27\n\
3-Nov-2018,Daniel 10:1-11:1,1 John 3:1-6,Psalm 120:1-7,Proverbs 26:28\n\
4-Nov-2018,Daniel 11:2-12,1 John 3:7-13,Psalm 121:1-4,Proverbs 27:1-2\n\
5-Nov-2018,Daniel 11:13-35,1 John 3:14-24,Psalm 121:5-8,Proverbs 27:3\n\
6-Nov-2018,Daniel 11:36-45,1 John 4:1-6,Psalm 122:1-5,Proverbs 27:4-6\n\
7-Nov-2018,Daniel 12:1-13,1 John 4:7-21,Psalm 122:6-9,Proverbs 27:7-9\n\
8-Nov-2018,Hosea 1:1-2:1,1 John 5:1-12,Psalm 123:1-2,Proverbs 27:10\n\
9-Nov-2018,Hosea 2:2-3:5,1 John 5:13-21,Psalm 123:3-4,Proverbs 27:11\n\
10-Nov-2018,Hosea 4:1-19,2 John 1:1-6,Psalm 124:1-6,Proverbs 27:12\n\
11-Nov-2018,Hosea 5:1-15,2 John 1:7-13,Psalm 124:7-8,Proverbs 27:13\n\
12-Nov-2018,Hosea 6:1-7:16,3 John 1:1-4,Psalm 125:1-3,Proverbs 27:14\n\
13-Nov-2018,Hosea 8:1-9:17,3 John 1:5-15,Psalm 125:4-5,Proverbs 27:15-16\n\
14-Nov-2018,Hosea 10:1-11:12,Jude 1:1-19,Psalm 126:1-3,Proverbs 27:17\n\
15-Nov-2018,Hosea 12:1-14:9,Jude 1:20-25,Psalm 126:4-6,Proverbs 27:18-20\n\
16-Nov-2018,Joel 1:1-2:32,Revelation 1:1-8,Psalm 127:1-2,Proverbs 27:21-22\n\
17-Nov-2018,Joel 3:1-21,Revelation 1:9-20,Psalm 127:3-5,Proverbs 27:23-27\n\
18-Nov-2018,Amos 1:1-15,Revelation 2:1-7,Psalm 128:1-4,Proverbs 28:1\n\
19-Nov-2018,Amos 2:1-3:15,Revelation 2:8-17,Psalm 128:5-6,Proverbs 28:2\n\
20-Nov-2018,Amos 4:1-5:9,Revelation 2:18-29,Psalm 129:1-4,Proverbs 28:3-5\n\
21-Nov-2018,Amos 5:10-6:14,Revelation 3:1-6,Psalm 129:5-8,Proverbs 28:6-7\n\
22-Nov-2018,Amos 7:1-8:3,Revelation 3:7-13,Psalm 130:1-5,Proverbs 28:8-10\n\
23-Nov-2018,Amos 8:4-9:15,Revelation 3:14-22,Psalm 130:6-8,Proverbs 28:11\n\
24-Nov-2018,Obadiah 1:1-14,Revelation 4:1-6a,Psalm 131:1-132:9,Proverbs 28:12-13\n\
25-Nov-2018,Obadiah 1:15-21,Revelation 4:6b-11,Psalm 132:10-12,Proverbs 28:14\n\
26-Nov-2018,Jonah 1:1-2:10,Revelation 5:1-8,Psalm 132:13-18,Proverbs 28:15-16\n\
27-Nov-2018,Jonah 3:1-4:11,Revelation 5:9-14,Psalm 133:1-2,Proverbs 28:17-18\n\
28-Nov-2018,Micah 1:1-2:13,Revelation 6:1-8,Psalm 133:3,Proverbs 28:19-20\n\
29-Nov-2018,Micah 3:1-4:13,Revelation 6:9-17,Psalm 134:1-135:4,Proverbs 28:21-22\n\
30-Nov-2018,Micah 5:1-6:8,Revelation 7:1-8,Psalm 135:5-12,Proverbs 28:23-24\n\
1-Dec-2018,Micah 6:9-7:20,Revelation 7:9-17,Psalm 135:13-21,Proverbs 28:25-26\n\
2-Dec-2018,Nahum 1:1-2:13,Revelation 8:1-5,Psalm 136:1-12,Proverbs 28:27-28\n\
3-Dec-2018,Nahum 3:1-19,Revelation 8:6-13,Psalm 136:13-26,Proverbs 29:1\n\
4-Dec-2018,Habakkuk 1:1-2:11,Revelation 9:1-12,Psalm 137:1-4,Proverbs 29:2-4\n\
5-Dec-2018,Habakkuk 2:12-3:19,Revelation 9:13-21,Psalm 137:5-9,Proverbs 29:5-8\n\
6-Dec-2018,Zephaniah 1:1-2:15,Revelation 10:1-7,Psalm 138:1-6,Proverbs 29:9-11\n\
7-Dec-2018,Zephaniah 3:1-20,Revelation 10:8-11,Psalm 138:7-8,Proverbs 29:12-14\n\
8-Dec-2018,Haggai 1:1-15,Revelation 11:1-14,Psalm 139:1-12,Proverbs 29:15-17\n\
9-Dec-2018,Haggai 2:1-23,Revelation 11:15-19,Psalm 139:13-24,Proverbs 29:18\n\
10-Dec-2018,Zechariah 1:1-13,Revelation 12:1-9,Psalm 140:1-8,Proverbs 29:19-20\n\
11-Dec-2018,Zechariah 1:14-21,Revelation 12:10-17,Psalm 140:9-13,Proverbs 29:21-22\n\
12-Dec-2018,Zechariah 2:1-13,Revelation 12:18-13:10,Psalm 141:1-2,Proverbs 29:23\n\
13-Dec-2018,Zechariah 3:1-10,Revelation 13:11-18,Psalm 141:3-10,Proverbs 29:24-25\n\
14-Dec-2018,Zechariah 4:1-14,Revelation 14:1-12,Psalm 142:1-3a,Proverbs 29:26-27\n\
15-Dec-2018,Zechariah 5:1-11,Revelation 14:13-20,Psalm 142:3b-7,Proverbs 30:1-4\n\
16-Dec-2018,Zechariah 6:1-15,Revelation 15:1-4,Psalm 143:1-6,Proverbs 30:5-6\n\
17-Dec-2018,Zechariah 7:1-14,Revelation 15:5-8,Psalm 143:7-12,Proverbs 30:7-9\n\
18-Dec-2018,Zechariah 8:1-13,Revelation 16:1-11,Psalm 144:1-8,Proverbs 30:10\n\
19-Dec-2018,Zechariah 8:14-23,Revelation 16:12-21,Psalm 144:9-15,Proverbs 30:11-14\n\
20-Dec-2018,Zechariah 9:1-8,Revelation 17:1-8,Psalm 145:1-7,Proverbs 30:15-16\n\
21-Dec-2018,Zechariah 9:9-17,Revelation 17:9-18,Psalm 145:8-21,Proverbs 30:17\n\
22-Dec-2018,Zechariah 10:1-12,Revelation 18:1-10,Psalm 146:1-2,Proverbs 30:18-20\n\
23-Dec-2018,Zechariah 11:1-17,Revelation 18:11-24,Psalm 146:3-10,Proverbs 30:21-23\n\
24-Dec-2018,Zechariah 12:1-14,Revelation 19:1-10,Psalm 147:1-11,Proverbs 30:24-28\n\
25-Dec-2018,Zechariah 13:1-9,Revelation 19:11-21,Psalm 147:12-20,Proverbs 30:29-31\n\
26-Dec-2018,Zechariah 14:1-11,Revelation 20:1-10,Psalm 148:1-4,Proverbs 30:32\n\
27-Dec-2018,Zechariah 14:12-21,Revelation 20:11-15,Psalm 148:5-14,Proverbs 30:33\n\
28-Dec-2018,Malachi 1:1-14,Revelation 21:1-14,Psalm 149:1,Proverbs 31:1-7\n\
29-Dec-2018,Malachi 2:1-17,Revelation 21:15-27,Psalm 149:2-9,Proverbs 31:8-9\n\
30-Dec-2018,Malachi 3:1-18,Revelation 22:1-7,Psalm 150:1-5,Proverbs 31:10-24\n\
31-Dec-2018,Malachi 4:1-6,Revelation 22:8-21,Psalm 150:6,Proverbs 31:25-31\n\
";
