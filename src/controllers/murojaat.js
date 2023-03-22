const Io = require('../utils/Io')
const Murojaat = require('../models/murojaat')
const Murojaatlar = new Io(process.cwd() + '/db/murojaat.json')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const murojaatPost = async (req, res) => {
  try{
    const { title, about} = req.body

    const schema = Joi.object({
      title: Joi.required(),
      about: Joi.required()
    })

    const { error } = schema.validate({title, about})

    if(error) return res.status(400).json({message: error.message})

    const murojaatlar = await Murojaatlar.read()

    const murojaatId = (murojaatlar[murojaatlar.length - 1]?.id || 0) + 1
  
    const newMurojaat = new Murojaat(id = murojaatId, title, about)

    const allMurojaat = murojaatlar.length ? [...murojaatlar, newMurojaat] : [newMurojaat]

    Murojaatlar.write(allMurojaat)

    res.status(200).json({message: "Murojaat qo'shildi!"})

  } catch(error) {
    console.log(error);
  }
}

const murojaatGet = async(req, res) => {
  const murojaatlar = await Murojaatlar.read()

  res.status(200).json(murojaatlar)
}

module.exports = {murojaatPost, murojaatGet}