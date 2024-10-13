// const mongoose = require('mongoose');

// const winnerSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
//   subcategory: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Subcategory',
//     required: true
//   },
//   amount: Number,
//   // status:{type: { type: String, enum: ['winner', 'loser','cancelled'] }},
//   status: {
//     type: String,
//     enum: ['winner', 'loser', 'cancelled','inprogress','regected'],
//   },
//   statusadmin: {
//     type: String,
//     enum: ['winner', 'loser', 'cancelled','inprogress','regected'],
//   },
//   processed: { type: Boolean, default: false },
//   timestamp: { type: Date, default: Date.now },
//   adminApproval: { type: Boolean, default: false }, 
// });



// winnerSchema.pre('find', function(next) {
//   this.populate({
//     path: 'userId',
//     select: 'name email photo phoneNumber'
//   }).populate({
//     path: 'itemId',
//     select: 'imagecover name endDate mainlystartPrice startDate subcategoryId'
//   });

//   next();
// });


// module.exports = mongoose.model('Winner', winnerSchema);






const mongoose = require('mongoose');

const winnerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true
  },
  amount: Number,  // This represents the total amount due (winnerAmount)
  totalPaid: { type: Number, default: 0 },  // The actual amount the user has paid
  paidFromDeposit: { type: Boolean, default: false },  // Whether the amount was paid using the deposit
  status: {
    type: String,
    enum: ['winner', 'loser', 'cancelled', 'inprogress', 'rejected'],
  },
  statusadmin: {
    type: String,
    enum: ['winner', 'loser', 'cancelled', 'inprogress', 'rejected'],
  },
  processed: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
  adminApproval: { type: Boolean, default: false },
});
// winnerSchema.index({ userId: 1, itemId: 1 }, { unique: true });

winnerSchema.pre('find', function(next) {
  this.populate({
    path: 'userId',
    select: 'name email photo phoneNumber'
  }).populate({
    path: 'itemId',
    select: 'imagecover name endDate mainlystartPrice startDate subcategoryId'
  });

  next();
});

module.exports = mongoose.model('Winner', winnerSchema);
