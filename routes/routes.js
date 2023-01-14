const express = require("express");
const Brood = require("../models/brood");
const Klant = require("../models/klant");
const { body, validationResult } = require("express-validator");
const { off } = require("../models/brood");
const router = express.Router();

module.exports = router;

// Maak een nieuw brood
router.post(
    "/brood",
    body("kleur").isAlpha(),
    body("graan").isAlpha(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const data = new Brood({
            kleur: req.body.kleur,
            graan: req.body.graan,
            prijs: req.body.prijs,
        });

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
);

// Geef alle broden terug
router.get("/brood", async (req, res) => {
    const filters = req.query;
    const limit = req.query.limit;
    const offset = req.query.offset;
    try {
        const data = await Brood.find(filters).limit(limit).skip(offset);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Geef een brood terug op basis van ID
router.get("/brood/:id", async (req, res) => {
    try {
        const data = await Brood.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Werk een bestaand brood bij
router.put(
    "/brood/:id",
    body("kleur").isAlpha(),
    body("graan").isAlpha(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };
            const result = await Brood.findByIdAndUpdate(
                id,
                updatedData,
                options
            );
            res.send(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
);

// Verwijder een brood
router.delete("/brood/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Brood.findByIdAndDelete(id);
        res.send(`${data.kleur} ${data.graan}brood is verwijderd`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Maak een nieuwe kant
router.post(
    "/klant",
    body("naam").isAlpha(),
    body("gsm_nummer").isMobilePhone(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const data = new Klant({
            naam: req.body.naam,
            adres: req.body.adres,
            leeftijd: req.body.leeftijd,
            gsm_nummer: req.body.gsm_nummer,
        });

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
);

// Geef alle klanten terug
router.get("/klant", async (req, res) => {
    const filters = req.query;
    const limit = req.query.limit;
    const offset = req.query.offset;

    try {
        const data = await Klant.find(filters).limit(limit).skip(offset);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Geef een klant terug op basis van ID
router.get("/klant/:id", async (req, res) => {
    try {
        const data = await Klant.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Werk een bestaande klant bij
router.put(
    "/klant/:id",
    body("naam").isAlpha(),
    body("gsm_nummer").isMobilePhone(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };
            const result = await Klant.findByIdAndUpdate(
                id,
                updatedData,
                options
            );
            res.send(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
);

// Verwijder een klant
router.delete("/klant/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Klant.findByIdAndDelete(id);
        res.send(`Klant met naam ${data.naam} is verwijderd`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
