const db = require("../config/db");

class Post {
  constructor(names, birth, weight, sport, achievements, link) {
    this.names = names;
    this.birth = birth;
    this.weight = weight;
    this.sport = sport;
    this.achievements = achievements;
    this.link = link;
  }

  async save() {
    let sql = `INSERT INTO posts(names,birth,weight,sport,achievements,link) VALUES('${this.names}', '${this.birth}', '${this.weight}', '${this.sport}', '${this.achievements}', '${this.link}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  static updateById(id, names, birth, weight, sport, achievements, link) {
    let sql = `UPDATE posts SET names='${names}', birth='${birth}', weight='${weight}', sport='${sport}', achievements='${achievements}', link='${link}' WHERE id=${id}`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id=${id}`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM posts WHERE id=${id}`;
    return db.execute(sql);
  }
}

module.exports = Post;
