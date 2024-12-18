const Team = require('../models/team.model');

// Create Team Member
exports.createTeamMember = async (req, res) => {
  try {
    const { name, position, bio, avatar } = req.body;
    const newTeamMember = new Team({ name, position, bio, avatar });
    await newTeamMember.save();
    res.status(201).json({ message: "Team member created successfully", newTeamMember });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get All Team Members
exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get Single Team Member
exports.getTeamMember = async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.status(200).json(teamMember);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Edit Team Member
exports.editTeamMember = async (req, res) => {
  try {
    const { name, position, bio, avatar } = req.body;
    const updatedTeamMember = await Team.findByIdAndUpdate(
      req.params.id,
      { name, position, bio, avatar },
      { new: true }
    );
    if (!updatedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.status(200).json({ message: "Team member updated successfully", updatedTeamMember });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete Team Member
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedTeamMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
