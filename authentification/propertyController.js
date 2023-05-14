const Property = require('./property');

// Create a new property
exports.createProperty = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const property = await Property.create({ title, description, price });

    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create property' });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
};

// Get a single property
exports.getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
};

// Update a property
exports.updateProperty = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { title, description, price },
      { new: true }
    );

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update property' });
  }
};

// Delete a property
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete property' });
  }
};
