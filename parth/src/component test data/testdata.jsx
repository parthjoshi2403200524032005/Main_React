import React from "react";

function Value() {
  const data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: "fail",
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: "fail",
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: "fail",
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: "pass",
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: "fail",
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: "fail",
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: "fail",
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: "pass",
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: "fail",
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: "pass",
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: "pass",
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: "pass",
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: "fail",
    },
    {
      userId: 1,
      id: 14,
      title: "repellendus sunt dolores architecto voluptatum",
      completed: "pass",
    },
    {
      userId: 1,
      id: 15,
      title: "ab voluptatum amet voluptas",
      completed: "pass",
    },
    {
      userId: 1,
      id: 16,
      title: "accusamus eos facilis sint et aut voluptatem",
      completed: "pass",
    },
    {
      userId: 1,
      id: 17,
      title: "quo laboriosam deleniti aut qui",
      completed: "pass",
    },
    {
      userId: 1,
      id: 18,
      title: "dolorum est consequatur ea mollitia in culpa",
      completed: "fail",
    },
    {
      userId: 1,
      id: 19,
      title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      completed: "pass",
    },
    {
      userId: 1,
      id: 20,
      title: "ullam nobis libero sapiente ad optio sint",
      completed: "pass",
    },
    {
      userId: 2,
      id: 21,
      title: "suscipit repellat esse quibusdam voluptatem incidunt",
      completed: "fail",
    },
    {
      userId: 2,
      id: 22,
      title: "distinctio vitae autem nihil ut molestias quo",
      completed: "pass",
    },
    {
      userId: 2,
      id: 23,
      title: "et itaque necessitatibus maxime molestiae qui quas velit",
      completed: "fail",
    },
    {
      userId: 2,
      id: 24,
      title: "adipisci non ad dicta qui amet quaerat doloribus ea",
      completed: "fail",
    },
    {
      userId: 2,
      id: 25,
      title: "voluptas quo tenetur perspiciatis explicabo natus",
      completed: "pass",
    },
    {
      userId: 2,
      id: 26,
      title: "aliquam aut quasi",
      completed: "pass",
    },
    {
      userId: 2,
      id: 27,
      title: "veritatis pariatur delectus",
      completed: "pass",
    },
    {
      userId: 2,
      id: 28,
      title: "nesciunt totam sit blanditiis sit",
      completed: "fail",
    },
    {
      userId: 2,
      id: 29,
      title: "laborum aut in quam",
      completed: "fail",
    },
    {
      userId: 2,
      id: 30,
      title:
        "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
      completed: "pass",
    },
    {
      userId: 2,
      id: 31,
      title: "repudiandae totam in est sint facere fuga",
      completed: "fail",
    },
    {
      userId: 2,
      id: 32,
      title: "earum doloribus ea doloremque quis",
      completed: "fail",
    },
    {
      userId: 2,
      id: 33,
      title: "sint sit aut vero",
      completed: "fail",
    },
    {
      userId: 2,
      id: 34,
      title: "porro aut necessitatibus eaque distinctio",
      completed: "fail",
    },
    {
      userId: 2,
      id: 35,
      title: "repellendus veritatis molestias dicta incidunt",
      completed: "pass",
    },
    {
      userId: 2,
      id: 36,
      title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
      completed: "pass",
    },
    {
      userId: 2,
      id: 37,
      title: "sunt cum tempora",
      completed: "fail",
    },
    {
      userId: 2,
      id: 38,
      title: "totam quia non",
      completed: "fail",
    },
    {
      userId: 2,
      id: 39,
      title: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
      completed: "fail",
    },
    {
      userId: 2,
      id: 40,
      title: "totam atque quo nesciunt",
      completed: "pass",
    },
    {
      userId: 3,
      id: 41,
      title:
        "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
      completed: "fail",
    },
    {
      userId: 3,
      id: 42,
      title: "rerum perferendis error quia ut eveniet",
      completed: "fail",
    },
    {
      userId: 3,
      id: 43,
      title: "tempore ut sint quis recusandae",
      completed: "pass",
    },
    {
      userId: 3,
      id: 44,
      title: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
      completed: "pass",
    },
    {
      userId: 3,
      id: 45,
      title: "velit soluta adipisci molestias reiciendis harum",
      completed: "fail",
    },
    {
      userId: 3,
      id: 46,
      title: "vel voluptatem repellat nihil placeat corporis",
      completed: "fail",
    },
    {
      userId: 3,
      id: 47,
      title: "nam qui rerum fugiat accusamus",
      completed: "fail",
    },
    {
      userId: 3,
      id: 48,
      title: "sit reprehenderit omnis quia",
      completed: "fail",
    },
    {
      userId: 3,
      id: 49,
      title:
        "ut necessitatibus aut maiores debitis officia blanditiis velit et",
      completed: "fail",
    },
    {
      userId: 3,
      id: 50,
      title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
      completed: "pass",
    },
    {
      userId: 3,
      id: 51,
      title: "distinctio exercitationem ab doloribus",
      completed: "fail",
    },
    {
      userId: 3,
      id: 52,
      title: "nesciunt dolorum quis recusandae ad pariatur ratione",
      completed: "fail",
    },
    {
      userId: 3,
      id: 53,
      title: "qui labore est occaecati recusandae aliquid quam",
      completed: "fail",
    },
    {
      userId: 3,
      id: 54,
      title: "quis et est ut voluptate quam dolor",
      completed: "pass",
    },
    {
      userId: 3,
      id: 55,
      title:
        "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
      completed: "pass",
    },
    {
      userId: 3,
      id: 56,
      title: "deleniti ea temporibus enim",
      completed: "pass",
    },
    {
      userId: 3,
      id: 57,
      title: "pariatur et magnam ea doloribus similique voluptatem rerum quia",
      completed: "fail",
    },
    {
      userId: 3,
      id: 58,
      title: "est dicta totam qui explicabo doloribus qui dignissimos",
      completed: "fail",
    },
    {
      userId: 3,
      id: 59,
      title: "perspiciatis velit id laborum placeat iusto et aliquam odio",
      completed: "fail",
    },
    {
      userId: 3,
      id: 60,
      title: "et sequi qui architecto ut adipisci",
      completed: "pass",
    },
    {
      userId: 4,
      id: 61,
      title: "odit optio omnis qui sunt",
      completed: "pass",
    },
    {
      userId: 4,
      id: 62,
      title: "et placeat et tempore aspernatur sint numquam",
      completed: "fail",
    },
    {
      userId: 4,
      id: 63,
      title: "doloremque aut dolores quidem fuga qui nulla",
      completed: "pass",
    },
    {
      userId: 4,
      id: 64,
      title: "voluptas consequatur qui ut quia magnam nemo esse",
      completed: "fail",
    },
    {
      userId: 4,
      id: 65,
      title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
      completed: "fail",
    },
    {
      userId: 4,
      id: 66,
      title: "rerum eum molestias autem voluptatum sit optio",
      completed: "fail",
    },
    {
      userId: 4,
      id: 67,
      title: "quia voluptatibus voluptatem quos similique maiores repellat",
      completed: "fail",
    },
    {
      userId: 4,
      id: 68,
      title: "aut id perspiciatis voluptatem iusto",
      completed: "fail",
    },
    {
      userId: 4,
      id: 69,
      title:
        "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
      completed: "fail",
    },
    {
      userId: 4,
      id: 70,
      title: "ut sequi accusantium et mollitia delectus sunt",
      completed: "fail",
    },
    {
      userId: 4,
      id: 71,
      title: "aut velit saepe ullam",
      completed: "fail",
    },
    {
      userId: 4,
      id: 72,
      title:
        "praesentium facilis facere quis harum voluptatibus voluptatem eum",
      completed: "fail",
    },
    {
      userId: 4,
      id: 73,
      title: "sint amet quia totam corporis qui exercitationem commodi",
      completed: "pass",
    },
    {
      userId: 4,
      id: 74,
      title: "expedita tempore nobis eveniet laborum maiores",
      completed: "fail",
    },
    {
      userId: 4,
      id: 75,
      title: "occaecati adipisci est possimus totam",
      completed: "fail",
    },
    {
      userId: 4,
      id: 76,
      title: "sequi dolorem sed",
      completed: "pass",
    },
    {
      userId: 4,
      id: 77,
      title:
        "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
      completed: "fail",
    },
    {
      userId: 4,
      id: 78,
      title: "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
      completed: "fail",
    },
    {
      userId: 4,
      id: 79,
      title: "eum ipsa maxime ut",
      completed: "pass",
    },
    {
      userId: 4,
      id: 80,
      title:
        "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
      completed: "pass",
    },
    {
      userId: 5,
      id: 81,
      title: "suscipit qui totam",
      completed: "pass",
    },
    {
      userId: 5,
      id: 82,
      title: "voluptates eum voluptas et dicta",
      completed: "fail",
    },
    {
      userId: 5,
      id: 83,
      title: "quidem at rerum quis ex aut sit quam",
      completed: "pass",
    },
    {
      userId: 5,
      id: 84,
      title: "sunt veritatis ut voluptate",
      completed: "fail",
    },
    {
      userId: 5,
      id: 85,
      title: "et quia ad iste a",
      completed: "pass",
    },
    {
      userId: 5,
      id: 86,
      title: "incidunt ut saepe autem",
      completed: "pass",
    },
    {
      userId: 5,
      id: 87,
      title: "laudantium quae eligendi consequatur quia et vero autem",
      completed: "pass",
    },
    {
      userId: 5,
      id: 88,
      title: "vitae aut excepturi laboriosam sint aliquam et et accusantium",
      completed: "fail",
    },
    {
      userId: 5,
      id: 89,
      title: "sequi ut omnis et",
      completed: "pass",
    },
    {
      userId: 5,
      id: 90,
      title: "molestiae nisi accusantium tenetur dolorem et",
      completed: "pass",
    },
    {
      userId: 5,
      id: 91,
      title: "nulla quis consequatur saepe qui id expedita",
      completed: "pass",
    },
    {
      userId: 5,
      id: 92,
      title: "in omnis laboriosam",
      completed: "pass",
    },
    {
      userId: 5,
      id: 93,
      title:
        "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
      completed: "pass",
    },
    {
      userId: 5,
      id: 94,
      title: "facilis modi saepe mollitia",
      completed: "fail",
    },
    {
      userId: 5,
      id: 95,
      title: "vel nihil et molestiae iusto assumenda nemo quo ut",
      completed: "pass",
    },
    {
      userId: 5,
      id: 96,
      title: "nobis suscipit ducimus enim asperiores voluptas",
      completed: "fail",
    },
    {
      userId: 5,
      id: 97,
      title: "dolorum laboriosam eos qui iure aliquam",
      completed: "fail",
    },
    {
      userId: 5,
      id: 98,
      title:
        "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
      completed: "pass",
    },
    {
      userId: 5,
      id: 99,
      title: "neque voluptates ratione",
      completed: "fail",
    },
    {
      userId: 5,
      id: 100,
      title: "excepturi a et neque qui expedita vel voluptate",
      completed: "fail",
    },
    {
      userId: 6,
      id: 101,
      title: "explicabo enim cumque porro aperiam occaecati minima",
      completed: "fail",
    },
    {
      userId: 6,
      id: 102,
      title: "sed ab consequatur",
      completed: "fail",
    },
    {
      userId: 6,
      id: 103,
      title: "non sunt delectus illo nulla tenetur enim omnis",
      completed: "fail",
    },
    {
      userId: 6,
      id: 104,
      title: "excepturi non laudantium quo",
      completed: "fail",
    },
    {
      userId: 6,
      id: 105,
      title: "totam quia dolorem et illum repellat voluptas optio",
      completed: "pass",
    },
    {
      userId: 6,
      id: 106,
      title: "ad illo quis voluptatem temporibus",
      completed: "pass",
    },
    {
      userId: 6,
      id: 107,
      title:
        "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
      completed: "fail",
    },
    {
      userId: 6,
      id: 108,
      title: "a eos eaque nihil et exercitationem incidunt delectus",
      completed: "pass",
    },
    {
      userId: 6,
      id: 109,
      title: "autem temporibus harum quisquam in culpa",
      completed: "pass",
    },
    {
      userId: 6,
      id: 110,
      title: "aut aut ea corporis",
      completed: "pass",
    },
    {
      userId: 6,
      id: 111,
      title: "magni accusantium labore et id quis provident",
      completed: "fail",
    },
    {
      userId: 6,
      id: 112,
      title:
        "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
      completed: "fail",
    },
    {
      userId: 6,
      id: 113,
      title: "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
      completed: "fail",
    },
    {
      userId: 6,
      id: 114,
      title: "cupiditate quos possimus corporis quisquam exercitationem beatae",
      completed: "fail",
    },
    {
      userId: 6,
      id: 115,
      title: "sed et ea eum",
      completed: "fail",
    },
    {
      userId: 6,
      id: 116,
      title: "ipsa dolores vel facilis ut",
      completed: "pass",
    },
    {
      userId: 6,
      id: 117,
      title: "sequi quae est et qui qui eveniet asperiores",
      completed: "fail",
    },
    {
      userId: 6,
      id: 118,
      title: "quia modi consequatur vero fugiat",
      completed: "fail",
    },
    {
      userId: 6,
      id: 119,
      title: "corporis ducimus ea perspiciatis iste",
      completed: "fail",
    },
    {
      userId: 6,
      id: 120,
      title: "dolorem laboriosam vel voluptas et aliquam quasi",
      completed: "fail",
    },
    {
      userId: 7,
      id: 121,
      title: "inventore aut nihil minima laudantium hic qui omnis",
      completed: "pass",
    },
    {
      userId: 7,
      id: 122,
      title: "provident aut nobis culpa",
      completed: "pass",
    },
    {
      userId: 7,
      id: 123,
      title: "esse et quis iste est earum aut impedit",
      completed: "fail",
    },
    {
      userId: 7,
      id: 124,
      title: "qui consectetur id",
      completed: "fail",
    },
    {
      userId: 7,
      id: 125,
      title: "aut quasi autem iste tempore illum possimus",
      completed: "fail",
    },
    {
      userId: 7,
      id: 126,
      title: "ut asperiores perspiciatis veniam ipsum rerum saepe",
      completed: "pass",
    },
    {
      userId: 7,
      id: 127,
      title: "voluptatem libero consectetur rerum ut",
      completed: "pass",
    },
    {
      userId: 7,
      id: 128,
      title: "eius omnis est qui voluptatem autem",
      completed: "fail",
    },
    {
      userId: 7,
      id: 129,
      title: "rerum culpa quis harum",
      completed: "fail",
    },
    {
      userId: 7,
      id: 130,
      title: "nulla aliquid eveniet harum laborum libero alias ut unde",
      completed: "pass",
    },
    {
      userId: 7,
      id: 131,
      title: "qui ea incidunt quis",
      completed: "fail",
    },
    {
      userId: 7,
      id: 132,
      title: "qui molestiae voluptatibus velit iure harum quisquam",
      completed: "pass",
    },
    {
      userId: 7,
      id: 133,
      title: "et labore eos enim rerum consequatur sunt",
      completed: "pass",
    },
    {
      userId: 7,
      id: 134,
      title: "molestiae doloribus et laborum quod ea",
      completed: "fail",
    },
    {
      userId: 7,
      id: 135,
      title: "facere ipsa nam eum voluptates reiciendis vero qui",
      completed: "fail",
    },
    {
      userId: 7,
      id: 136,
      title: "asperiores illo tempora fuga sed ut quasi adipisci",
      completed: "fail",
    },
    {
      userId: 7,
      id: 137,
      title: "qui sit non",
      completed: "fail",
    },
    {
      userId: 7,
      id: 138,
      title: "placeat minima consequatur rem qui ut",
      completed: "pass",
    },
    {
      userId: 7,
      id: 139,
      title: "consequatur doloribus id possimus voluptas a voluptatem",
      completed: "fail",
    },
    {
      userId: 7,
      id: 140,
      title: "aut consectetur in blanditiis deserunt quia sed laboriosam",
      completed: "pass",
    },
    {
      userId: 8,
      id: 141,
      title:
        "explicabo consectetur debitis voluptates quas quae culpa rerum non",
      completed: "pass",
    },
    {
      userId: 8,
      id: 142,
      title: "maiores accusantium architecto necessitatibus reiciendis ea aut",
      completed: "pass",
    },
    {
      userId: 8,
      id: 143,
      title: "eum non recusandae cupiditate animi",
      completed: "fail",
    },
    {
      userId: 8,
      id: 144,
      title: "ut eum exercitationem sint",
      completed: "fail",
    },
    {
      userId: 8,
      id: 145,
      title: "beatae qui ullam incidunt voluptatem non nisi aliquam",
      completed: "fail",
    },
    {
      userId: 8,
      id: 146,
      title: "molestiae suscipit ratione nihil odio libero impedit vero totam",
      completed: "pass",
    },
    {
      userId: 8,
      id: 147,
      title: "eum itaque quod reprehenderit et facilis dolor autem ut",
      completed: "pass",
    },
    {
      userId: 8,
      id: 148,
      title: "esse quas et quo quasi exercitationem",
      completed: "fail",
    },
    {
      userId: 8,
      id: 149,
      title: "animi voluptas quod perferendis est",
      completed: "fail",
    },
    {
      userId: 8,
      id: 150,
      title: "eos amet tempore laudantium fugit a",
      completed: "fail",
    },
    {
      userId: 8,
      id: 151,
      title: "accusamus adipisci dicta qui quo ea explicabo sed vero",
      completed: "pass",
    },
    {
      userId: 8,
      id: 152,
      title: "odit eligendi recusandae doloremque cumque non",
      completed: "fail",
    },
    {
      userId: 8,
      id: 153,
      title: "ea aperiam consequatur qui repellat eos",
      completed: "fail",
    },
    {
      userId: 8,
      id: 154,
      title: "rerum non ex sapiente",
      completed: "pass",
    },
    {
      userId: 8,
      id: 155,
      title: "voluptatem nobis consequatur et assumenda magnam",
      completed: "pass",
    },
    {
      userId: 8,
      id: 156,
      title: "nam quia quia nulla repellat assumenda quibusdam sit nobis",
      completed: "pass",
    },
    {
      userId: 8,
      id: 157,
      title: "dolorem veniam quisquam deserunt repellendus",
      completed: "pass",
    },
    {
      userId: 8,
      id: 158,
      title: "debitis vitae delectus et harum accusamus aut deleniti a",
      completed: "pass",
    },
    {
      userId: 8,
      id: 159,
      title:
        "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
      completed: "pass",
    },
    {
      userId: 8,
      id: 160,
      title: "et praesentium aliquam est",
      completed: "fail",
    },
    {
      userId: 9,
      id: 161,
      title: "ex hic consequuntur earum omnis alias ut occaecati culpa",
      completed: "pass",
    },
    {
      userId: 9,
      id: 162,
      title: "omnis laboriosam molestias animi sunt dolore",
      completed: "pass",
    },
    {
      userId: 9,
      id: 163,
      title: "natus corrupti maxime laudantium et voluptatem laboriosam odit",
      completed: "fail",
    },
    {
      userId: 9,
      id: 164,
      title: "reprehenderit quos aut aut consequatur est sed",
      completed: "fail",
    },
    {
      userId: 9,
      id: 165,
      title: "fugiat perferendis sed aut quidem",
      completed: "fail",
    },
    {
      userId: 9,
      id: 166,
      title: "quos quo possimus suscipit minima ut",
      completed: "fail",
    },
    {
      userId: 9,
      id: 167,
      title: "et quis minus quo a asperiores molestiae",
      completed: "fail",
    },
    {
      userId: 9,
      id: 168,
      title: "recusandae quia qui sunt libero",
      completed: "fail",
    },
    {
      userId: 9,
      id: 169,
      title: "ea odio perferendis officiis",
      completed: "pass",
    },
    {
      userId: 9,
      id: 170,
      title: "quisquam aliquam quia doloribus aut",
      completed: "fail",
    },
    {
      userId: 9,
      id: 171,
      title: "fugiat aut voluptatibus corrupti deleniti velit iste odio",
      completed: "pass",
    },
    {
      userId: 9,
      id: 172,
      title: "et provident amet rerum consectetur et voluptatum",
      completed: "fail",
    },
    {
      userId: 9,
      id: 173,
      title: "harum ad aperiam quis",
      completed: "fail",
    },
    {
      userId: 9,
      id: 174,
      title: "similique aut quo",
      completed: "fail",
    },
    {
      userId: 9,
      id: 175,
      title:
        "laudantium eius officia perferendis provident perspiciatis asperiores",
      completed: "pass",
    },
    {
      userId: 9,
      id: 176,
      title: "magni soluta corrupti ut maiores rem quidem",
      completed: "fail",
    },
    {
      userId: 9,
      id: 177,
      title: "et placeat temporibus voluptas est tempora quos quibusdam",
      completed: "fail",
    },
    {
      userId: 9,
      id: 178,
      title: "nesciunt itaque commodi tempore",
      completed: "pass",
    },
    {
      userId: 9,
      id: 179,
      title: "omnis consequuntur cupiditate impedit itaque ipsam quo",
      completed: "pass",
    },
    {
      userId: 9,
      id: 180,
      title: "debitis nisi et dolorem repellat et",
      completed: "pass",
    },
    {
      userId: 10,
      id: 181,
      title: "ut cupiditate sequi aliquam fuga maiores",
      completed: "fail",
    },
    {
      userId: 10,
      id: 182,
      title: "inventore saepe cumque et aut illum enim",
      completed: "pass",
    },
    {
      userId: 10,
      id: 183,
      title: "omnis nulla eum aliquam distinctio",
      completed: "pass",
    },
    {
      userId: 10,
      id: 184,
      title: "molestias modi perferendis perspiciatis",
      completed: "fail",
    },
    {
      userId: 10,
      id: 185,
      title: "voluptates dignissimos sed doloribus animi quaerat aut",
      completed: "fail",
    },
    {
      userId: 10,
      id: 186,
      title: "explicabo odio est et",
      completed: "fail",
    },
    {
      userId: 10,
      id: 187,
      title: "consequuntur animi possimus",
      completed: "fail",
    },
    {
      userId: 10,
      id: 188,
      title: "vel non beatae est",
      completed: "pass",
    },
    {
      userId: 10,
      id: 189,
      title: "culpa eius et voluptatem et",
      completed: "pass",
    },
    {
      userId: 10,
      id: 190,
      title: "accusamus sint iusto et voluptatem exercitationem",
      completed: "pass",
    },
    {
      userId: 10,
      id: 191,
      title:
        "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
      completed: "pass",
    },
    {
      userId: 10,
      id: 192,
      title: "ut quas possimus exercitationem sint voluptates",
      completed: "fail",
    },
    {
      userId: 10,
      id: 193,
      title: "rerum debitis voluptatem qui eveniet tempora distinctio a",
      completed: "pass",
    },
    {
      userId: 10,
      id: 194,
      title: "sed ut vero sit molestiae",
      completed: "fail",
    },
    {
      userId: 10,
      id: 195,
      title: "rerum ex veniam mollitia voluptatibus pariatur",
      completed: "pass",
    },
    {
      userId: 10,
      id: 196,
      title: "consequuntur aut ut fugit similique",
      completed: "pass",
    },
    {
      userId: 10,
      id: 197,
      title: "dignissimos quo nobis earum saepe",
      completed: "pass",
    },
    {
      userId: 10,
      id: 198,
      title: "quis eius est sint explicabo",
      completed: "pass",
    },
    {
      userId: 10,
      id: 199,
      title: "numquam repellendus a magnam",
      completed: "pass",
    },
    {
      userId: 10,
      id: 200,
      title: "ipsam aperiam voluptates qui",
      completed: "fail",
    },
  ];

  const completedData = data?.filter((item) => item.completed === "pass");
  const notCompletedData = data.filter((item1) => item1.completed === "fail");
  console.log(notCompletedData);

  return (
    <div className="flex ">
      <div className="border p-4 max-h-[500px] overflow-y-scroll bg-gray-200 animate-fadeIn">
        <h2 className="text-blue-500">All Data</h2>
        <ul>
          {data.map((item, index) => (
            <li key={item.id} className="flex  ">
              <div>{index + 1}</div>

              <li className="text-green-500  ml-[10px]">{item.title}</li>
            </li>
          ))}
        </ul>
      </div>

      <div className="border p-4 max-h-[500px] overflow-y-scroll bg-gray-200 animate-fadeIn">
        <h2 className="text-blue-500">Completed</h2>
        <ul>
          {completedData.map((item1, index) => (
            <li key={item1.id} className="flex  ">
              <div>{index + 1}</div>
              <li className="text-green-500  ml-[10px]">{item1.title}</li>
            </li>
          ))}
        </ul>
      </div>

      <div className="border p-4 max-h-[500px] overflow-y-scroll bg-gray-200 animate-fadeIn">
        <h2 className="text-blue-500">Not Completed</h2>
        <ul>
          {notCompletedData.map((item2, index) => (
            <li key={item2.id} className="flex">
              <div>{index + 1}</div>
              <li className="text-green-500 ml-[10px]">{item2.title}</li>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Value;
