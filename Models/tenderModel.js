const mongoose = require('mongoose');

const tenderSchema = mongoose.Schema(
    {
    title:{ type: String, required: true },
    description:{ type: String, required: true },
    type:{ type: String, required: true },
    pic:{ type: String, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg", },
    status:{ type: String, default:"unassigned"},
    applicants:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    document:{ type:String, required:true, unique:true },
    payment:{
          type: Number,
      },
    },

  {
    timestamps: true
  }
  );

const Tender = mongoose.model("Tender", tenderSchema);
module.exports = Tender;