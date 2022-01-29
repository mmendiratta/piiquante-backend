const mongoose = require("mongoose");

const sauceModelSchema = mongoose.Schema({
  userId: { type: String, require: true },
  name: { type: String, require: true },
  manufacturer: { type: String, require: true },
  description: { type: String, require: true },
  mainPepper: { type: String, require: true },
  heat: { type: Number, require: true },
  likes: { type: Number, require: true },
  dislikes: { type: Number, require: true },
  usersLiked: { type: [String], require: true },
  usersDisliked: { type: [String], require: true },
});

module.exports = mongoose.model("Sauce", sauceModelSchema);

/*
example
{
	"sauce": {
		"name": "hot 1",
		"manufacturer": "open classrooms",
		"description": "hot sauce by open classrooms",
		"mainPepper": "ghost",
		"imageUrl": "abc123.com",
		"heat": 3,
		"likes": 5,
		"dislikes": 1,
		"usersLiked": [
			"123",
			"456",
			"789",
			"101",
			"112"
		],
		"usersDisliked": [
			"132"
		]
	}
}
*/
