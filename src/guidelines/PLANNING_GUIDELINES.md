# Planning Document Guidelines

**Type:** Process  
**Status:** Complete  
**Version:** 1.0  
**Last Updated:** January 9, 2026  
**Purpose:** Standardize planning document creation, naming, and organization for the WooCommerce Prototype project.

---

## 📋 Overview

All planning documents (`.md` files) must follow standardized formats, be organized in the `/planning/` directory, and include proper documentation of objectives, timelines, and success criteria. This ensures consistent, actionable, and trackable project planning.

---

## 🎯 Purpose

This guideline establishes:
- Location and organization standards for planning documents
- Naming conventions for planning files
- Templates for different planning document types
- Documentation standards
- Status tracking and workflow
- Best practices for maintainability

---

## 📁 Directory Structure

**🚨 CRITICAL: All planning documents MUST be stored in `/planning/` directory.**

```
/planning/
├── README.md                      # Planning directory documentation
├── features/                      # Feature planning documents
├── sprints/                       # Sprint planning and retrospectives
├── roadmaps/                      # Product roadmaps and timelines
├── proposals/                     # Feature proposals and RFCs
├── architecture/                  # Architecture decision records (ADRs)
└── archived/                      # Archived/completed plans
    ├── 2025/
    └── 2026/
```

---

## 🏷️ Naming Conventions

### **Standard Format**

All planning documents must follow this naming convention:

```
YYYY-MM-DD_category-descriptive-name.md
```

**Components:**
1. **Date (Required):** `YYYY-MM-DD` format (e.g., `2026-01-15`)
2. **Category (Optional):** Type of document (feature, sprint, roadmap, proposal, adr)
3. **Descriptive Name (Required):** Clear description in kebab-case

### **Examples**

#### ✅ CORRECT:
```
2026-01-15_feature-product-comparison.md
2026-01-20_sprint-01-planning.md
2026-02-01_roadmap-q1-2026.md
2026-02-05_proposal-dark-mode-enhancement.md
2026-02-10_adr-001-wordpress-architecture.md
2026-03-01_retrospective-sprint-05.md
```

#### ❌ INCORRECT:
```
plan.md                          # Missing date and description
feature-plan.md                  # Missing date
01-15-2026_feature.md            # Wrong date format
2026_01_15_feature.md            # Underscores in date
2026-01-15 feature plan.md       # Spaces in filename
FEATURE_PLAN.md                  # All caps, no date
```

---

## 📝 Planning Document Types

### **1. Feature Plans**

**Location:** `/planning/features/`  
**Purpose:** Detailed planning for individual features  
**Naming:** `YYYY-MM-DD_feature-name.md`

**Use When:**
- Planning a new feature
- Defining feature requirements
- Documenting user stories
- Specifying acceptance criteria

---

### **2. Sprint Plans**

**Location:** `/planning/sprints/`  
**Purpose:** Sprint planning and retrospectives  
**Naming:** `YYYY-MM-DD_sprint-NN-type.md`

**Types:**
- `sprint-NN-planning.md` - Sprint planning
- `sprint-NN-retrospective.md` - Sprint retrospective
- `sprint-NN-review.md` - Sprint review

---

### **3. Roadmaps**

**Location:** `/planning/roadmaps/`  
**Purpose:** Product roadmaps and timelines  
**Naming:** `YYYY-MM-DD_roadmap-period.md`

**Use When:**
- Planning quarterly objectives
- Creating annual roadmap
- Defining feature timelines
- Communicating release schedules

---

### **4. Proposals**

**Location:** `/planning/proposals/`  
**Purpose:** Feature proposals and RFCs  
**Naming:** `YYYY-MM-DD_proposal-topic.md` or `YYYY-MM-DD_rfc-topic.md`

**Use When:**
- Proposing a new feature
- Suggesting process improvements
- Technical RFC (Request for Comments)
- Design proposals

---

### **5. Architecture Decision Records (ADRs)**

**Location:** `/planning/architecture/`  
**Purpose:** Document architectural decisions  
**Naming:** `YYYY-MM-DD_adr-NNN-decision-title.md`

**Use When:**
- Making significant architectural decisions
- Choosing technology stack
- Selecting design patterns
- Documenting technical rationale

---

## 📄 Templates

### **Template 1: Feature Plan**

```markdown
# Feature: [Feature Name]

**Created:** YYYY-MM-DD  
**Author:** [Name]  
**Status:** Draft | In Review | Approved | In Progress | Complete  
**Target Release:** vX.X.X  
**Priority:** High | Medium | Low

---

## 📋 Overview

[Brief 2-3 sentence description of the feature]

---

## 🎯 Objectives

**Primary Objective:**
[Main goal of this feature]

**Secondary Objectives:**
- [Objective 1]
- [Objective 2]
- [Objective 3]

---

## 👥 User Stories

### **User Story 1**
**As a** [user type]  
**I want** [goal]  
**So that** [reason/benefit]

**Acceptance Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

### **User Story 2**
**As a** [user type]  
**I want** [goal]  
**So that** [reason/benefit]

**Acceptance Criteria:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

---

## 🎨 Design Requirements

### **UI/UX**
- [Design requirement 1]
- [Design requirement 2]

### **Responsive Design**
- Mobile: [Behavior]
- Tablet: [Behavior]
- Desktop: [Behavior]

### **Accessibility**
- WCAG 2.1 AA compliance
- [Specific a11y requirements]

---

## 💻 Technical Requirements

### **Frontend**
- [Requirement 1]
- [Requirement 2]

### **Backend** (if applicable)
- [Requirement 1]
- [Requirement 2]

### **Data Models**
- [Model 1]
- [Model 2]

### **API Endpoints** (if applicable)
- `GET /api/endpoint` - [Description]
- `POST /api/endpoint` - [Description]

---

## 📊 Success Criteria

**Must Have:**
- [ ] [Critical requirement 1]
- [ ] [Critical requirement 2]

**Should Have:**
- [ ] [Important requirement 1]
- [ ] [Important requirement 2]

**Could Have:**
- [ ] [Nice-to-have 1]
- [ ] [Nice-to-have 2]

---

## 📅 Timeline

| Phase | Description | Duration | Target Date |
|-------|-------------|----------|-------------|
| Discovery | Research and planning | 1 week | YYYY-MM-DD |
| Design | UI/UX design | 1 week | YYYY-MM-DD |
| Development | Implementation | 2 weeks | YYYY-MM-DD |
| Testing | QA and bug fixes | 1 week | YYYY-MM-DD |
| Release | Deploy to production | 1 day | YYYY-MM-DD |

**Total Estimated Time:** X weeks

---

## 🔗 Dependencies

**Requires:**
- [Dependency 1]
- [Dependency 2]

**Blocks:**
- [Feature X]
- [Feature Y]

---

## ⚠️ Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [Risk 1] | High/Medium/Low | High/Medium/Low | [Mitigation strategy] |
| [Risk 2] | High/Medium/Low | High/Medium/Low | [Mitigation strategy] |

---

## 📚 Resources

**Design Assets:**
- [Figma link]
- [Design system reference]

**Documentation:**
- [Related docs]

**References:**
- [External resources]

---

## 🔄 Changelog

### YYYY-MM-DD
- Initial draft created

---

**Status:** [Draft/In Review/Approved/In Progress/Complete]  
**Last Updated:** YYYY-MM-DD
```

---

### **Template 2: Sprint Plan**

```markdown
# Sprint [Number] Planning

**Sprint:** Sprint [Number]  
**Start Date:** YYYY-MM-DD  
**End Date:** YYYY-MM-DD  
**Duration:** 2 weeks  
**Created:** YYYY-MM-DD

---

## 🎯 Sprint Goal

[Clear, concise statement of what this sprint aims to achieve]

---

## 📊 Sprint Capacity

**Team Members:** [Number]  
**Available Days:** [Number]  
**Planned Story Points:** [Number]  
**Velocity (Previous Sprint):** [Number]

---

## 📋 Sprint Backlog

### **High Priority**

| Task | Story Points | Assignee | Status |
|------|--------------|----------|--------|
| [Task 1] | X | [Name] | To Do |
| [Task 2] | X | [Name] | To Do |

### **Medium Priority**

| Task | Story Points | Assignee | Status |
|------|--------------|----------|--------|
| [Task 1] | X | [Name] | To Do |

### **Low Priority**

| Task | Story Points | Assignee | Status |
|------|--------------|----------|--------|
| [Task 1] | X | [Name] | To Do |

---

## ✅ Definition of Done

- [ ] Code complete and reviewed
- [ ] Unit tests written and passing
- [ ] Integration tests passing
- [ ] Documentation updated
- [ ] Accessibility verified
- [ ] Dark mode tested
- [ ] Responsive design verified
- [ ] Deployed to staging

---

## 🔗 Related Documents

- [Previous Sprint Retrospective](./YYYY-MM-DD_sprint-NN-retrospective.md)
- [Product Roadmap](../roadmaps/YYYY-MM-DD_roadmap-qN-YYYY.md)

---

**Status:** In Progress  
**Last Updated:** YYYY-MM-DD
```

---

### **Template 3: Roadmap**

```markdown
# Roadmap: [Period]

**Period:** [Q1 2026 / 2026 Annual / etc.]  
**Created:** YYYY-MM-DD  
**Author:** [Name]  
**Status:** Draft | Approved | In Progress | Complete

---

## 🎯 Strategic Objectives

### **Objective 1: [Title]**
[Description of strategic objective]

### **Objective 2: [Title]**
[Description of strategic objective]

### **Objective 3: [Title]**
[Description of strategic objective]

---

## 📅 Timeline

### **Month 1 (January 2026)**

**Theme:** [Monthly theme]

**Features:**
- [ ] Feature A - [Description]
- [ ] Feature B - [Description]

**Goals:**
- [Goal 1]
- [Goal 2]

---

### **Month 2 (February 2026)**

**Theme:** [Monthly theme]

**Features:**
- [ ] Feature C - [Description]
- [ ] Feature D - [Description]

**Goals:**
- [Goal 1]
- [Goal 2]

---

### **Month 3 (March 2026)**

**Theme:** [Monthly theme]

**Features:**
- [ ] Feature E - [Description]
- [ ] Feature F - [Description]

**Goals:**
- [Goal 1]
- [Goal 2]

---

## 📊 Success Metrics

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| [Metric 1] | X | Y | 🔴/🟡/🟢 |
| [Metric 2] | X | Y | 🔴/🟡/🟢 |
| [Metric 3] | X | Y | 🔴/🟡/🟢 |

---

## 🔗 Related Documents

- [Feature Plans](../features/)
- [Previous Roadmap](./YYYY-MM-DD_roadmap-previous-period.md)

---

**Status:** [Draft/Approved/In Progress/Complete]  
**Last Updated:** YYYY-MM-DD
```

---

### **Template 4: Proposal/RFC**

```markdown
# Proposal: [Title]

**Created:** YYYY-MM-DD  
**Author:** [Name]  
**Status:** Draft | Under Review | Accepted | Rejected | Implemented  
**Type:** Feature | Technical | Process | Design

---

## 📋 Summary

[Brief 2-3 sentence summary of the proposal]

---

## 🎯 Problem Statement

[Detailed description of the problem this proposal addresses]

**Current State:**
[How things work now]

**Pain Points:**
- [Pain point 1]
- [Pain point 2]
- [Pain point 3]

---

## 💡 Proposed Solution

[Detailed description of the proposed solution]

**How It Works:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Example:**
```
[Code example or visual example]
```

---

## ✅ Benefits

- ✅ [Benefit 1]
- ✅ [Benefit 2]
- ✅ [Benefit 3]

---

## ⚠️ Drawbacks

- ⚠️ [Drawback 1]
- ⚠️ [Drawback 2]

---

## 🔀 Alternatives Considered

### **Alternative 1: [Name]**
**Description:** [Brief description]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Why Not Chosen:** [Reason]

### **Alternative 2: [Name]**
**Description:** [Brief description]

**Pros:**
- [Pro 1]

**Cons:**
- [Con 1]

**Why Not Chosen:** [Reason]

---

## 📊 Implementation Plan

### **Phase 1: [Name]**
**Duration:** X weeks  
**Tasks:**
- [ ] [Task 1]
- [ ] [Task 2]

### **Phase 2: [Name]**
**Duration:** X weeks  
**Tasks:**
- [ ] [Task 1]
- [ ] [Task 2]

---

## 📈 Success Criteria

**How We'll Know This Is Successful:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

---

## 🔗 References

- [Related document 1]
- [Related document 2]
- [External resource]

---

## 💬 Discussion

### Comments
[Space for reviewer comments and feedback]

---

**Status:** [Draft/Under Review/Accepted/Rejected/Implemented]  
**Decision Date:** YYYY-MM-DD (if decided)  
**Decision By:** [Name] (if decided)
```

---

### **Template 5: Architecture Decision Record (ADR)**

```markdown
# ADR-[NNN]: [Decision Title]

**Created:** YYYY-MM-DD  
**Author:** [Name]  
**Status:** Proposed | Accepted | Rejected | Deprecated | Superseded  
**Deciders:** [Names of decision makers]  
**Decision Date:** YYYY-MM-DD (when decided)

---

## 📋 Context

**What is the issue that we're seeing that is motivating this decision or change?**

[Detailed description of the context and background]

**Current Situation:**
[How things work now]

**Forces at Play:**
- [Force 1 - e.g., technical constraint]
- [Force 2 - e.g., business requirement]
- [Force 3 - e.g., team capability]

---

## 💡 Decision

**What is the change that we're proposing and/or doing?**

[Clear statement of the decision made]

**We have decided to:** [Brief decision statement]

**Rationale:**
[Detailed explanation of why this decision was made]

---

## 🔀 Considered Options

### **Option 1: [Name]** (Selected ✅)

**Description:** [Brief description]

**Pros:**
- ✅ [Pro 1]
- ✅ [Pro 2]
- ✅ [Pro 3]

**Cons:**
- ⚠️ [Con 1]
- ⚠️ [Con 2]

### **Option 2: [Name]**

**Description:** [Brief description]

**Pros:**
- ✅ [Pro 1]
- ✅ [Pro 2]

**Cons:**
- ❌ [Con 1]
- ❌ [Con 2]

**Why Not Chosen:** [Reason]

### **Option 3: [Name]**

**Description:** [Brief description]

**Pros:**
- ✅ [Pro 1]

**Cons:**
- ❌ [Con 1]
- ❌ [Con 2]

**Why Not Chosen:** [Reason]

---

## 📊 Consequences

**Positive:**
- ✅ [Positive consequence 1]
- ✅ [Positive consequence 2]

**Negative:**
- ⚠️ [Negative consequence 1]
- ⚠️ [Negative consequence 2]

**Neutral:**
- ℹ️ [Neutral consequence 1]

**Risks:**
- ⚠️ [Risk 1 and mitigation]
- ⚠️ [Risk 2 and mitigation]

---

## 📚 References

**Supporting Documentation:**
- [Reference 1]
- [Reference 2]

**Related ADRs:**
- [ADR-001](./YYYY-MM-DD_adr-001-previous-decision.md)

**External Resources:**
- [External link 1]
- [External link 2]

---

## 🔄 Changelog

### YYYY-MM-DD
- Status changed from Proposed to Accepted
- Decision made by [Name]

### YYYY-MM-DD
- Initial ADR created

---

**Status:** [Proposed/Accepted/Rejected/Deprecated/Superseded]  
**Last Updated:** YYYY-MM-DD
```

---

## ✅ Best Practices

### **DO:**

1. ✅ **Use descriptive titles**
   ```
   Good: "Feature: Product Comparison Tool"
   Bad: "Feature Plan"
   ```

2. ✅ **Include clear objectives**
   - Define what success looks like
   - Set measurable goals
   - Identify key results

3. ✅ **Document assumptions**
   - What are we assuming?
   - What might change?
   - What dependencies exist?

4. ✅ **Track status**
   ```markdown
   Draft → In Review → Approved → In Progress → Complete
   ```

5. ✅ **Link related documents**
   - Connect features to roadmaps
   - Link sprints to features
   - Reference related ADRs

6. ✅ **Update regularly**
   - Keep status current
   - Document decisions
   - Note blockers

7. ✅ **Archive when complete**
   ```bash
   mv /planning/features/2025-12-01_feature-x.md /planning/archived/2025/
   ```

8. ✅ **Use templates**
   - Ensures consistency
   - Nothing gets forgotten
   - Easier to read

9. ✅ **Be specific**
   ```
   Good: "Reduce page load time to under 2 seconds"
   Bad: "Make site faster"
   ```

10. ✅ **Include timelines**
    - Set target dates
    - Define phases
    - Estimate duration

---

## 🚫 Common Mistakes to Avoid

### **❌ DON'T:**

1. **Create vague objectives**
   ```
   ❌ "Improve the product"
   ✅ "Increase product detail page conversion rate by 15%"
   ```

2. **Skip success criteria**
   ```
   ❌ No acceptance criteria defined
   ✅ Clear, testable acceptance criteria for each story
   ```

3. **Ignore dependencies**
   ```
   ❌ No mention of blocking issues
   ✅ "Blocked by: API v2 completion"
   ```

4. **Forget to update status**
   ```
   ❌ Status stuck on "Draft" for completed work
   ✅ Status reflects current state
   ```

5. **Store in wrong location**
   ```
   ❌ /feature-plan.md (root directory)
   ✅ /planning/features/2026-01-15_feature-name.md
   ```

6. **Use inconsistent naming**
   ```
   ❌ feature_plan.md, FeaturePlan.md, FEATURE.md
   ✅ 2026-01-15_feature-name.md
   ```

7. **Omit dates**
   ```
   ❌ feature-product-comparison.md
   ✅ 2026-01-15_feature-product-comparison.md
   ```

---

## 📊 Status Values

### **Standard Status Progression**

```
Draft → In Review → Approved → In Progress → Complete
```

**Status Definitions:**

| Status | Meaning | Next Action |
|--------|---------|-------------|
| **Draft** | Initial creation | Get feedback, refine |
| **In Review** | Under evaluation | Gather approvals |
| **Approved** | Ready to execute | Begin implementation |
| **In Progress** | Actively working | Continue development |
| **Complete** | Finished | Archive or close |
| **On Hold** | Paused | Resume when unblocked |
| **Cancelled** | No longer pursuing | Archive |

---

## 🔄 Archiving Process

### **When to Archive**

- ✅ Feature completed and deployed (after 1 month)
- ✅ Sprint completed (after 3 months)
- ✅ Roadmap period passed
- ✅ Proposal rejected or superseded
- ✅ ADR deprecated or superseded

### **How to Archive**

1. **Update status to Complete/Cancelled**
2. **Add completion/cancellation date**
3. **Move to archived folder by year**

```bash
# Example: Archive completed feature from 2025
mv /planning/features/2025-12-01_feature-x.md /planning/archived/2025/

# Example: Archive completed sprint
mv /planning/sprints/2025-12-15_sprint-10-planning.md /planning/archived/2025/
```

---

## 📚 Related Documentation

- [/planning/README.md](../../planning/README.md) - Planning directory documentation
- [WRITING_GUIDELINES.md](./WRITING_GUIDELINES.md) - Guidelines writing standards
- [REPORTING_GUIDELINES.md](./REPORTING_GUIDELINES.md) - Reporting standards
- [../Guidelines.md](../Guidelines.md) - Main project guidelines

---

## 🔄 Changelog

### v1.0 - 2026-01-09
- Initial documentation
- Created 5 planning templates
- Established naming conventions
- Defined directory structure
- Documented status values
- Created archiving process

---

**Status:** ✅ Complete  
**Maintainer:** Project Team  
**Last Review:** January 9, 2026
