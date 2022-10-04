const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
    Event.find()
        .then(Event => res.json(Event))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const eventname = req.body.eventname;
    const eventdis = req.body.eventdis;
    const organiser = req.body.organiser;
    const customer = req.body.customer;
    const location  = req.body.location;
    const date = Date.parse(req.body.date);
    const type = req.body.type;
    const prize = req.body.prize;
    const capacity = req.body.capacity;
    const duration = Number(req.body.duration);
    const newEvent = new Event({
        eventname,
        eventdis ,
        organiser,
        customer,
        location,
        date,
        type,
        prize,
        capacity,
        duration
    });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
        .then(Event => res.json(Event))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Event.findById(req.params.id)
        .then(Event => {
            Event.eventname = req.body.eventname;
            Event.eventdis = req.body.eventdis;
            Event.organiser = req.body.organiser;
            Event.customer = req.body.customer;
            Event.location  = req.body.location;
            Event.date = Date.parse(req.body.date);
            Event.type = req.body.type;
            Event.prize = req.body.prize;
            Event.capacity = req.body.capacity;
            Event.duration = Number(req.body.duration);

            Event.save()
                .then(() => res.json('Event updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/addcustomer/:id').post((req, res) => {
    Event.findById(req.params.id)
        .then(Event => {
            Event.eventname = req.body.eventname;
            Event.eventdis = req.body.eventdis;
            Event.organiser = req.body.organiser;
            const customer = req.body.customer;
            Event.location  = req.body.location;
            Event.date = Date.parse(req.body.date);
            Event.type = req.body.type;
            Event.prize = req.body.prize;
            Event.capacity = req.body.capacity;
            Event.duration = Number(req.body.duration);
            const newEvent = new Event({
                eventname,
                eventdis ,
                organiser,
                customer,
                location,
                date,
                type,
                prize,
                capacity,
                duration
            });

            newEvent.save()
                .then(() => res.json('Event updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;