const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags, include associated product data
  Tag.findAll({
    include: [{ model: Product, through: ProductTag, as: "tag_id" }],
  })
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`, include product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: "tag_id" }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag exists with this id." });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // Add a new tag
  /* req.body should look like: 
  {
        "tag_name": "nature",
  }
  */
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a Tag name by its id
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.status(200).json(updatedTag);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", async (req, res) => {
  // delete a tag by id
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag with this id was found." });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
